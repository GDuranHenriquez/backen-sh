//Ruta para la table productos.
const express = require('express')
const  addProducto  = require('../controllers/producto/addProduct.js')
const getAllProductos = require('../controllers/producto/getAllProductos.js')
const updateProduct = require('../controllers/producto/upDateProduct.js')
const getSeaechProduct = require('../controllers/producto/getSeaechProduct.js')
const addSubProduct = require('../controllers/producto/addSubStock.js')
const createPdfTags = require('../controllers/pdfCreate/createPdfTags.js')
const postManyProduct = require('../controllers/producto/postManyProducts.js')
const getSatactProducts = require('../controllers/statistics/getStactProducts.js')
const getReportProducts = require('../controllers/producto/getReportProducts.js')

const productRouter = express.Router();
// TODAS LAS REQ QUE LLEGUEN A ESTE ARCHIVO TIENEN EL "/producto" IMPLICITO

//para llegar a la ruta 3001/producto/"lo que se necesita";
productRouter.put('/addSubProduct', addSubProduct)
productRouter.post('/add-many-products', postManyProduct)
productRouter.post('/report-products', getReportProducts)
productRouter.post('/', addProducto);
productRouter.post('/get-pdf-tags', createPdfTags)
productRouter.get('/codigo-nombre-ptv/wordSearch/:wordSearch/id_departamento/:id_departamento', getSeaechProduct);
productRouter.get('/statics', getSatactProducts)
productRouter.get('/id_departamento/:id_departamento', getAllProductos);
productRouter.put('/', updateProduct);


module.exports = productRouter;