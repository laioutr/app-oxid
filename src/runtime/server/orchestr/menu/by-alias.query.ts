import { CategoryNotFoundError, MenuByAliasQuery } from '@laioutr-core/canonical-types/ecommerce';
import { Category } from '../../../../generated/types';
import { categoriesPassthroughToken } from '../../const/passthroughTokens';
import { defineOxidQuery } from '../../middleware/defineOxid';
import { extractSlugFromSeo } from '../../utils/oxid';

export default defineOxidQuery(MenuByAliasQuery, async ({ context, input, passthrough }) => {
  const { oxidClient } = context;

  const { alias } = input;

  const { categories } = await oxidClient.listCategories();

  let filtered: Category[];

  if (alias === 'root') {
    filtered = categories.filter((category) => !category.parent) as Category[];
  } else {
    const parent = categories.find((category) => extractSlugFromSeo(category.seo) === alias);
    if (!parent) throw new CategoryNotFoundError(alias);

    filtered = categories.filter((category) => category.parent?.id === parent?.id) as Category[];
  }

  passthrough.set(categoriesPassthroughToken, filtered);

  return { ids: filtered.map((category) => category.id) };
});
