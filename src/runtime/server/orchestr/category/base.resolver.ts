import { CategoryBase, CategoryContent, CategoryMedia, CategorySeo } from '@laioutr-core/canonical-types/entity/category';
import { categoriesPassthroughToken } from '../../const/passthroughTokens';
import { mapImageFragment } from '../../mappers/media';
import { defineOxidComponentResolver } from '../../middleware/defineOxid';
import { extractEntitySlug } from '../../utils/oxid/extractSlug';

export default defineOxidComponentResolver({
  entityType: 'Category',
  label: 'Shopware Category Connector',
  provides: [CategoryBase, CategoryContent, CategoryMedia, CategorySeo],
  resolve: async ({ entityIds, context, passthrough, $entity }) => {
    const { oxid } = context;

    const categories =
      passthrough.has(categoriesPassthroughToken) ?
        passthrough.get(categoriesPassthroughToken)!
      : (await oxid.client.listCategories()).categories.filter((category) => entityIds.includes(category.id));

    if (!categories) {
      throw new Error(
        'Categories not found in passthrough. The component resolver does not request categories from shopware at the moment.'
      );
    }

    return {
      entities: categories
        .filter((category) => entityIds.includes(category.id))
        .map((category) =>
          $entity({
            id: category.id,

            base: () => ({
              slug: extractEntitySlug('category', category),
              title: category.title,
            }),

            content: () => ({
              description: { html: category.longDescription },
            }),

            media: () => ({
              media: category.thumbnail ? [mapImageFragment({ url: category.thumbnail })] : [],
            }),

            seo: () => ({
              title: category.title,
              description: category.seo.description,
            }),
          })
        ),
    };
  },
  cache: {
    ttl: '10 minutes',
  },
});
