'use strict'

let mongoose = require('mongoose')
let Schema = mongoose.Schema //permite crear un objeto de tipo Schema en el cual se va a guardar una colección de datos
let ArtistSchema = Schema({
  name: String,
  description: String,
  image: String,
})

module.exports = mongoose.model('Artist', ArtistSchema)
