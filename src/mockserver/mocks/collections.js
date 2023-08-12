module.exports = [
  {
    id: 'base',
    routes: ['add-headers:enabled', 'get-users:success', 'get-user:success']
  },
  {
    id: 'no-headers',
    from: 'base',
    routes: ['add-headers:disabled']
  },
  {
    id: 'all-users',
    from: 'base',
    routes: ['get-users:all']
  },
  {
    id: 'user-real',
    from: 'no-headers',
    routes: ['get-user:real']
  },
  {
    id: 'all-projects',
    from: 'base',
    routes: ['get-projects:all']
  }
]
