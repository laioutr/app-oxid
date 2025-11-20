import { ProductBySlugQuery } from '@laioutr-core/canonical-types/ecommerce';
import { defineOxidQuery } from '../../middleware/defineOxid';
import { parseSlug } from '../../utils/oxid/parseSlug';

export default defineOxidQuery({
  implements: ProductBySlugQuery,
  run: async ({ input }) => {
    const parsed = parseSlug('product', input.slug);
    if (!('id' in parsed)) {
      throw new Error(`Invalid slug: ${input.slug}. Must contain an id.`);
    }

    return { id: parsed.id };
  },
});
