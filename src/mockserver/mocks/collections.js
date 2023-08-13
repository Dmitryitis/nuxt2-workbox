module.exports = [
  {
    id: 'base',
    routes: ['add-headers:enabled']
  },
  {
    id: 'no-headers',
    from: 'base',
    routes: ['add-headers:disabled']
  },
  {
    id: 'all-models',
    from: 'base',
    routes: ['get-projects:all', 'get-cards:all']
  }
]
