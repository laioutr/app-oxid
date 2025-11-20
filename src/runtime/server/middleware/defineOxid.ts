import { defineOrchestr } from '#imports';
import { name } from '../../../../package.json';
import { oxidClientFactory } from '../client';

export const defineOxid = defineOrchestr
  .meta({
    app: name,
    label: 'Oxid',
    logoUrl: '/app-oxid/logo.svg',
  })
  .extendRequest(async ({ event }) => {
    const oxidClient = await oxidClientFactory();
    const basketId = await oxidClient.assertCurrentBasketExists({ event });

    const availableSortings = [
      { key: 'price:ASC', label: 'Price (Asc)' },
      { key: 'price:DESC', label: 'Price (Desc)' },
      { key: 'rating:ASC', label: 'Rating (Asc)' },
      { key: 'rating:DESC', label: 'Rating (Desc)' },
      { key: 'title:ASC', label: 'Title (Asc)' },
      { key: 'title:DESC', label: 'Title (Desc)' },
    ];

    return {
      context: {
        oxid: {
          client: oxidClient,
          basketId,
          availableSortings,
        },
      },
    };
  });

export const defineOxidAction = defineOxid.actionHandler;
export const defineOxidQuery = defineOxid.queryHandler;
export const defineOxidLink = defineOxid.linkHandler;
export const defineOxidComponentResolver = defineOxid.componentResolver;
export const defineOxidQueryTemplateProvider = defineOxid.queryTemplateProvider;
