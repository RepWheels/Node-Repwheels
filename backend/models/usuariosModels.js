const conexion = require('../config/connection');

const userSchema = new conexion.Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre completo es obligatorio'],
        trim: true,
        maxlength: [100, 'El nombre es muy extenso'],
        minlength: [8, 'El nombre es muy corto'],
    },
    correo:{
        type: String,
        unique: [true, 'El correo ya existe'],
        required: true
    },
    password:{
        type: String,
        required: [true, 'Debe registrarse una contraseña'],
        minLength: [5, 'La contraseña debe tener más de 5 caracteres'],
        maxLength: [20, 'La contraseña debe ser de menos de 20 caracteres']

    },
    rol:{
        type: String,
        default: "guest"
    },
    habilitado:{
        type: Boolean,
        default: true
    },
    imagen: {
        type: String,
        required: [false, 'no existe la imagen o ruta a la imagen por defecto'],
        default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIFYgpCPMtvHYo7rQ8fFSEgLa1BO78b_9hHA&s"
    },
},{versionKey:false});

const userModel = conexion.model('Usuarios', userSchema);

module.exports = userModel;