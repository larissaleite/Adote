var express  = require('express');
var app      = express(); 								    // create app with express

var mongoose = require('mongoose'); 					// mongoose for mongodb
var port  	 = process.env.PORT || 8080; 			// set the port
var connect = require('connect');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var passport = require('passport');
var flash    = require('connect-flash');

connect()
 .use(cookieParser(''))
 .use(function(req, res, next){
   res.end(JSON.stringify(req.cookies));
 });

// configuration ===============================================================
var db = mongoose.connect('mongodb://127.0.0.1:27017/Adote');

// connect to mongoDB database
mongoose.connection.once('connected', function(error){
	if (error) {
		console.log("Error: " + error);
	} else {
		console.log("Connected to the database");
	}
});

app.use(express.static(__dirname + '/public')); 		// set the static files location /public/img will be /img for users
app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());

require('./app/routes.js')(app, passport);

app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});
