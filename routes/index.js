var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('login', { user: req.user });
});

router.get('/index', function(req, res) {
  res.render('index', { user: req.user});
});


router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

//Google Callback Route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/index',
    failureRedirect: '/'  
  }
));

//Logout Route
router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

//Add Login/Logout UI
router.get('/', function(req, res) {
  res.render('login', { user: req.user });
});

module.exports = router;
