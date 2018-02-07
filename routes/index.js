var express = require('express');
var router = require('express').Router();
var passport = require('passport');
var gobbleCtrl = require('../controllers/gobbles')

/* GET home page. */
router.get('/gobbles', gobbleCtrl.index );

router.get('/', function(req, res) {
  res.render('login', { user: req.user });
});

router.get('/auth/twitter', passport.authenticate(
  'twitter',
  { scope: ['profile', 'email'] }
));

router.get('/twitter/oauthcallback', passport.authenticate(
  'twitter',
  {
    successRedirect : '/gobbles',
    failureRedirect : '/'
  }
));

//Logout Route
router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});


module.exports = router;
