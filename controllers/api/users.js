var User = require('../../models/User');
var Twit = require('twit');

var tweet = new Twit({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token: process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

function getAllUsers(req, res) {
    User.find({}, function(err, user) {
        res.status(200).json(user);
    });
}

function getOneUser(req, res) {
    User.findById(req.params.id, function(err, user) {
        res.status(200).json(user);
    });
}

function createUser(req, res) {
    var user = new User(req, body);
    user.save(function(err) {
        res.status(201).json(user);
    });
}

function deleteUser(req, res) {
    Movie.findByIdAndRemove(req.params.id, function(err, user) {
        res.status(200).json(user);
    });
}

module.exports = {
    getAllUsers,
    getOneUser,
    createUser,
    deleteUser
}