import { CategoryBySlugQuery, CategoryNotFoundError } from '@laioutr-core/canonical-types/ecommerce';
import { categoriesPassthroughToken } from '../../const/passthroughTokens';
import { defineOxidQuery } from '../../middleware/defineOxid';

export default defineOxidQuery(CategoryBySlugQuery, async ({ context, input, passthrough }) => {
  const { oxid } = context;

  const { slug } = input;

  const category = await oxid.client.getCategoryBySlug(slug);

  if (!category) throw new CategoryNotFoundError(slug);

  passthrough.set(categoriesPassthroughToken, [category]);

  return { id: category.id };
});
