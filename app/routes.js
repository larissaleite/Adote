module.exports = function(app, passport) {

	require('../config/passport')(passport); // pass passport for configuration

	app.use(passport.initialize());
	app.use(passport.session());

	app.get('*', function(req, res) {
			res.sendfile('./public/index.html');
	});

	// =====================================
	// FACEBOOK ROUTES =====================
	// =====================================
	// route for facebook authentication and login
	app.get('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));

	// handle the callback after facebook has authenticated the user
	app.get('/auth/facebook/callback',
		passport.authenticate('facebook', {
			successRedirect : '/home',
			failureRedirect : '/'
		}));

	// route for logging out
	app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});
	
}
