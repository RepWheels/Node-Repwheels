const conexion = require('../config/connection');


const productosSchema = new conexion.Schema({
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
    descripcion_producto: {
        type: String,
        required: [true, 'La descripción del producto es obligatoria'],
    },
    cantidad: {
        type: Number, // Corregido a Number para representar cantidad
        default: 0, // Valor por defecto si no se especifica
    }
}, { versionKey: false });

const Productos = conexion.model('productos', productosSchema);

module.exports = Productos;