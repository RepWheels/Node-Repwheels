const modelUser = require('../models/usuariosModels')

exports.oneUser =  async (req,res) => {
    const query = await modelUser.find({correo:req.params.ref});
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
