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
    graphqlURL: 'https://graphql.demoshop.rocks/graphql/',
    user: 'support@fatchip.de',
    pass: import.meta.env.OXID_PASSWORD as string,
  },
  devtools: { enabled: true },
  compatibilityDate: '2025-09-11',
  vite: {
    optimizeDeps: {
      include: ['ajv', 'json-source-map', 'natural-compare-lite'],
    },
  },
});
