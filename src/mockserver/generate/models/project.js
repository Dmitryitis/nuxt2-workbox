
module.exports = class Project {
  constructor () {
    this._id = ''
    this._title = ''
    this._category = ''
  }

  setId (id) {
    this._id = id
    return this
  }

  setTitle (title) {
    this._title = title
    return this
  }

  setCategory (category) {
    this._category = category
    return this
  }

  build () {
    return {
      id: this._id,
      title: this._title,
      category: this._category
    }
  }
}
