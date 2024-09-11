
const productsModels = require('../models/productosModels')

exports.allProducts = async (req,res) => {
    const listadoProductos = await productsModels.find({});
    if(listadoProductos){
        res.render('pages/listaProductos',{
            listadoProductos:listadoProductos
        });
    }else{
        res.render('pages/listProduct',{
            mensaje:"No hay datos disponibles"
        });
    }
}

exports.index = async (req,res) => {
    res.render('pages/index')
}



exports.oneProduct =  async (req,res) => {
    const query = await modelUser.find({referencia:req.params.ref});
    
}

exports.insertProduct =  async(req,res)=>{
    const newProduct = {
        nombre:req.body.nombre,
        precio:req.body.precio,
        descripcion_producto:req.body.descripcion_producto,
        cantidad:req.body.cantidad,
        imagen:req.body.imagen,
        habilitado: true
    };

    let insert = await productsModels.create(newProduct)
    if(insert){
        res.redirect('/productos');
    }else{
        res.status(404).json({'error':'wrong!!'}) 
    }
}


 exports.updateProduct = async (req,res)=>{
    const updateProduct = {
        referencia:req.body.referencia,
        nombre:req.body.nombre,
        descripcion:req.body.descripcion,
        precio:req.body.precio,
        stock:req.body.stock,
        imagen:req.body.imagen,
        habilitado: true
    };

    let update = await productsModels.findOneAndUpdate({_id:req.params.ref},updateProduct)
    if(update){
        res.status(200).json({'mensaje':'updated successfully'}) 
    }else{
        res.status(404).json({'error':'wrong!!'}) 
    }

}


exports.deleteProduct =  async (req,res) => {
    const remove = await productsModels.findOneAndDelete({_id:req.params.id});
    const listadoProductos = await productsModels.find({});
    if(listadoProductos){
        res.redirect('/productos');
        
    }else{
        res.render('pages/listProduct',{
            mensaje:"No hay datos disponibles"
        });
    }
}