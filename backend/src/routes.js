const {Router, application} = require('express');
const DevController = require('./controllers/DevController')
routes = Router()

routes.post('/devs', DevController.store);

module.exports = routes;