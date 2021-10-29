//EL CONTROLADOR ES EL ENCARGADO
//DE ADMINISTRAR LAS PETICIONES Y RESPUESTAS

//IMPORTACIONES
const { request, response } = require('express')

const { insertarJugador } = require('../services/servicio.js')
const { leerJugador } = require('../services/servicio.js')
const { leerJugadores } = require('../services/servicio.js')
const { borrarJugador } = require('../services/servicio.js')
const { modificarJugador } = require('../services/servicio.js')



//crear una funcion para cada operacion del servidor
async function registrarJugador(peticion = request, respuesta = response) {

    try {

        let datosPeticion = peticion.body

        await insertarJugador(datosPeticion)
        respuesta.status(200).json({
            estado: true,
            mensaje: "Exito registrando el jugador"
        })


    } catch (error) {
        respuesta.status(400).json({
            estado: false,
            mensaje: "Upss... tenemos un problema: " + error
        })
    }


}

async function buscarJugador(peticion = request, respuesta = response) {

    try {

        let id = peticion.params.id

        let jugador = await leerJugador(id)

        respuesta.status(200).json({
            estado: true,
            mensaje: jugador
        })


    } catch (error) {
        respuesta.status(400).json({
            estado: false,
            mensaje: "Upss... tenemos un problema: " + error
        })
    }

}

async function buscarJugadores(peticion = request, respuesta = response) {

    try {

        let jugadores = await leerJugadores()

        respuesta.status(200).json({
            estado: true,
            mensaje: jugadores
        })


    } catch (error) {
        respuesta.status(400).json({
            estado: false,
            mensaje: "Upss... tenemos un problema: " + error
        })
    }

}

async function editarJugador(peticion = request, respuesta = response) {


    try {

        let id = peticion.params.id
        let datosPeticion = peticion.body

        await modificarJugador(id, datosPeticion)

        respuesta.status(200).json({
            estado: true,
            mensaje: "Exito editando el jugador"
        })


    } catch (error) {
        respuesta.status(400).json({
            estado: false,
            mensaje: "Upss... tenemos un problema: " + error
        })
    }

}

async function eliminarJugador(peticion = request, respuesta = response) {

    try {

        let id = peticion.params.id

        await borrarJugador(id)

        respuesta.status(200).json({
            estado: true,
            mensaje: "Exito al sacar de la convocatoria al jugador"
        })


    } catch (error) {
        respuesta.status(400).json({
            estado: false,
            mensaje: "Upss... tenemos un problema: " + error
        })
    }



}

module.exports = {

    registrarJugador,
    buscarJugador,
    buscarJugadores,
    editarJugador,
    eliminarJugador

}

