import { Money } from '@screeny05/ts-money';
import {
  CartItemAvailability,
  CartItemBase,
  CartItemCost,
  CartItemProductData,
  CartItemQuantityRule,
} from '@laioutr-core/canonical-types/entity/cart-item';
import { cartFragmentToken } from '../../const/passthroughTokens';
import { mapProductImageFragment } from '../../mappers/media';
import { defineOxidComponentResolver } from '../../middleware/defineOxid';
import { extractSlugFromSeo } from '../../utils/oxid';

export default defineOxidComponentResolver({
  entityType: 'CartItem',
  label: 'Oxid Cart Item Component Resolver',
  provides: [CartItemBase, CartItemCost, CartItemProductData, CartItemAvailability, CartItemQuantityRule],
  resolve: async ({ $entity, passthrough, clientEnv }) => {
    const { currency: envCurrency } = clientEnv;

    const basket = passthrough.require(cartFragmentToken);

    const lineItems = basket.items;

    const entities = lineItems.map((item) =>
      $entity({
        id: item.id,
        base: () => ({
          type: 'product' as const,
          quantity: item.amount,
          title: item.product?.title as string,
          subtitle: item.product?.shortDescription,
          brand: item.product?.manufacturer?.title,
          code: item.product?.sku ?? item.id,
          cover:
            item.product?.imageGallery.images[0] ?
              { ...mapProductImageFragment(item.product.imageGallery.images[0]), type: 'image' }
            : undefined,
          link: {
            type: 'reference',
            reference: {
              type: 'product',
              slug: item.product?.seo ? (extractSlugFromSeo(item.product?.seo) ?? item.id) : item.id,
              id: item.id,
            },
          },
        }),
        cost: () => {
          const currency = item.product?.price.currency.name ?? envCurrency;

          const totalPrice = item.product?.price.price ?? 0;
          const listPrice = item.product?.listPrice?.price ?? totalPrice ?? 0;
          const subtotal = Money.fromDecimal({ amount: listPrice * (item.amount || 1), currency });
          const total = Money.fromDecimal({ amount: totalPrice * (item.amount || 1), currency });
          const singleTotal = total.divide(item.amount || 1);
          const singleStrikethrough = Money.fromDecimal({ amount: listPrice, currency });
          const hasStrikethrogh = !subtotal.equals(total);

          return {
            single: singleTotal,
            singleStrikethrough: hasStrikethrogh && listPrice > totalPrice ? singleStrikethrough : undefined,
            subtotal,
            total,
          };
        },
        productData: () => ({}),
        availability: () => ({
          quantity: item.product?.stock.stock ?? 0,
          status: item.product?.stock.stock ? 'inStock' : 'outOfStock',
        }),
        quantityRule: () => ({
          increment: 1,
          min: 1,
          max: Number.MAX_SAFE_INTEGER,
          canChange: true,
        }),
      })
    );

    return {
      entities,
    };
  },
});
