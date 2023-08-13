const Unsplash = require('unsplash-js').default
const toJson = require('unsplash-js').toJson
const fetch = require('node-fetch')
global.fetch = fetch

module.exports = class UnsplashAdapter {
  constructor () {
    this.api = new Unsplash({
      accessKey: '123-1hi-dfaColINDryIjQ7lqTvwsAwJiL1J5OEkP9I'
    })
  }

  async getRandomPhoto () {
    return await this.api.photos.getRandomPhoto({
      count: '1',
      query: 'food'
    }).then(toJson).then(json => json[0].urls.regular)
  }
}
