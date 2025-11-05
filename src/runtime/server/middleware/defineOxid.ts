import { defineOrchestr } from '#imports';
import { name } from '../../../../package.json';
import { oxidClientFactory } from '../client';

export const defineOxid = defineOrchestr
  .meta({
    app: name,
  })
  .use(async (_, next) => {
    const oxidClient = await oxidClientFactory();

    const availableSortings = [
      { key: 'price:ASC', label: 'Price (Asc)' },
      { key: 'price:DESC', label: 'Price (Desc)' },
    ];

    return next({
      context: { oxidClient, availableSortings },
    });
  });

export const defineOxidAction = defineOxid.actionHandler;
export const defineOxidQuery = defineOxid.queryHandler;
export const defineOxidLink = defineOxid.linkHandler;
export const defineOxidComponentResolver = defineOxid.componentResolver;

export default () => {};
