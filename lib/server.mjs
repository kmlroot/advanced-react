'use strict'

import express from 'express'
import chalk from 'chalk'
import config from './config'

const app = express()

app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index', { answer: 42 })
})

app.listen(config.port, () => {
  console.log(`${chalk.green('Server running')} on ${config.port}`)
})
