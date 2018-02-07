var User = require('../models/User');
var Gobble = require('../models/Gobble');

function index(req, res) {
    User.find({}, function(err, users) {
        if (err) return res.status(err.statusCode || 500).json(err);
        res.json(users);
    });
}

function create(req, res) {
    User.find({}).populate('gobbles').exec(function(err, users) { console.log(users) })
    req.user.gobbles.push({text: req.body.gobble});
    req.user.save(function(err) {
        res.json(req.user);
    
    });
}

function delete(req, res) {
    console.log('hello');
    Gobble.findByIdAndRemove(req.params.id, function(err, user){
        res.redirect
    })
}

module.exports = {
    index: index,
    create: create,
    delete: delete
};