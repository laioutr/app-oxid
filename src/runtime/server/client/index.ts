import { OxidSDK } from './sdk';
import { useRuntimeConfig } from '#imports';

export const oxidClientFactory = async () => {
  const { graphqlURL, user, pass } = useRuntimeConfig()['@laioutr/app-oxid'];

  const client = new OxidSDK(graphqlURL);
  await client.login(user, pass);

  return client;
};
