export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  srcDir: 'client/',
  head: {
    title: 'Nuxt + Workbox',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/api.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  pwa: {
    icon: {
      fileName: 'favicon.png',
      sizes: [64, 128, 192, 256, 512]
    },
    manifest: {
      name: 'Nuxt + Workbox',
      short_name: 'Nuxt + Workbox'
    },
    workbox: {
      workboxVersion: '5.1.4',
      enabled: true,
      cachingExtensions: ['~/plugins/workbox-cache.js'],
      offlinePage: '/offline',
      cleanupOutdatedCaches: true
    }
  }
}
