const express = require('express');
const router = express.Router();
const products = require('../controller/productosController')


module.exports = function(){

    router.get('/productos',products.allProducts)
    router.post('/insertarProducto',products.insertProduct)
    router.delete('/deleteProduct/:id',products.deleteProduct)

    router.get('/inicio', products.index)
    

    return router
}
