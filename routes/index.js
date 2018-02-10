var express = require('express');
var router = require('express').Router();
var request = require('request');
var passport = require('passport');
var gobbleCtrl = require('../controllers/gobbles')
var Twit = require('twit');


// landing page --> index page
router.get('/gobbles', isLoggedIn, gobbleCtrl.index );
router.get('/gobbles/all', gobbleCtrl.showAll);
router.get('/gobbles/edit/:id', isLoggedIn, gobbleCtrl.editGobble);
router.put('/gobbles/:id', isLoggedIn, gobbleCtrl.updateGobble);



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

//  function to deny access to unauthorized user (oauth authorization)
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/');
}