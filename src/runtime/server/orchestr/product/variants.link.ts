import { ProductVariantsLink } from '@laioutr-core/canonical-types/ecommerce';
import { productsPassthroughToken, variantsPassthroughToken } from '../../const/passthroughTokens';
import { defineOxidLink } from '../../middleware/defineOxid';

export default defineOxidLink(ProductVariantsLink, async ({ entityIds, context, passthrough }) => {
  const { oxidClient } = context;

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

  passthrough.set(
    variantsPassthroughToken,
    products.flatMap((product) => (product.variants?.length > 0 ? product.variants : [product]))
  );

  return {
    links: products.map((product) => ({
      sourceId: product.id,
      targetIds: (product.variants?.length > 0 ? product.variants : [product]).map((variant) => variant.id),
    })),
  };
});
