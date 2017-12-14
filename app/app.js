var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors=require('cors');
var index = require('./routes/index');
var users = require('./routes/users');
var Tasks=require('./routes/Tasks');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use(cors());
app.use('/Tasks',Tasks);
//LISÄTTY 
app.use('/node_modules', express.static(__dirname + '/node_modules')); 
app.use('/style', express.static(__dirname + '/style'));

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

var index = require('./routes/index'); 
var users = require('./routes/users'); 
var Tasks=require('./routes/Tasks'); 
var app = express(); 

// view engine setup 
app.set('views', path.join(__dirname, 'views')); 
app.set('view engine', 'pug'); 

app.set('views', path.join(__dirname, 'views')); 
app.set('view engine', 'pug'); 

app.use('/', Tasks); 
app.use('/users', users); 
app.use(cors()); 
app.use('/Tasks',Tasks);

... var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator()); 
app.use(cookieParser());

