var User = require('../models/User');
var Gobble = require('../models/Gobble');

function index(req, res) {
    User.find({}).populate('gobbles').exec(function(err, user) { 
        res.render('/login', {gobbles: user.gobbles })
    })
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