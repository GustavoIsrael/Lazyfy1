'use strict'

let mongoose = require('mongoose')
let Schema = mongoose.Schema //permite crear un objeto de tipo Schema en el cual se va a guardar una colección de datos
let UserSchema = Schema({
  name: String,
  surname: String,
  email: String,
  password: String,
  role: String,
  image: String,
})

module.exports = mongoose.model('User', UserSchema)
