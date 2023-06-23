const {response} = require('express')
const Paquete = require('../models/paquete')


const getPaquete = async(req, res=response) => {
    let mensaje = ''
    try {
        const paquete = await Paquete.find()
        mensaje = paquete
    } catch (error) {
        mensaje = error
    }

   res.json({
        paquete:mensaje
    })
    
}

const postPaquete = async(req, res = response) =>{

    const body = req.body
    let mensaje = ''
    const paquete= new Paquete(body) 
    console.log(body)
    try {
        await paquete.save()
        mensaje = 'Paquete registrado exitosamente'
    } catch (error) {
        mensaje = error
    }

    res.json({
        mensaje
    })
   
}

const putPaquete = async (req, res = response) => {
    const body = req.body;
    console.log(body);

    let mensaje = '';

    try {
        if (body.tipoModificacion == 'Unitaria') {
            await Paquete.findOneAndUpdate(
                { _id: body._id },
                {
                    nombre: body.nombre,
                    descripcion: body.descripcion,
                    precio: body.precio, 
                    estado: body.estado
                }
            );
            mensaje = 'Paquete modificado exitosamente.';
        } else {
            await Paquete.updateMany(
                { _id: body._id },
                {
                    nombre: body.nombre,
                    descripcion: body.descripcion,
                    precio: body.precio 
                }
            );
            mensaje = 'Paquete modificado exitosamente.';
        }
    } catch (error) {
        mensaje = error;
    }

    res.json({
        mensaje: mensaje
    });
};

const deletePaquete = async(req, res = response) =>{
    const body = req.body
    let mensaje = ''

    try {
        await Paquete.findOneAndDelete({_id:body._id})
        mensaje = 'Eliminado exitosamente'
    } catch (error) {
        mensaje = error
    }
    
    res.json({
        paquete:mensaje
    })
   
}

module.exports = {
    getPaquete,
    postPaquete,
    putPaquete,
    deletePaquete
}