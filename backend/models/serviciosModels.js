const conexion = require('../config/connection');


const serviciosSchema = new conexion.Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre completo es obligatorio'],
        trim: true,
        maxlength: [100, 'El nombre es muy extenso'],
        minlength: [8, 'El nombre es muy corto'],
    },
    precio: {
        type: Number,
        required: [true, 'El precio es obligatorio'],
    },
    descripcion_servicio: {
        type: String,
        required: [true, 'La descripción del servicio es obligatoria'],
    },
}, { versionKey: false });

const Servicios = conexion.model('servicios', serviciosSchema);

module.exports = Servicios;