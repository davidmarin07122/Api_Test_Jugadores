//Encargado de realizar las operaciones en la BD

//IMPORTAR EL MODELO DE DATOS PARA PDOER OPERAR EN BD
const JugadorModelo = require('../models/JugadorModelo.js')


//1. Funcion para insertar datos
async function insertarJugador(datos) {

    let jugadorNuevo = new JugadorModelo(datos)
    return await jugadorNuevo.save()

}

//2. Funcion para buscar 1 Jugador
async function leerJugador(id) {

    let jugadorBuscado = await JugadorModelo.findById(id)
    return jugadorBuscado

}

//3. Funcion para buscar TODOS los Jugadores
async function leerJugadores() {

    let jugadoresBuscados = await JugadorModelo.find()
    return jugadoresBuscados

}

//4. Funcion para eliminar un jugador
async function borrarJugador(id) {

    return await JugadorModelo.findByIdAndDelete(id)

}

//5. Funcion para editar un jugador
async function modificarJugador(id, datos) {

    return await JugadorModelo.findByIdAndUpdate(id, datos)

}

module.exports = {

    insertarJugador,
    leerJugador,
    leerJugadores,
    borrarJugador,
    modificarJugador

}