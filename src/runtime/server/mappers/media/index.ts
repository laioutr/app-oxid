import { useRuntimeConfig } from '#imports';
import { MediaImage } from '@laioutr-core/canonical-types';
import { ProductImage } from '../../../../generated/types';

export const mapImageFragment = ({ url }: { url: string }) => ({
  type: 'image' as const,
  alt: undefined,
  sources: [{ provider: 'oxid', src: url }],
});

export const mapResponsiveProductImageFragment = ({ image, icon, zoom }: ProductImage): MediaImage => {
  const { imagesConfig } = useRuntimeConfig()['@laioutr/app-oxid'];

  const originalSource = image;

  const { width: icon_image_width, height: icon_image_height } = imagesConfig?.iconImageSize ?? {};
  const { width: zoom_image_width, height: zoom_image_height } = imagesConfig?.zoomImageSize ?? {};

  const srcset = [
    { url: icon, width: icon_image_width, height: icon_image_height },
    { url: zoom, width: zoom_image_width, height: zoom_image_height },
  ].filter((src) => !!src.url && !!src.width && !!src.height);

  const responsiveSources = srcset.map(({ url, width, height }) => `${url} ${width}x${height}`).join(', ');

  const url = `${originalSource}#${responsiveSources}`;

  return mapImageFragment({ url });
};
