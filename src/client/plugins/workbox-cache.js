/* eslint-disable no-undef */

workbox.routing.registerRoute(
  ({ url }) => url.pathname.includes('images.unsplash.com') || url.pathname.includes('tailwindui.com'),
  new workbox.strategies.StaleWhileRevalidate({
    networkTimeoutSeconds: 60,
    cacheName: 'images-cache',
    plugins: [
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [200]
      }),
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 60 * 60 * 12,
        purgeOnQuotaError: true
      })
    ]
  }),
  'GET'
)

workbox.routing.registerRoute(
  ({ url }) => url.pathname.includes('/api/'),
  new workbox.strategies.StaleWhileRevalidate({
    networkTimeoutSeconds: 60,
    cacheName: 'api-cache',
    plugins: [
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [200]
      }),
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 60 * 60 * 12,
        purgeOnQuotaError: true
      })
    ]
  }),
  'GET'
)
