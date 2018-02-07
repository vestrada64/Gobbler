var express = require('express');
var router = require('express').Router();
var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('login', { user: req.user });
});

router.get('/index', function(req, res) {
  res.render('index', { user: req.user});
});

router.get('/auth/twitter', passport.authenticate(
  'twitter',
  { scope: ['profile', 'email'] }
));

router.get('/twitter/oauthcallback', passport.authenticate(
  'twitter',
  {
    successRedirect : '/',
    failureRedirect : '/'
  }
));

//Logout Route
router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});


module.exports = router;
