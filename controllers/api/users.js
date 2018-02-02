var User = require('../../models/User');

function getAllUsers(req, res) {
    User.find({}, function(err, user) {
        res.status(200).json(user);
    });
}


function getOneUser(req, res) {
    User.findById(req.params.id, function(err, movie) {
        res.status(200).json(movie);
    });
}


function createUser(req, res) {
    var user = new User(req, body);
    user.save(function(err) {
        res.status(201).json(user);
    });
}

function updateUser(req, res) {
    User.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, user) {
        res.status(200).json(user);
    });
}

function deleteMovie(req, res) {
    Movie.findByIdAndRemove(req.params.id, function(err, movie) {
        res.status(200).json(movie);
    });
}

module.exports = {
    getallUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser
}