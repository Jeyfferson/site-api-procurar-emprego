const express  = require('express');
const rotas    = express.Router();
const db       = require('./../db/models');



rotas.get('/usuarios', (req, res) => {
   res.send('Welcome')
})


module.exports = rotas;