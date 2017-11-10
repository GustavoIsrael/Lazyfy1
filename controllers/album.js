'use strict'

const Album = require('../models/album')
const Upload = require('../helpers/upload')

const create = (req, res, next) =>
 Upload(req).then(input => Album.create(input))
 .then(result => res.status(200).json(result))
 .catch(err => res.status(500).json({message: 'Error al crear Album'}))

const read = (req, res, next) =>
 Album.find(req.params.id ? {_id: req.params.id} : {})
 .populate('artist')
 .then(result => res.status(200).json(result))
 .catch(err => res.status(500).json({message: 'Error al obtener Album'}))

const update = (req, res, next) =>
 Album.findByIdAndUpdate(req.params.id, req.body, {new: true})
 .then(result => res.status(200).json(result))
 .catch(err => res.status(500).json({message: 'Error al editar Album'}))

const destroy = (req, res, next) =>
 Album.findByIdAndRemove(req.params.id)
 .then(result => res.status(200).json(result))
 .catch(err => res.status(500).json({message: 'Error al eliminar Album'}))

module.exports = {
  create,
  read,
  update,
  destroy
}
