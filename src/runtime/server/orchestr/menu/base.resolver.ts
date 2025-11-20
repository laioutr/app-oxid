import { MenuItemBase } from '@laioutr-core/canonical-types/entity/menuItem';
import { categoriesPassthroughToken } from '../../const/passthroughTokens';
import { defineOxidComponentResolver } from '../../middleware/defineOxid';
import { extractEntitySlug } from '../../utils/oxid/extractSlug';

export default defineOxidComponentResolver({
  entityType: 'MenuItem',
  label: 'Oxid Menu Resolver',
  provides: [MenuItemBase],
  resolve: async ({ entityIds, context, $entity, passthrough }) => {
    const oxidClient = context.oxid.client;

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
            type: 'link',
            name: category.title,
            link: {
              type: 'reference',
              reference: {
                type: 'Category',
                slug: extractEntitySlug('category', category),
                id: category.id,
              },
            },
            childIds: category.children.map((child) => child.id),
            parentId: category.parent?.id,
          }),
        })
      );

    return { entities };
  },
});
