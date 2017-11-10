'use strict'
const express = require('express')
const bodyParser = require('body-parser')
//const cors = require('cors')  //No se pudo instalar la dependencia
const os = require('os') // No se de q  ue dependencia sea

const app = express();

// cargar rutas
const
user_routes=require('./routes/user')
artist_routes = require('./routes/artist')
album_routes = require('./routes/album')
song_routes = require('./routes/song')

app
  .use(bodyParser.urlencoded({extended:false}))
  .use(bodyParser.json())
  //.use(cors())
  .use('/uploads', express.static(os.tmpdir()))
  .use('/api', user_routes)
  .use('/api', artist_routes)
  .use('/api', album_routes)
  .use('/api', song_routes)

module.exports = app;
