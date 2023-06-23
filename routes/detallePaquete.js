const {Router} = require('express')

const route = Router()

//Importar el controlador
const {getDetalle, postDetalle, putDetalle, deleteDetalle} = require('../controllers/detallePaquete')

route.get('/', getDetalle)

route.post('/', postDetalle)

route.put('/', putDetalle)

route.delete('/', deleteDetalle)


module.exports = route