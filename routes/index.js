var express = require('express');
var router = require('express').Router();
var request = require('request');
var passport = require('passport');
var gobbleCtrl = require('../controllers/gobbles')
var Twit = require('twit');


// landing page --> index page
router.get('/gobbles', gobbleCtrl.index );
router.get('/gobbles/all', gobbleCtrl.showAll);
router.get('/gobbles/edit/:id', gobbleCtrl.editGobble);
router.put('/gobbles/:id', gobbleCtrl.updateGobble);



router.get('/', function(req, res) {
  res.render('login', {user: req.user });
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
