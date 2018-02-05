var passport = require('passport');
var TwitterStrategy = require('passport-twitter').Strategy;
var User = require('../models/User');

passport.use(new TwitterStrategy({
    consumerKey: process.env.TWITTER_CONSUMER_KEY,
    consumerSecret: process.env.TWITTER_SECRET,
    callbackURL: process.env.TWITTER_CALLBACK
  },
  function(token, tokenSecret, profile, cb) {
    User.findOne({ 'twitterId': profile.id }, function (err, user) {
        console.log(profile)
        if (err) return cb(err);
        // user.avatar = profile.photos[0].value;
        // user.displayName = profile.username;
        // user.userName = profile.displayName;

        if (user) {
            if (!user.avatar || !user.displayName || !user.userName) {

                user.save(function(err) {
                  return cb(null, user);
                });
              } else {
                return cb(null, user);
              }
        } else {
            var newUser = new User({
                avatar: profile.photos[0].value,
                displayName: profile.username,
                userName: profile.displayName,
                twitterId: profile.id
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


