import { ProductsByCategorySlugQuery } from '@laioutr-core/canonical-types/ecommerce';
import { productsPassthroughToken } from '../../const/passthroughTokens';
import { mapOxidFacetsToAvailableFilters } from '../../mappers/filters';
import { defineOxidQuery } from '../../middleware/defineOxid';

export default defineOxidQuery(
  ProductsByCategorySlugQuery,
  async ({ context, input, requestedComponents, requestedLinks, pagination, sorting, passthrough }) => {
    const { oxidClient, availableSortings } = context;

    const { categorySlug } = input;

    // TODO: Figure out how to properly use OXID filters in products query
    const { products } = await oxidClient.getProductsByCategorySlug(
      categorySlug,
      { pagination, sort: sorting },
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

    const { manufacturers } = await oxidClient.listManufacturers();
    const { vendors } = await oxidClient.listVendors();

    const availableFilters = mapOxidFacetsToAvailableFilters({ manufacturers, vendors });

    return { ids: products.map((product) => product.id), availableFilters, availableSortings };
  }
);
