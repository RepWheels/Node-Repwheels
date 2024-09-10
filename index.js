const path = require('path');
const express = require('express');
const app = express();
const router = require('./backend/router/routes'); // Importar el enrutador
require('dotenv').config();
