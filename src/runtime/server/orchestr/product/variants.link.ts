import { ProductVariantsLink } from '@laioutr-core/canonical-types/ecommerce';
import { Product } from '../../../../generated/types';
import { productsPassthroughToken, variantsPassthroughToken } from '../../const/passthroughTokens';
import { defineOxidLink } from '../../middleware/defineOxid';

export default defineOxidLink(ProductVariantsLink, async ({ entityIds, context, passthrough }) => {
  const oxidClient = context.oxid.client;

  const products =
    passthrough.has(productsPassthroughToken) ?
      passthrough.get(productsPassthroughToken)!
    : await Promise.all(
        entityIds.map((id) =>
          oxidClient
            .getProductById(id, {
              includeProductVariant: true,
              includeProductVariantBase: true,
              includeProductVariantInfo: true,
              includeProductVariantMedia: true,
              includeProductVariantPrices: true,
              includeProductVariantAvailability: true,
              includeProductVariantOptions: true,
              includeProductVariantQuantityPrices: true,
            })
            .then((r) => r.product)
        )
      );

  const variants = [] as Product[];

  await Promise.all(
    products.map(async (p) => {
      const { variantSelections } = await oxidClient.getVariantSelectionLists(
        p.id,
        p.variants.length > 0 ? p.variants.map((v) => v.id) : [p.id]
      );

      for (const v of p.variants) {
        variants.push({
          ...v,
          selectionLists: variantSelections?.selections.map((selection) => ({ title: selection.label, fields: selection.fields })) ?? [],
        } as Product);
      }
    })
  );

  passthrough.set(variantsPassthroughToken, variants);

  return {
    links: products.map((product) => ({
      sourceId: product.id,
      targetIds: variants.map((variant) => variant.id),
    })),
  };
});
