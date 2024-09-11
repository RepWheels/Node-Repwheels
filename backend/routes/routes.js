const express = require('express');
const router = express.Router();
const products = require('../controller/productosController')


module.exports = function(){

    router.get('/productos',products.allProducts)
}
