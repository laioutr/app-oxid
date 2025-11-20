import { ProductsByCategorySlugQuery } from '@laioutr-core/canonical-types/ecommerce';
import { defineOxidQueryTemplateProvider } from '../../middleware/defineOxid';
import { extractEntitySlug } from '../../utils/oxid/extractSlug';

export default defineOxidQueryTemplateProvider({
  for: ProductsByCategorySlugQuery,
  run: async ({ context, input }) => {
    const oxidClient = context.oxid.client;
    const term = input.term;

    const allCategories = await oxidClient.listCategories();
    const filteredCategories =
      term ?
        allCategories.categories.filter((category) => category.title.toLowerCase().includes(term.toLowerCase()))
      : allCategories.categories;

    return filteredCategories.map((category) => ({
      label: category.title,
      input: { categorySlug: extractEntitySlug('category', category) },
    }));
  },
});
