import { ProductsByCategorySlugQuery } from '@laioutr-core/canonical-types/ecommerce';
import { productsPassthroughToken } from '../../const/passthroughTokens';
import { defineOxidQuery } from '../../middleware/defineOxid';

export default defineOxidQuery(ProductsByCategorySlugQuery, async ({ context, input, filter, pagination, sorting, passthrough }) => {
  const { oxidClient, availableSortings } = context;

  const { categorySlug } = input;

  const { products } = await oxidClient.getProductsByCategorySlug(categorySlug, { pagination, sort: sorting });

  passthrough.set(productsPassthroughToken, products);

  return { ids: products.map((product) => product.id), availableFilters: [], availableSortings };
});
