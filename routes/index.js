var express = require('express');
var router = require('express').Router();
var request = require('request');
var passport = require('passport');
var gobbleCtrl = require('../controllers/gobbles')
var Twit = require('twit');
var tweet = new Twit({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
})


/* GET home page. */
router.get('/gobbles', gobbleCtrl.index );

// router.put('/gobbles/:id', gobblesCtrl.update);

router.get('/', function(req, res) {
  res.render('login', {user: req.user});
})

router.get('/auth/twitter', passport.authenticate(
  'twitter',
  { scope: ['profile', 'email'] }
))

router.get('/twitter/oauthcallback', passport.authenticate(
  'twitter',
  {
    successRedirect : '/gobbles',
    failureRedirect : '/'
  }
));


router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

router.post('/gobbles', function(req, res, next){
  tweet.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
    console.log(data)
  })
});


module.exports = router;
