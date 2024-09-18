const customersModels = require('../models/clientes.models')

exports.allCustomers =  async (req,res) => {
    const query = await customersModels.find({});
    res.status(200).json(query)
    console.log(query)
       
}

exports.insertCustomer = async(req,res)=>{
    const newCustomer = {
        nombre:req.body.nombre,
        telefono:req.body.telefono,
        direccion:req.body.direccion,
        habilitado:req.body.true,
        usuario:req.body.usuario
    };

    let insert = await customersModels.create(newCustomer)
    if(insert){
        res.status(200).json({'mensaje':'inserted successfully'}) 
    }else{
        res.status(404).json({'error':'wrong!!'}) 
    }
}


exports.updateCustomer = async (req,res)=>{
    const updateCustomer = {
        nombre:req.body.nombre,
        telefono:req.body.telefono,
        direccion:req.body.direccion,
        habilitado:req.body.true    
    };

    let update = await customersModels.findOneAndUpdate({_id:req.params.ref},updateCustomer)
    if(update){
        res.status(200).json({'mensaje':'updated successfully'}) 
    }else{
        res.status(404).json({'error':'wrong!!'}) 
    }

}


exports.deleteCustomer =  async (req,res) => {
    const remove = await customersModels.findOneAndDelete({telefono:req.params.id});
    res.status(200).json({"mensaje":"removed successfully"})   
}
