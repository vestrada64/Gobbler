var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var TwitterStrategy = require('passport-twitter').Strategy;
var User = require('../models/User');

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
    },
    function(accessToken, refreshToken, profile, cb) {
        User.findOne({ 'googleId': profile.id }, function(err, user) {
            if (err) return cb(err);
            if (user) {
                return cb(null, user);
            } else {
                var newUser = new User({
                    name: profile.displayName,
                    email: profile.emails[0].value,
                    googleId: profile.id
                });
                newUser.save(function(err) {
                    if (err) return cb(err);
                    return cb(null, newUser);
                });
            }
        });
    }
));

passport.use(new TwitterStrategy({
    consumerKey: process.env.TWITTER_CONSUMER_KEY,
    consumerSecret: process.env.TWITTER_SECRET,
    callbackURL: process.env.TWITTER_CALLBACK
  },
  function(token, tokenSecret, profile, cb) {
    User.findOne({ twitterId: profile.id }, function (err, user) {
        if (err) return cb(err);
        console.log(user);
        if (profile) {
            return cb(null, user);
        } else {
            var newUser = new User({
                name: profile.displayName,
                twitterId: profile.id,
                userName: profile.username
            });
            newUser.save(function(err) {
                if (err) return cb(err);
                return cb(null, newUser);
            });
        }
    });
  }
));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});


passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});


