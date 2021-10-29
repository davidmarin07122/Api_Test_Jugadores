//usar mongoose (IMPORTAR)
const mongoose = require('mongoose');

async function conectarBD() {

    try {

        await mongoose.connect(process.env.BASEDATOS)
        console.log("Exito conectandose a la BD")

    } catch (error) {

        console.log(error)
    }

}

module.exports = { conectarBD }