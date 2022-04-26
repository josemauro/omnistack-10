const {Router, application} = require('express');
const DevController = require('./controllers/DevController')
routes = Router()

routes.post('/devs', DevController.store);

routes.get('/devs', DevController.index);

module.exports = routes;