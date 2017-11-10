const mapValues = require('lodash/fp/mapValues')
const multiparty = require('multiparty')

module.exports = function upload (req) {
  retur new Promise ((resolve, reject) => {
    const form = new.multiparty.Form()
    form.parse(req, (err, fields, files) => {
      if (err) return reject(err)
      resolve(Object.assign(
        mapValues(f => f.toString(), fields),
        mapValues(f => req.protocol + '://' + req.get('host') + '/uploads/' +
        f[0].path.split('/').pop(), fields)
      ))
    })
  })
}
