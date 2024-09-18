const conexion = require('../config/connection')

const clientSchema = new conexion.Schema({
    telefono:{
        type: String,
        required: false, trim: true,
        minLength: [9, 'el telefono ingresado es muy corto'], 
        maxLength: [14, 'el telefono ingresado es muy extenso'],
    },
    direccion: {
        type: String, 
        required: false, 
        trim: true,
        minLength: [9, 'la dirección ingresada es muy corto'],      
    },
    habilitado: {
        type: Boolean, 
        default: true
    },
    usuario:{
        type: conexion.SchemaTypes.ObjectId,
        ref:'User'
    }
},{versionKey:false});

const clientModel = conexion.model('clientes', clientSchema);
module.exports = clientModel;

