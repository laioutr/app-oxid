import 'dotenv/config';
import type { CodegenConfig } from '@graphql-codegen/cli';

const endpoint = 'https://graphql.demoshop.rocks/graphql/';

if (!endpoint) throw new Error('Missing OXID_GRAPHQL_ENDPOINT in .env');

const config: CodegenConfig = {
  schema: [
    {
      [endpoint]: {},
    },
  ],
  // IMPORTANT: read gql tags from TS files
  documents: ['src/**/*.{ts,tsx}'],
  generates: {
    'src/generated/types.ts': {
      plugins: ['typescript', 'typescript-operations'],
      config: {
        useTypeImports: true,
        /**
         * We keep documents in TS (via gql tag),
         * only generate types (no DocumentNodes re-emitted).
         */
        documentMode: 'graphQLTag',
        gqlTagName: 'gql', // the tag we’ll use in our TS ops
      },
    },
  },
};

export default config;
