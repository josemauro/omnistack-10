const {Router, application} = require('express');
const axios = require('axios');
const Dev = require('./models/Dev')

routes = Router()

routes.post('/devs', async (request, response) => {
    const { github_username, techs, latitude, longitude } = request.body;

    const githubApiResponse = await axios.get(`https://api.github.com/users/${github_username}`)
    
    var {name, login, avatar_url, bio} = githubApiResponse.data;

    name = name ? name : login;

    console.log("name ", name);

    techsArray = techs.split(',').map(tech => tech.trim());
    
    const location = {
        type: 'Point',
        coordinates: [longitude, latitude],
    };

    const dev_obj = {
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location
    }

    const dev = await Dev.create(dev_obj);
    
    return response.json(dev);
});

module.exports = routes;