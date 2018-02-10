// const twitterURL= "http://twitter.comlhoem?status=";
var User = require('../../models/User');
var Gobble = require('../../models/Gobble');
var Twit = require('twit');


var tweet = new Twit({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token: process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
})

function createGobble(req, res) {
    console.log(req.body);
    let gobble = new Gobble(req.body);
    // let twitterExport = encodeURIComponent(gobble.content);
    gobble.save(function(err) {
        if (err) console.log(err);
        req.user.gobbles.push(gobble._id);
        req.user.save(function(err) {
            req.user.populate('gobbles', function(err){
                res.status(201).json(req.user);
            });
        });
    });
    //tweet.post('statuses/update', { status: req.body.content + "\nThis Tweet was tweeted through Gobbler! Its like Twitter, but with an edit button!" }, function(err, data, response){
}

function deleteGobble(req, res) {
    User.findOne(req.user._id)
    .then(function(user){
        user.save(function(err){
            res.status(200).json(user.gobbles)
        })
    });
    Gobble.findByIdAndRemove(req.params.id)
    .then(function(gobble){
    });
}

function updateGobble(req, res) {
    Gobble.findById(id, function(err, gobble)  {
        if (err) return handleError(err);
        gobble.content = updatedContent;
        gobble.save(function(err, updatedGobble){
            if(err) return console.log(err);
            res.send(updatedGobble);
        });
     });
};

function getAllGobbles(req, res) {
    Gobble.find({}, function(err, gobble) {
        res.status(200).json(gobble);
    });
}

function getOneGobble(req, res) {
    Gobble.findById(req.params.id, function(err, gobble) {
        res.status(200).json(gobble);
    });
}





module.exports = {
    createGobble,
    deleteGobble,
    getAllGobbles,
    updateGobble,
    getOneGobble
}

