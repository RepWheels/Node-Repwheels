const express = require('express');
const router = express.Router();
const products = require('../controller/productosController')
const services = require('../controller/serviciosController')

module.exports = function(){
    router.get('/',products.getHome)
    
    // Productos
    router.get('/productos',products.allProducts)




    // Servicios
    router.get("/servicios", services.allServices)
    router.post("/servicios", services.insertServices)
    router.get("/allservicios", services.services)
    return router
}
