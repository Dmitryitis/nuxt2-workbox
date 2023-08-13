const path = require('path')
const { faker } = require('@faker-js/faker')
const Project = require('../models/project')
const Card = require('../models/card')
const DatabaseAdapter = require('../adapter/DatabaseAdapter')
const { curDirname, pathFixture } = require('../../constants')
const UnsplashAdapter = require('../adapter/UnsplashAdapter')

const generateProject = () => {
  return new Project()
    .setId(faker.datatype.uuid())
    .setTitle(faker.commerce.productName())
    .setCategory(faker.commerce.department())
    .build()
}

const generateCard = async () => {
  const generateImage = new UnsplashAdapter()
  const photo = await generateImage.getRandomPhoto()
  return new Card()
    .setId(faker.datatype.uuid())
    .setName(faker.commerce.productName())
    .setDescription(faker.commerce.productDescription())
    .setPrice(faker.commerce.price(100, 200, 0, '$'))
    .setImage(photo)
    .build()
}

const containerModels = async (model) => {
  const models = {
    projects: generateProject(),
    card: await generateCard()
  }

  return models[model] || undefined
}

module.exports = async function generateModel (limit, model) {
  const fixturePath = path.join(`${curDirname}${pathFixture}/`, `${model}.json`)
  const db = new DatabaseAdapter(fixturePath, model)

  if (containerModels(model)) {
    for (let i = 0; i < limit; i++) {
      await db.write(await containerModels(model))
    }
    return true
  } else {
    return false
  }
}
