
const productsModels = require('../models/productosModels')

exports.allProducts = async (req,res) => {
    const listadoProductos = await productsModels.find({});
    if(listadoProductos){
        res.render('pages/listProduct',{
            listadoProductos:listadoProductos
        });
    }else{
        res.render('pages/listProduct',{
            mensaje:"No hay datos disponibles"
        });
    }
}

exports.catalogo = async (req,res) => {
    const listadoProductos = await productsModels.find({});
    if(listadoProductos){
        res.render('pages/index',{
            listadoProductos:listadoProductos
        });
    }else{
        res.render('pages/listProduct',{
            mensaje:"No hay datos disponibles"
        });
    }
}



exports.oneProduct =  async (req,res) => {
    const query = await modelUser.find({referencia:req.params.ref});
    
}

exports.insertProduct =  async(req,res)=>{
    const newProduct = {
        referencia:req.body.referencia,
        nombre:req.body.nombre,
        descripcion:req.body.descripcion,
        precio:req.body.precio,
        stock:req.body.stock,
        imagen:req.body.imagen,
        habilitado: true
    };

    let insert = await productsModels.create(newProduct)
    if(insert){
        res.redirect('/products')
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
    const remove = await productsModels.findOneAndDelete({referencia:req.params.id});
    const listadoProductos = await productsModels.find({});
    if(listadoProductos){
        res.redirect('/products');
    }else{
        res.render('pages/listProduct',{
            mensaje:"No hay datos disponibles"
        });
    }
}


exports.getHome =  (req,res) => {
    res.render("index")
}
