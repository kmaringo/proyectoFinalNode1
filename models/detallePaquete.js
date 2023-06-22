//Importar el esquema mongoose
const {Schema, model} = require('mongoose') 

//Definir la estructura de la colección
const DetalleSchema = Schema({

    idPaquete: {
        type: Number,
        required: [true, 'El id del paquete es obligatorio']
    },

    tipo: {
        type: String,
        required: [true, 'El tipo es obligatorio']
    },

    cantidad: {
        type: Number,
        required: [true, 'La cantidad es obligatoria']
    },
})

module.exports = model('Detalle', DetalleSchema)