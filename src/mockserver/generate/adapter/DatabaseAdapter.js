const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

module.exports = class DatabaseAdapter {
  constructor (file, entity) {
    this.db = low(new FileSync(file))
    this.entity = entity
  }

  async write (data) {
    return await this.db.get(this.entity).push(data).write()
  }
}
