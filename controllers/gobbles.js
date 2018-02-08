var User = require('../models/User');
var Gobble = require('../models/Gobble');
var Twit = require('twit');
var request = require("request");




var tweet = new Twit({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token: process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
})

var Timeline = [];
function index(req, res) {
    // create home timeline
    
    tweet.get('statuses/home_timeline', {count: 10}, function(err, data, response) {
        for(d in data){
            var text = data[d].text;
            Timeline.push(text);
        }
    });
    // render the page
    if (req.user) { 
        req.user.populate('gobbles', function(err) { 
          res.render('index', {user: req.user, Timeline: Timeline})
        });
    } else {
        res.render('index', {user: null })
    }

}

function showAll(req, res) {
    Gobble.find({}, function(err, gobbles) {
        res.render('show', {gobbles: gobbles});
    });
}

function create(req, res) {
    User.find({}).populate('gobbles').exec(function(err, users) { console.log(users) })
    req.user.gobbles.push({text: req.body.gobble});
    req.user.save(function(err) {
        res.json(req.user);
    });
}

function deleteGobble(req, res) {
    Gobble.findByIdAndRemove(req.params.id, function(err, user){
        res.redirect('')
    })
}

function update(req, res) {
    Gobble.findByIdAndUpdate(req.params.id, function(err, gobble) {
        res.render('/edit');
    });
}

function edit(req, res) {

}

module.exports = {
    index: index,
    create: create,
    delete: deleteGobble,
    update: update,
    showAll
};