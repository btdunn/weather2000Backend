const express = require('express')
const app = express()
const cors = require('cors')

const configuration = require('./knexfile').development
const knex = require('knex')
const database = knex(configuration)

const { Model } = require('objection')

Model.knex(database)

class Weather extends Model {
  static tableName = 'weather'
}

app.use(cors())

app.get('/', (request, response) => {
  Weather.query()
    .then(weather => {
      response.json({ weather })
    })
})

app.listen(9000)