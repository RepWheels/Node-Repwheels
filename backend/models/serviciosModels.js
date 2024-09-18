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
    imagen: {
        type: String,
        required: [false, 'no existe la imagen o ruta a la imagen por defecto'],
        default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTixLc5vG_VjsEsXAwgQGthytPUJa1aoPc8g&s"
    },
    
}, { versionKey: false });

const Servicios = conexion.model('servicios', serviciosSchema);

module.exports = Servicios;