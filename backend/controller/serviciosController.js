const servicesModels = require("../models/serviciosModels")


exports.allServices = async (req,res) => {
    const listadoServicios = await servicesModels.find({});
    if(listadoServicios){
        res.render('listarServicios',{
            listadoServicios:listadoServicios
        });
    }else{
        res.render('listarServicios',{
            mensaje:"No hay datos disponibles"
        });
    }
}

exports.services = async (req,res) =>{
    const consulta = await servicesModels.find({})
    res.render("servicios", {consulta:consulta})
}

exports.insertServices =  async(req,res)=>{
    const newService = {
        nombre:req.body.nombre,
        descripcion_servicio:req.body.descripcion_servicio,
        precio:req.body.precio,
    };

    let insert = await servicesModels.create(newService)
    if(insert){
        res.redirect('/servicios')
    }else{
        res.status(404).json({'error':'wrong!!'}) 
    }
}



exports.deleteServices =  async (req,res) => {
    const remove = await servicesModels.findOneAndDelete({nombre:req.params.id});
    const listadoServicios = await servicesModels.find({});
    if(listadoServicios){
        res.redirect('/servicios');
    }else{
        res.render('listarServicios',{
            mensaje:"No hay datos disponibles"
        });
    }
}
