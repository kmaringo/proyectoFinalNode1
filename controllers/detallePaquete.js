const {response} = require('express')
const Detalle = require('../models/detallePaquete')


const getDetalle = async(req, res=response) => {
    let mensaje = ''
    try {
        const detalle = await Detalle.find()
        mensaje = detalle
    } catch (error) {
        mensaje = error
    }

   res.json({
        mensaje:mensaje
    })
    
}

const postDetalle = async(req, res = response) =>{

    const body = req.body
    let mensaje = ''
    const detalle= new Detalle(body) 
    console.log(body)
    try {
        await detalle.save()
        mensaje = 'Detalle registrado exitosamente'
    } catch (error) {
        mensaje = error
    }

    res.json({
        mensaje:mensaje
    })
   
}

const putDetalle = async (req, res = response) => {
    const body = req.body;
    console.log(body);

    let mensaje = '';

    try {
        if (body.tipoModificacion == 'Unitaria') {
            await Detalle.findOneAndUpdate(
                { _id: body._id },
                {
                    idPaquete:body.idPaquete,
                    tipo:body.tipo,
                    cantidad:body.cantidad 
                }
            );
            mensaje = 'Detalle modificado exitosamente.';
        } else {
            await Detalle.updateMany(
                { _id: body._id },
                {
                    idPaquete:body.idPaquete,
                    tipo:body.tipo,
                    cantidad:body.cantidad
                }
            );
            mensaje = 'Detalle modificado exitosamente.';
        }
    } catch (error) {
        mensaje = error;
    }

    res.json({
        mensaje: mensaje
    });
};

const deleteDetalle= async(req, res = response) =>{
    const body = req.body
    let mensaje = ''

    try {
        await Detalle.findOneAndDelete({_id:body._id})
        mensaje = 'Eliminado exitosamente'
    } catch (error) {
        mensaje = error
    }
    
    res.json({
        mensaje:mensaje
    })
   
}

module.exports = {
    getDetalle,
    postDetalle,
    putDetalle,
    deleteDetalle
}