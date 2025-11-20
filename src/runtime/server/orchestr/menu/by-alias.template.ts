import { MenuByAliasQuery } from '@laioutr-core/canonical-types/ecommerce';
import { defineOxidQueryTemplateProvider } from '../../middleware/defineOxid';
import { getMenuId } from '../../utils/oxid/menuId';

export default defineOxidQueryTemplateProvider({
  for: MenuByAliasQuery,
  run: async ({ context, input }) => {
    const oxidClient = context.oxid.client;
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
        input: { alias: getMenuId('category', category.id) },
      })),
    ];
  },
});
