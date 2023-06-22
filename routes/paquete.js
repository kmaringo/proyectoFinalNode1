const {Router} = require('express')

const route = Router()

//Importar el controlador
const {getPaquete, postPaquete, putPaquete, deletePaquete} = require('../controllers/paquete')

route.get('/', getPaquete)

route.post('/', postPaquete)

route.put('/', putPaquete)

route.delete('/', deletePaquete)


module.exports = route