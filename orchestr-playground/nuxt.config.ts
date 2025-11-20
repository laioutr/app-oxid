import srcModule from '../src/module';

export default defineNuxtConfig({
  modules: [
    srcModule,
    '@pinia/nuxt', // Added to show in devtools
    '@laioutr-core/frontend-core',
    '@laioutr-core/orchestr',
    '@laioutr-core/orchestr-devtools',
  ],
  i18n: {
    bundle: {
      optimizeTranslationDirective: false,
    },
  },
  '@laioutr/app-oxid': {
    graphqlURL: import.meta.env.OXID_GRAPHQL_URL,
    user: import.meta.env.OXID_USER,
    password: import.meta.env.OXID_PASSWORD,
  },
  devtools: { enabled: true },
  compatibilityDate: '2025-09-11',
  vite: {
    optimizeDeps: {
      include: ['ajv', 'json-source-map', 'natural-compare-lite'],
    },
  },
});
