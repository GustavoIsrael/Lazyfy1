'use strict'

let express = require('express');
let UserController = require('../controllers/user');

let api = express.Router();

api.get('/prueba', UserController.prueba)
api.post('/register', UserController.saveUser)
api.post('/login', UserController.loginUser)
api.get('/users/', UserController.listUsers)

module.exports = api;
