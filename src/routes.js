const { Router } = require('express');

const clientController = require('./controllers/clientController');
const buyerController = require('./controllers/buyerController');
const paymentController = require('./controllers/paymentController');

const routes = Router();

routes.post('/client', clientController.store);
routes.post('/buyer', buyerController.store);
routes.post('/payment', paymentController.store);
routes.get('/payment/', paymentController.show);

module.exports = routes;