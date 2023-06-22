const express = require('express')

const dbConection = require('../database/config')
//Instalar el paquete dotenv
const bodyParser = require('body-parser');
const cors = require('cors');


class server{
    
    constructor () {
        this.app = express()

        this.port = process.env.PORT

        this.servicioPath = '/api/servicio' //Ruta pública de la API
        this.productoPath = '/api/producto'
        this.paquetePath = '/api/paquete'
        this.detallePath = '/api/detallePaquete'

        this.middlewares()//Seguridad

        this.routes()

        this.dbConectar()

    }

    middlewares() //Directorio Publico
    {
        this.app.use( cors() );
        this.app.use(bodyParser.json()) // for parsing application/json

    }

    routes()
    {
        this.app.use(this.servicioPath, require('../routes/servicio'))
        this.app.use(this.productoPath, require('../routes/producto'))
        this.app.use(this.paquetePath, require('../routes/paquete'))
        this.app.use(this.detallePath, require('../routes/detallePaquete'))
    }

    async dbConectar(){
        await dbConection()
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Escuchando el puerto ${this.port}`)
        })
    }
}

module.exports = server