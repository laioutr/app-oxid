import { SuggestedSearchSearchQuery } from '@laioutr-core/canonical-types/suggested-search';
import { suggestionResultsFragmentToken } from '../../const/passthroughTokens';
import { defineOxidQuery } from '../../middleware/defineOxid';

export default defineOxidQuery(SuggestedSearchSearchQuery, async ({ context, input, passthrough }) => {
  const oxidClient = context.oxid.client;

  const { query } = input;

  const categoriesResults = (await oxidClient.listCategories()).categories
    .filter((category) => (query ? category.title.toLowerCase().includes(query.toLowerCase()) : true))
    .slice(0, 10)
    .map((category) => ({
      id: category.id,
      type: 'category',
      title: category.title,
      url: '#',
    }));

  const productsResults = (await oxidClient.searchProducts(query ?? '', {}, { includeProductBase: true })).products
    .slice(0, 10)
    .map((product) => ({
      id: product.id,
      type: 'product',
      title: product.title,
      url: '#',
    }));

  passthrough.set(suggestionResultsFragmentToken, [...categoriesResults, ...productsResults]);

  return { id: '#' };
});
