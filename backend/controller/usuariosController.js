const modelUser = require('../models/usuariosModels')
const customersModels = require('../models/clientes.models')

exports.oneUser =  async (req,res) => {
    const query = await modelUser.find({correo:req.params.ref,});
    res.status(200).json(query)  
    console.log(query)  
}

exports.allUsers = async (req,res) => {
    const query = await modelUser.find({});
    if(query){
        res.render('pages/listarUsuarios',{
            query:query
        });
    }else{
        res.render('pages/listUser',{
            mensaje:"No hay datos disponibles"
        });
    }
 
}

exports.login = async (req,res) => {
    res.render('pages/login')  
}

exports.registro = async (req,res) => {
    res.render('pages/registro')  
}



exports.insertUser =  async(req,res)=>{
    const newUser = {
        nombre: req.body.nombre,
        correo:req.body.correo,
        password:req.body.password,
        rol:req.body.rol,
        habilitado: true,
        imagen: req.body.imagen,
    };

    let insert = await modelUser.create(newUser)
    if(insert){
        res.redirect('/usuarios')
    }else{
        res.status(404).json({'error':'wrong!!'}) 
    }
}


exports.updateUser = async (req,res)=>{
    const updateUser = {
        correo:req.body.correo,
        password:req.body.password,
        rol:req.body.rol,
        habilitado: true
    };

    let update = await modelUser.findOneAndUpdate({_id:req.params.ref},updateUser)
    if(update){
        res.status(200).json({'mensaje':'updated successfully'}) 
    }else{
        res.status(404).json({'error':'wrong!!'}) 
    }

}

exports.deleteUser =  async (req,res) => {
    const remove = await modelUser.findOneAndDelete({correo:req.params.id});
    res.status(200).json({"mensaje":"removed successfully"})   
}

exports.register =  async (req,res) => {

    const newUser = {
        nombre:req.body.nombre,
        correo:req.body.correo,
        password:req.body.password,
        rol:req.body.rol,
        habilitado: true
    };

    let user = await modelUser(newUser).save();

    const newCustomer = {
        
        telefono:req.body.telefono,
        direccion:req.body.direccion,
        habilitado:req.body.true,
        usuario: user._id
    };

    let customer = await customersModels(newCustomer).save();

    if(customer){
        res.render('pages/login')
    }



}


exports.inicioSesion =  async (req,res) => {
    const correo = req.params.correo
    const password = req.params.password
    const queryUser = await modelUser.find({correo:correo, password: password});

    
    
    if(queryUser){
        res.redirect('inicio')
        
    }
}
