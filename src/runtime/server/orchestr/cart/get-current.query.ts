import { GetCurrentCartQuery } from '@laioutr-core/canonical-types/ecommerce';
import { defineOxidQuery } from '../../middleware/defineOxid';

export default defineOxidQuery(GetCurrentCartQuery, async ({ context, event }) => {
  const { oxidClient } = context;

  const { basket } = await oxidClient.getCurrentBasket({ event });

  return { id: basket.id };
});
