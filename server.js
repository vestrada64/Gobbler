var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var methodOverride = require('method-override');
var twit = require('twit');
require('dotenv').config();

require('./config/database');
require('./config/passport');

var index = require('./routes/index');
var api = require('./routes/api');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/api', api);
app.use(methodOverride('_method'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
//delete here

var T = new twit({
  "consumer_key": "YMzZca6E397b2mQ49Sq8hmjaz",
  "consumer_secret": "REmkmYBM7Dkw1okfwp8w2Z2vXEOozV7anASsS8do4QwukcE1ow",
  "access_token": "4723156794-5yr6lB5uvihkGr1HaiQJDrv3WeBjUjoSc9oDWQF",
  "access_token_secret": "iECd82h4Iwppma6Yi8tCiO51NNdbQVbEOrwANWRB5Fmqb"
})


