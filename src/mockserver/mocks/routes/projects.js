const readFixtureFile = require('../../utils/helpers')

const ALL_PROJECTS = readFixtureFile('project.json').projects

module.exports = [{
  id: 'get-projects',
  url: '/api/projects',
  method: 'GET',
  variants: [{
    id: 'all', // variant id
    type: 'json', // variant handler id
    options: {
      status: 200, // status to send
      body: ALL_PROJECTS // body to send
    }
  },
  {
    id: 'error', // variant id
    type: 'json', // variant handler id
    options: {
      status: 400, // status to send
      // body to send
      body: {
        message: 'Error'
      }
    }
  }
  ]
}]
