const { index } = require('../models/utils/PointSchema');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(request, response){
        const {latitude, longitude, techs} = request.query;
        techsArray = parseStringAsArray(techs);

        
        const devs = await Dev.find({
           techs: {
               $in: techsArray,
           },
           location: {
               $near: {
                   $geometry: {
                       type: 'Point', 
                       coordinates: [longitude, latitude],
                   },
                   $maxDistance: 10000
               }
           }
        });

        return response.json({devs: devs});   
    }
}
