//Importar el esquema mongoose
const {Schema, model} = require('mongoose') 

//Definir la estructura de la colección
const PaqueteSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },

    descripcion: {
        type: String,
        required: [true, 'La descripción es obligatoria']
    },

    precio: {
        type: Number,
        required: [true, 'El precio es obligatorio'],
        maxlength: [1000, 'Máximo de precio es $1000']
    },

    estado: {
        type: String,
        required: [true, 'El estado es obigatorio']
    }
})

module.exports = model('Paquete', PaqueteSchema)