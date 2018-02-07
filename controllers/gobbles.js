var User = require('../models/User');
var Gobble = require('../models/Gobble');
var Twit = require('twit');

function index(req, res) {
    
    if (req.user) { 
        req.user.populate('gobbles', function(err) { 
          res.render('login', {user: req.user })
        });
    } else {
        res.render('login', {user: null })
    }
}

function create(req, res) {
    User.find({}).populate('gobbles').exec(function(err, users) { console.log(users) })
    req.user.gobbles.push({text: req.body.gobble});
    req.user.save(function(err) {
        res.json(req.user);
    });
}

function deleteGobble(req, res) {
    console.log('hello');
    Gobble.findByIdAndRemove(req.params.id, function(err, user){
        res.redirect
    })
}

module.exports = {
    index: index,
    create: create,
    delete: deleteGobble
};