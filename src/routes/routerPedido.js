const { Router } = require('express');

const getAllOrders = require('../controllers/pedidos/getAllPedidos');
const postNewOrder = require('../controllers/pedidos/postNewOrder');

const routerPedido = Router();

routerPedido.post('/', postNewOrder);
routerPedido.get('/:nPages/:nRegistros', getAllOrders);

module.exports = routerPedido;