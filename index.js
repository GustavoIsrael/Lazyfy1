'use strict'

var mongoose = require('mongoose');
var log = console.log;

var app = require('./app');
var port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost/mean2', err => {
  if (err) throw err
  log('La base de datos se ha conectado')
  app.listen(port, err => log("Escuchando en puerto " + port))
}) 
