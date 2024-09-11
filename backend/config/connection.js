const mongoose = require("mongoose")
require("dotenv").config()

const URI= `mongodb+srv://${process.env.USERDB}:${process.env.PASSWORDDB}@repwhelsnode.ffmcd.mongodb.net/${process.env.DB}`

mongoose.connect(URI)
.then(() => console.log("Conexión exitosa a MongoDB"))
.catch(err => console.error("Error al conectar con MongoDB", err));

module.exports = mongoose 


