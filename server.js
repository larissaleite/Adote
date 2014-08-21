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

require('./config/passport')(passport); // pass passport for configuration

var router = express.Router();

router.get('/', function(req, res) {
    // Use res.sendfile, as it streams instead of reading the file into memory.
    res.sendfile('./public/index.html');
});

	// =====================================
	// FACEBOOK ROUTES =====================
	// =====================================
	// route for facebook authentication and login
	router.get('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));

	// handle the callback after facebook has authenticated the user
	router.get('/auth/facebook/callback',
		passport.authenticate('facebook', {
			successRedirect : '/home',
			failureRedirect : '/'
		}));

	// route for logging out
	router.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});

	router.get('/home', function(req, res) {
		res.render('./public/home.html', {
			user : req.user // get the user out of session and pass to template
		});
	});

app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});
