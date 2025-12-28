// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2025-12-23',
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  // Configuration critique pour GitHub Pages
  app: {
    baseURL: '/',
    buildAssetsDir: 'assets',
  },

  nitro: {
    preset: 'github-pages'
  },

  ssr: true
})