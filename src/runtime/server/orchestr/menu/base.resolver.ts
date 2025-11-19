import { MenuItemBase } from '@laioutr-core/canonical-types/entity/menuItem';
import { categoriesPassthroughToken } from '../../const/passthroughTokens';
import { defineOxidComponentResolver } from '../../middleware/defineOxid';
import { extractSlugFromSeo } from '../../utils/oxid';

export default defineOxidComponentResolver({
  entityType: 'MenuItem',
  label: 'Oxid Menu Resolver',
  provides: [MenuItemBase],
  resolve: async ({ entityIds, context, $entity, passthrough }) => {
    const { oxidClient } = context;

    const { categories } =
      passthrough.has(categoriesPassthroughToken) ?
        { categories: passthrough.get(categoriesPassthroughToken)! }
      : await oxidClient.listCategories();

    const entities = categories
      .filter((category) => entityIds.includes(category.id))
      .map((category) =>
        $entity({
          id: category.id,

          base: () => ({
            type: 'reference',
            name: category.title,
            reference: {
              type: 'category',
              slug: extractSlugFromSeo(category.seo) ?? category.id,
              id: category.id,
            },
            childIds: category.children.map((child) => child.id),
            parentId: category.parent?.id,
          }),
        })
      );

    return { entities };
  },
});
