const express = require('express')
const generateModel = require('./services/generateModel')
const route = express.Router()

route.get('/project', async (req, res) => {
  try {
    const limit = req.query.limit || 1
    const result = await generateModel(limit, 'projects')

    if (result) { res.status(201).send({ message: 'Projects set' }) } else { res.status(402).send({ message: 'Projects not set' }) }
  } catch (error) {
    console.error(error)
    res.status(402).send(error)
  }
})

route.get('/card', async (req, res) => {
  try {
    const limit = req.query.limit || 1
    const result = await generateModel(limit, 'card')

    if (result) { res.status(201).send({ message: 'Cards set' }) } else { res.status(402).send({ message: 'Cards not set' }) }
  } catch (error) {
    console.error(error)
    res.status(402).send(error)
  }
})

module.exports = route
