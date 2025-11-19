import { Money } from '@screeny05/ts-money';
import { CartBase, CartCost } from '@laioutr-core/canonical-types/entity/cart';
import { defineOxidComponentResolver } from '../../middleware/defineOxid';

export default defineOxidComponentResolver({
  entityType: 'Cart',
  label: 'OXID Cart Resolver',
  provides: [CartBase, CartCost],
  resolve: async ({ entityIds, context, $entity }) => {
    const { oxidClient } = context;

    const entities = await Promise.all(
      entityIds.map(async (cartId) => {
        const { basket } = await oxidClient.getBasketById(cartId as string);

        const currency = basket.cost.currency.name;

        return $entity({
          id: cartId,

          base: () => ({
            totalQuantity: (basket?.items ?? []).reduce((acc, curr) => acc + curr.amount, 0),
            discountCodes: [],
          }),

          cost: () => ({
            subtotal: Money.fromDecimal({ amount: basket.cost.productGross.sum + basket.cost.delivery.price, currency }),
            subtotalIsEstimated: false,
            shipping: { total: Money.fromDecimal({ amount: basket.cost.delivery.price, currency }), isEstimated: false },
            total: Money.fromDecimal({ amount: basket.cost.total, currency }),
            totalIsEstimated: false,
            totalTax: Money.fromDecimal({
              amount: basket.cost.delivery.vatValue + basket.cost.productNet.vatValue,
              currency,
            }),
            totalTaxIsEstimated: false,
            taxesIncluded: true,
            totalDuty: { amount: 0, currency: 'EUR' },
            totalDutyIsEstimated: true,
            dutiesIncluded: false,
          }),
        });
      })
    );

    return { entities };
  },
});
