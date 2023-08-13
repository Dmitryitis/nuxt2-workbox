const readFixtureFile = require('../../utils/helpers')

const ALL_CARDS = readFixtureFile('card.json').card

module.exports = [{
  id: 'get-cards',
  url: '/api/cards',
  method: 'GET',
  variants: [{
    id: 'all', // variant id
    type: 'json', // variant handler id
    options: {
      status: 200, // status to send
      body: ALL_CARDS // body to send
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
