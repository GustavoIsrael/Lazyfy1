'use strict'

var bcrypt = require('bcrypt-nodejs'); //encripta contraseñas
var User = require('../models/user'); // carga el modelo


//acción del controlador
function prueba(req, res){
  res.status(200).send({
    message: 'Probando una acción del controlador de usuarios'
  })
}

function saveUser(req, res){
  var user = new User();

  var params = req.body; // todos los datos que llegan por post como params.name, params.surname, etc.

  console.log(params);

  // recibe los parametros en la variable
  user.name = params.name;
  user.surname = params.surname;
  user.email = params.email;
  user.role = 'ROLE_ADMIN';
  user.image = 'null';

  // guarda en base de datos la información
  if (params.password){
    // encripta contraseña y guardala
    bcrypt.hash(params.password, null, null, function(err, hash){
      user.password = hash;
      if (user.name != null && user.surname != null && user.email != null){
        // Guardar el usuario
        user.save((err, userStored) =>{
          if (err){
              res.status(500).send({message: 'Error al guardar usuario'});
          }else{
              if (!userStored) res.status(404).send({message: 'No se ha registrado el usuario'});
              else res.status(200).send({user: userStored});
          }
        });
      } else{
        res.status(200).send({message: 'Introduce todos los campos'});
      }
    });
  }else{
    res.status(200).send({message: 'Introduce la contraseña'});
  }


}


function loginUser(req,res){
  const params = req.body
  const email = params.email
  const password = params.password
  User.findOne({email: email.to LowerCase()}, (err, user)  => {
    if (err) return res.status(500).send({message: 'Error del sistema'})
    if (!user) return res.status(404).send({message: 'El usuario no existe'})
    bcrypt.compare(password, user.password, function(err, check) {
	     if (check) {
		       if(params.gethash){
			          res.status(200).send({
				              token: jwt.createToken(user)
			                 })
           }
           else {
              res.status(200).send({user})
           }
        } else {
              res.status(404).send({message: ‘Contraseña incorrecta’})
            }
      })
    })
}

const listUsers = (req, res) =>
  User.find({})
  .then(users => res.status(200).json(users))
  .catch(err => res.status(500).json({mesaage: 'Error al enlistar usuarios'}))


module.exports={
  prueba,
  saveUser,
  loginUser,
  listUsers
}
