const express = require('express');
const router = express.Router();
const products = require('../controller/productosController')
const usuarios = require('../controller/usuariosController')


module.exports = function(){

    router.get('/productos',products.allProducts)
    router.post('/insertarProducto',products.insertProduct)
    router.delete('/deleteProduct/:id',products.deleteProduct)

    router.get('/inicio', products.index)
    router.get('/catalogo', products.catalogo)


    // router para los usuarios

    router.get('/usuarios',usuarios.allUsers)
    router.post('/insertarUsuario',usuarios.insertUser)


    
    

    return router
}
