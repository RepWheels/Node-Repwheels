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
    router.post("/insertService", services.insertServices)
    router.get("/allservicios", services.services)
    router.delete("/deleteService/:id", services.deleteServices)

    router.post("/updateService/:id", services.updateService)


    return router
}
