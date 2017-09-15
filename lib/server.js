'use strict'

const express = require('express')
const chalk = require('chalk')
const config = require('./config.js')

const app = express()

app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index', { answer: 42 })
})

app.listen(config.port, () => {
  console.log(`${chalk.green('Server running')} on ${config.port}`)
})
