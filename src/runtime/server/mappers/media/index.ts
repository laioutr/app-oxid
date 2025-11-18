import { MediaImage } from '@laioutr-core/canonical-types';
import { ProductImage } from '../../../../generated/types';

export const mapProductImageFragment = (media: ProductImage): MediaImage => ({
  type: 'image',
  alt: media.icon ?? undefined,
  sources: [{ provider: 'oxid', src: media.image ?? '' }],
});
