'use strict'

let mongoose = require('mongoose')
let Schema = mongoose.Schema //permite crear un objeto de tipo schema en el cual se va a guardar una colección de datos
let SongSchema = Schema({
  track: Number,
  name: String,
  duration: String,
  file: String,
  album: { type: Schema.ObjectId, ref: 'Album'}
})

module.exports = mongoose.model('Song', SongSchema)
