const users = require('./users')
const common = require('./common')
const projects = require('./projects')

module.exports = {
  routes: [
    ...users,
    ...common,
    ...projects
  ]

}
