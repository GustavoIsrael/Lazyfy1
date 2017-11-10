'use strict'

const Song = require('../models/song')
const Upload = require('../helpers/upload')

const create = (req, res, next) =>
 Upload(req).then(input => Song.create(input))
 .then(result => res.status(200).json(result))
 .catch(err => res.status(500).json({message: 'Error al crear Canción'}))

const read = (req, res, next) =>
 Song.find(req.params.id ? {_id: req.params.id} : {})
 .populate('album')
 .then(result => res.status(200).json(result))
 .catch(err => res.status(500).json({message: 'Error al obtener Canción'}))

const update = (req, res, next) =>
 Song.findByIdAndUpdate(req.params.id, req.body, {new: true})
 .then(result => res.status(200).json(result))
 .catch(err => res.status(500).json({message: 'Error al actualizar Canción'}))

const destroy = (req, res, next) =>
 Song.findByIdAndRemove(req.params.id)
 .then(result => res.status(200).json(result))
 .catch(err => res.status(500).json({message: 'Error al eliminar Canción'}))

 module.exports = {
 create,
 read,
 update,
 destroy
}
