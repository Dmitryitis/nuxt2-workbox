const common = require('./common')
const projects = require('./projects')
const cards = require('./cards')

module.exports = {
  routes: [
    ...common,
    ...projects,
    ...cards
  ]

}
