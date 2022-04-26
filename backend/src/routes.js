const {Router, application} = require('express');
const DevController = require('./controllers/DevController');

const SearchController = require('./controllers/SearchController');

routes = Router()

routes.post('/devs', DevController.store);
routes.get('/devs', DevController.index);

routes.get('/search', SearchController.index)

module.exports = routes;