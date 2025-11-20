import { MenuByAliasQuery } from '@laioutr-core/canonical-types/ecommerce';
import { CategoryFragment } from '../../../../generated/types';
import { categoriesPassthroughToken } from '../../const/passthroughTokens';
import { defineOxidQuery } from '../../middleware/defineOxid';
import { parseMenuId } from '../../utils/oxid/menuId';

export default defineOxidQuery(MenuByAliasQuery, async ({ context, input, passthrough }) => {
  const oxidClient = context.oxid.client;
  const { alias } = input;

  let filtered: CategoryFragment[];

  if (alias === 'root') {
    const response = await oxidClient.listCategories();
    filtered = response.categories;
  } else {
    const { id } = parseMenuId(alias);
    const response = await oxidClient.listCategories(id);
    filtered = response.categories.map((category) => ({
      ...category,
      parent: category.parent && category.parent.id !== id ? { id: category.parent.id } : undefined,
    }));
  }

  passthrough.set(categoriesPassthroughToken, filtered);

  return { ids: filtered.map((category) => category.id) };
});
