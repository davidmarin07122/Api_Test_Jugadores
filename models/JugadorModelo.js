//se importan utilidades de mongoose
const { model, Schema } = require('mongoose')

//creamos el esquema de datos
const JugadorModelo = Schema({

    nombre: {
        type: String,
        required: true
    },

    edad: {
        type: Number,
        required: true
    },

    equipo: {
        type: String,
        required: true
    },

    posicion: {
        type: String,
        required: true
    },

    foto: {
        type: String,
        required: true
    }

})

module.exports = model('Jugadores', JugadorModelo)