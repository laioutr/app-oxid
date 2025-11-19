import { Money } from '@screeny05/ts-money';
import {
  ProductBase,
  ProductDescription,
  ProductFlags,
  ProductInfo,
  ProductMedia,
  ProductPrices,
  ProductSeo,
} from '@laioutr-core/canonical-types/entity/product';
import { productsPassthroughToken } from '../../const/passthroughTokens';
import { mapResponsiveProductImageFragment } from '../../mappers/media';
import { defineOxidComponentResolver } from '../../middleware/defineOxid';
import { extractSlugFromSeo } from '../../utils/oxid';

export default defineOxidComponentResolver({
  label: 'OXID Product Resolver',
  entityType: 'Product',
  provides: [ProductBase, ProductDescription, ProductInfo, ProductMedia, ProductPrices, ProductSeo, ProductFlags],
  resolve: async ({ entityIds, context, requestedComponents, passthrough, $entity }) => {
    const { oxidClient } = context;

    const products =
      passthrough.has(productsPassthroughToken) ?
        passthrough.get(productsPassthroughToken)!
      : await Promise.all(
          entityIds.map((id) =>
            oxidClient
              .getProductById(id, {
                includeProductBase: requestedComponents.includes('base'),
                includeProductInfo: requestedComponents.includes('info'),
                includeProductMedia: requestedComponents.includes('media'),
                includeProductPrices: requestedComponents.includes('prices'),
                includeProductSeo: requestedComponents.includes('seo'),
                includeProductDescription: requestedComponents.includes('description'),
              })
              .then((r) => r.product)
          )
        );

    const entities = products.map((product) => {
      const media = product.imageGallery.images;
      const coverImage = product.imageGallery.images[0];

      const price = Money.fromDecimal({ amount: product.price.price, currency: product.price.currency.name });
      const strikethroughPrice =
        product.listPrice ? Money.fromDecimal({ amount: product.listPrice.price, currency: product.listPrice.currency.name }) : undefined;
      const isStartingFrom = product.price.price !== product.varMinPrice;
      const isOnSale = !!strikethroughPrice;
      const savingsPercent = strikethroughPrice ? 100 - price?.percentageOf(strikethroughPrice) : undefined;

      return $entity({
        id: product.id,

        base: () => ({
          name: product.title,
          slug: extractSlugFromSeo(product.seo) ?? product.sku ?? product.id,
        }),

        info: () => ({
          brand: product.manufacturer?.title,
          cover: mapResponsiveProductImageFragment(coverImage),
          shortDescription: product.shortDescription,
        }),

        description: () => ({
          html: product.longDescription ?? product.shortDescription,
        }),

        media: () => ({
          images: media.map(mapResponsiveProductImageFragment),
          media: media.map(mapResponsiveProductImageFragment),
        }),

        prices: () => ({
          price,
          isOnSale,
          isStartingFrom,
          strikethroughPrice,
          savingsPercent,
        }),

        seo: () => ({
          title: product.title,
          description: product.seo.description ?? product.shortDescription,
        }),

        flags: () => [],
      });
    });

    return { entities };
  },
});
