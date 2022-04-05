const {Router} = require('express');

routes = Router()

routes.post('/users', (request, response) => {
    console.log(request.body);
    return response.json({message: 'Hello world Dev Front-End!'});
});

module.exports = routes;