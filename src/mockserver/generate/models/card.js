
module.exports = class Card {
  constructor () {
    this._id = ''
    this._name = ''
    this._description = ''
    this._image = ''
    this._price = 0
  }

  setId (id) {
    this._id = id
    return this
  }

  setName (name) {
    this._name = name
    return this
  }

  setDescription (description) {
    this._description = description
    return this
  }

  setImage (image) {
    this._image = image
    return this
  }

  setPrice (price) {
    this._price = price
    return this
  }

  build () {
    return {
      id: this._id,
      name: this._name,
      description: this._description,
      image: this._image,
      price: this._price
    }
  }
}
