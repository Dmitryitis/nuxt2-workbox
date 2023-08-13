const path = require('path')
const { faker } = require('@faker-js/faker')
const Project = require('../models/project')
const Card = require('../models/card')
const DatabaseAdapter = require('../adapter/DatabaseAdapter')
const { curDirname, pathFixture } = require('../../constants')

const generateProject = () => {
  return new Project()
    .setId(faker.datatype.uuid())
    .setTitle(faker.commerce.productName())
    .setCategory(faker.commerce.department())
    .build()
}

const generateCard = () => {
  return new Card()
    .setId(faker.datatype.uuid())
    .setName(faker.commerce.productName())
    .setDescription(faker.commerce.productDescription())
    .setPrice(faker.commerce.price(100, 200, 0, '$'))
    .setImage(faker.image.food(640, 480, true))
    .build()
}

const containerModels = (model) => {
  const models = {
    projects: generateProject(),
    card: generateCard()
  }

  return models[model] || undefined
}

module.exports = async function generateModel (limit, model) {
  const fixturePath = path.join(`${curDirname}${pathFixture}/`, `${model}.json`)
  const db = new DatabaseAdapter(fixturePath, model)

  if (containerModels(model)) {
    for (let i = 0; i < limit; i++) {
      await db.write(containerModels(model))
    }
    return true
  } else {
    return false
  }
}
