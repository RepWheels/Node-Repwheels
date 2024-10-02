const express = require('express');
const router = express.Router();
const products = require('../controller/productosController')
const usuarios = require('../controller/usuariosController')


module.exports = function(){

    router.get('/',products.allProducts)
    router.get('/productosOne/:id',products.getProducto)
    router.post('/insertarProducto',products.insertProduct)
    router.post('/productos/:id',products.updateProduct)
    router.delete('/deleteProduct/:id',products.deleteProduct)
    router.get('/inicio', products.index)
    router.get('/catalogo', products.catalogo)


    // router para los usuarios

    router.get('/usuarios',usuarios.allUsers)
    router.post('/insertarUsuario',usuarios.insertUser)


    
    

    return router
}
