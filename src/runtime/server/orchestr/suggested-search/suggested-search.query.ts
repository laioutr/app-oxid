import { SuggestedSearchSearchQuery } from '@laioutr-core/canonical-types/suggested-search';
import { suggestionResultsFragmentToken } from '../../const/passthroughTokens';
import { defineOxidQuery } from '../../middleware/defineOxid';
import { extractEntitySlug } from '../../utils/oxid/extractSlug';

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
      link: {
        type: 'reference',
        reference: { type: 'category', id: category.id, slug: extractEntitySlug('category', category) },
      } as const,
    }));

  const productsResults = (await oxidClient.searchProducts(query ?? '', {}, { includeProductBase: true })).products
    .slice(0, 10)
    .map((product) => ({
      id: product.id,
      type: 'product',
      title: product.title,
      link: {
        type: 'reference',
        reference: { type: 'product', id: product.id, slug: extractEntitySlug('product', product) },
      } as const,
    }));

  const id = `search-suggest:${query}`;

  passthrough.set(suggestionResultsFragmentToken, { id, suggestions: [...categoriesResults, ...productsResults] });

  return { id };
});
