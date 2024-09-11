const conexion = require('../config/connection');

const calificacionesSchema = new conexion.Schema({

    cantidadEstrellsa: {
        type: String,
        required: true  
    },

    servicio:{
        type:conexion.SchemaTypes.ObjectId,
        ref:"servicio"
    },
    cliente:{
        type:conexion.SchemaTypes.ObjectId,
        ref:"cliente"
    }
},

{versionKey:false});

const Calificaciones = conexion.model("calificaciones", calificacionesSchema)
module.exports = Calificaciones;