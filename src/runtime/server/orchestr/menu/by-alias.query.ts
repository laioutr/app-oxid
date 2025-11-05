import { CategoryNotFoundError, MenuByAliasQuery } from '@laioutr-core/canonical-types/ecommerce';
import { defineOxidQuery } from '../../middleware/defineOxid';
import { extractSlugFromSeo } from '../../utils/oxid';

export default defineOxidQuery(MenuByAliasQuery, async ({ context, input }) => {
  const { oxidClient } = context;

  const { alias } = input;

  const { categories } = await oxidClient.listCategories();

  if (alias === 'root') {
    return { ids: categories.filter((category) => !category.parent).map((category) => category.id) };
  }

  const parent = categories.find((category) => extractSlugFromSeo(category.seo) === alias);

  if (!parent) throw new CategoryNotFoundError(alias);

  return { ids: categories.filter((category) => category.parent?.id === parent?.id).map((category) => category.id) };
});
