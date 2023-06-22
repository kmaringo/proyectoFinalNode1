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
        detalle:mensaje
    })
    
}

const postDetalle = async(req, res = response) =>{

    const body = req.body
    let mensaje = ''
    const detalle= new Detalle(body) 
    console.log(body)
    try {
        await detalle.save()
        mensaje = 'Usuario registrado exitosamente'
    } catch (error) {
        mensaje = error
    }

    res.json({
        mensaje
    })
   
}

const putDetalle = async(req, res = response) =>{
    const body = req.body
     console.log(body)

    let mensaje = ''

    try {
            await Detalle.findOneAndUpdate({_id:body._id}, {idPaquete:body.idPaquete, tipo:body.tipo, cantidad:body.cantidad})
            mensaje = 'Usuario modificado exitosamente.'
            
    } catch (error) {
        mensaje = error
    }
    
    res.json({
        detalle:mensaje
    })
   
}

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
        detalle:mensaje
    })
   
}

module.exports = {
    getDetalle,
    postDetalle,
    putDetalle,
    deleteDetalle
}