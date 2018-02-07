var User = require('../../models/User');
var Gobble = require('../../models/Gobble');


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

function createGobble(req, res) {
    var gobble = new Gobble(req.body);
    gobble.save(function(err) {
        if (err) console.log(err);
        req.user.save(function(err) {
            res.json(req.user).status(200);
        });
        
    });
    User.findById(req.params.id).populate('gobbles').exec(function(err, gobble){
        console.log(req.params._id)
        console.log(gobble)
        });
    };



    // console.log(req.body);
    // let thisUser = User.findById(req.params.id, function(err, user){
       
    // });


module.exports = {
    getAllUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser,
    createGobble
}