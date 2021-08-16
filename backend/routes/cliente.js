var express = require('express');
var ClienteController = require('../controllers/ClienteController');

var api = express.Router();

api.post('/registro_cliente', ClienteController.registro_cliente);
api.post('/login_cliente', ClienteController.login_cliente);

module.exports = api;