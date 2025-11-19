import { CartItemsLink } from '@laioutr-core/canonical-types/ecommerce';
import { cartFragmentToken } from '../../const/passthroughTokens';
import { defineOxidLink } from '../../middleware/defineOxid';

export default defineOxidLink(CartItemsLink, async ({ passthrough }) => {
  const basket = passthrough.require(cartFragmentToken);

  const lineItems = basket.items.map((item) => item.id);

  return {
    links: [
      {
        sourceId: basket.id,
        targetIds: lineItems,
      },
    ],
  };
});
