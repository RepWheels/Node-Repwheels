const express = require('express');
const router = express.Router();
const products = require('../controller/productosController')
const usuarios = require('../controller/usuariosController')
const services = require('../controller/serviciosController')


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
    router.get('/login',usuarios.login)
    router.get('/registro',usuarios.registro)
    router.post('/registroForm',usuarios.register)
    router.post('/logueo',usuarios.inicioSesion)

    // router para los servicios
    router.get("/servicios", services.allServices)
    router.post("/insertService", services.insertServices)
    router.get("/allservicios", services.services)
    router.delete("/deleteService/:id", services.deleteServices)
    router.post("/updateService/:id", services.updateService)

    
    

    return router
}
