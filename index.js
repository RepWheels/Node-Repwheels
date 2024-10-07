const path = require('path');
const express = require('express');
const app = express();
const router = require('./backend/routes/routes');
require('dotenv').config();



app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use('/', router())
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'/frontend/views'));
app.use(express.static('./frontend/views/static'))

const backup = require('./backend/config/back');
const cron = require('node-cron');
cron.schedule('0 0 0 * * *', async () => {
    console.log('Realizando Backup de la Base de datos');
    backup.backupDatabase();
});

app.listen(process.env.PORT,()=>{
    console.log('corriendo en ', process.env.PORT)
    
})