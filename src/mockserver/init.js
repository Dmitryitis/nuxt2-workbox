const { createServer } = require('@mocks-server/main')
const { routes } = require('./mocks/routes/index')
const collections = require('./mocks/collections')

const server = createServer()

server.start().then(() => {
  const { loadRoutes, loadCollections } = server.mock.createLoaders()
  loadRoutes(routes)
  loadCollections(collections)

  server.mock.collections.select('all-models')

  server.server.addRouter('/api/generate', require('./generate/controller'))
})
