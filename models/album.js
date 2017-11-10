'use strict'

let mongoose = require('mongoose')
let Schema = mongoose.Schema //permite crear un objeto de tipo schema en el cual se va a guardar una colección de datos
let AlbumSchema = Schema({
  name: String,
  year: Number,
  track: Number,
  image: String,
  track: String,
  artist: { type: Schema.ObjectId, ref: ‘Artist’}
})

module.exports = mongoose.model('Album', AlbumSchema)
