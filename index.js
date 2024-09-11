const express = require('express');
const router = require('./backend/routes/routes');
const path = require('path')


require('dotenv').config();
const app = express();


app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use('/', router());
app.use(express.static("./frontend/views/static"))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname,'/frontend'));
app.set('views', './frontend/views/pages')




app.listen(process.env.PORT, () => {
    console.log(process.env.PORT)
})