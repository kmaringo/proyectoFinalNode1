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
        validate: {
            validator: (value) => {
              const regExpName = /([A-Za-z0-9\s])/;
              return regExpName.test(value);
            },
            message: (value) => `el tipo ${value} no es válido`,
          },
        required: [true, 'El tipo es obligatorio']
    },

    cantidad: {
        type: Number,
        validate: {
            validator: (value) => {
              return value > 0;
            },
            message: (value) => `${value} no es una cantidad valida`,
          },
        required: [true, 'La cantidad es obligatoria']
    },
})

module.exports = model('Detalle', DetalleSchema)