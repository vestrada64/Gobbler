var User = require('../models/User');
var Gobble = require('../models/Gobble');
var Twit = require('twit');

var tweet = new Twit({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token: process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
})

function index(req, res) {
    tweetStream = [];
    tweet.get('statuses/home_timeline', { count: 50 }, function(err, data, response){
        for(let i = 0; i < data.length; i++) {
            tweetStream.push(data[i]);
        };
    });
    if (req.user) { 
        req.user.populate('gobbles', function(err) { 
          res.render('index', {user: req.user, tweetStream: req.body.tweetStream})
        });
    } else {
        res.render('index', {user: null, tweetStream: req.body.tweetStream })
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
        // res.redirect
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