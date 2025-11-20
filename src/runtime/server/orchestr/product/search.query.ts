import { ProductSearchQuery } from '@laioutr-core/canonical-types/ecommerce';
import { productsPassthroughToken } from '../../const/passthroughTokens';
import { defineOxidQuery } from '../../middleware/defineOxid';

export default defineOxidQuery(ProductSearchQuery, async ({ context, input, passthrough, requestedComponents, requestedLinks }) => {
  const oxidClient = context.oxid.client;

  const { query } = input;

  const { products } = await oxidClient.searchProducts(
    query ?? '',
    {},
    {
      includeProductBase: requestedComponents.includes('base'),
      includeProductInfo: requestedComponents.includes('info'),
      includeProductMedia: requestedComponents.includes('media'),
      includeProductPrices: requestedComponents.includes('prices'),
      includeProductSeo: requestedComponents.includes('seo'),
      includeProductDescription: requestedComponents.includes('description'),
      includeProductAvailability: !!requestedLinks['ecommerce/product/variants']?.components?.includes('availability'),
      includeProductOptions: !!requestedLinks['ecommerce/product/variants']?.components?.includes('options'),
      includeProductQuantityPrices: !!requestedLinks['ecommerce/product/variants']?.components?.includes('quantityPrices'),
      includeProductVariant: !!requestedLinks['ecommerce/product/variants'],
      includeProductVariantBase: !!requestedLinks['ecommerce/product/variants']?.components?.includes('base'),
      includeProductVariantInfo: !!requestedLinks['ecommerce/product/variants']?.components?.includes('info'),
      includeProductVariantMedia: !!requestedLinks['ecommerce/product/variants']?.components?.includes('media'),
      includeProductVariantPrices: !!requestedLinks['ecommerce/product/variants']?.components?.includes('prices'),
      includeProductVariantAvailability: !!requestedLinks['ecommerce/product/variants']?.components?.includes('availability'),
      includeProductVariantOptions: !!requestedLinks['ecommerce/product/variants']?.components?.includes('options'),
      includeProductVariantQuantityPrices: !!requestedLinks['ecommerce/product/variants']?.components?.includes('quantityPrices'),
    }
  );

  passthrough.set(productsPassthroughToken, products);

  return { ids: products.map((product) => product.id) };
});
