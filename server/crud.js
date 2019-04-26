var Usuario = require('./modelUsuarios.js') //Asignarle a la variable USUARIO el modelo del usuario

module.exports.crearUsuarioDemo = function(callback){ //Función para crear usuarios
  var arr = [{ email: 'fjbaron948@yahoo.es', user: "fjbaron948", password: "123456"}, { email: 'fjbaron@gmail.com', user: "fjbaron", password: "fjbaron123"}]; //array con la información de los usuarios a insertar
  Usuario.insertMany(arr, function(error, docs) { //Utilizar la función insertMany para insertar varios registros en una sola consulta
    if (error){ //Acciones si existe un error
      if (error.code == 11000){ //Verificar si el nombre de usuario (PrimaryKey) del existe
        callback("Utilice los siguientes datos: </br>usuario: fjbaron948 | password: 123456 </br>usuario: fjbaron | password: fjbaron123") //Mostrar mensaje
      }else{
        callback(error.message) //Mostrar mensaje de error
      }
    }else{
      callback(null, "El usuario 'fjbaron' y 'fjbaron948' se ha registrado correctamente. </br>usuario: fjbaron948 | password: 123456 </br >usuario: fjbaron | password: fjbaron123") //Mostrar mensaje del usuario guardado con exito
    }
  });
}
