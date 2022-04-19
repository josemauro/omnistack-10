const mongoose = require('mongoose');

const DevSchema = new mongoose.Schema({
    name: String,
    github_username: String,
    avatar_url: String,
    bio: String,
    techs: [String],
});

module.exports = mongoose.model('dev', DevSchema);