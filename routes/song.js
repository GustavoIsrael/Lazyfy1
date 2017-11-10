'use strict'

const router = require('express').Router()
const songController = require('../controllers/song')

router
  .post('/songs', songController.create)
  .get('/songs/:id?', songController.read)
  .put('/songs/:id', songController.update)
  .delete('/songs/:id', songController.destroy)

module.exports = router
