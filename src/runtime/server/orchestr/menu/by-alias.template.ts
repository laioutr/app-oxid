import { MenuByAliasQuery } from '@laioutr-core/canonical-types/ecommerce';
import { defineOxidQueryTemplateProvider } from '../../middleware/defineOxid';
import { extractEntitySlug } from '../../utils/oxid/extractSlug';

export default defineOxidQueryTemplateProvider({
  for: MenuByAliasQuery,
  run: async ({ context, input }) => {
    const oxidClient = context.oxidClient;
    const term = input.term;

    const allCategories = await oxidClient.listCategories();
    const filteredCategories =
      term ?
        allCategories.categories.filter((category) => category.title.toLowerCase().includes(term.toLowerCase()))
      : allCategories.categories;

    return [
      ...(term ? [] : [{ label: 'Root', input: { alias: 'root' } }]),
      ...filteredCategories.map((category) => ({
        label: category.title,
        input: { alias: extractEntitySlug('category', category) },
      })),
    ];
  },
});
