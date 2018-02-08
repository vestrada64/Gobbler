var express = require('express');
var router = require('express').Router();
var request = require('request');
var passport = require('passport');
var gobbleCtrl = require('../controllers/gobbles')
var Twit = require('twit');



router.get('/gobbles', gobbleCtrl.index);
router.put('/gobbles', gobbleCtrl.update);
router.get('/show', gobbleCtrl.showAll);

router.get('/', function(req, res) {
  res.render('login', {user: req.user, });
})

router.get('/auth/twitter', passport.authenticate(
  'twitter',
  { scope: 'session' }
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

module.exports = router;
