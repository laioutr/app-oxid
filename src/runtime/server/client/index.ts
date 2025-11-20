import { OxidSDK } from './sdk';
import { useRuntimeConfig } from '#imports';

export const oxidClientFactory = async () => {
  const { graphqlURL, user, password } = useRuntimeConfig()['@laioutr/app-oxid'];

  const client = new OxidSDK(graphqlURL);
  await client.login(user, password);

  return client;
};
