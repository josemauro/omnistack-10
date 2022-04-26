const Dev = require("../models/Dev");

module.exports = function parseStringAsArray(stringToParse){
        return stringToParse.split(',').map(tech => tech.trim());
    };