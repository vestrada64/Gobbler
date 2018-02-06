var User = require('../../models/User');

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

function updateUser(req, res) {
    User.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, user) {
        res.status(200).json(user);
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
    updateUser,
    deleteUser
}