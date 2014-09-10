var Animal = require('./models/animal');

module.exports = function(app, passport) {

	require('../config/passport')(passport); // pass passport for configuration

	app.use(passport.initialize());
	app.use(passport.session());

	app.get('/api/animals', function(req, res, next) {
		console.log("GET - api/animals");

		Animal.find({}, function(err, animals) {
			if (err) {
				console.log("erro");
				res.send(err);
			}
			if (!animals.length) {
				//console.log("nao encontrou animais");
				res.send("nao encontrou");
			} else {
				//console.log("animais encontrados ");
				animals.forEach(function (animal) {
					console.log(JSON.stringify(animal));
				});
				res.json(animals);
			}
		});
	});

	app.get('/api/animal/:id', function(req, res, next) {
		console.log("GET - api/animal/id = "+req.query.id);

		Animal.findById(req.query.id, function(err, animal) {
			if (err) {
				console.log("erro");
				res.send(err);
			} else {
				res.json(animal);
			}
		});
	});

	app.get('/api/animals/:userid', function(req, res, next) {

	});

	app.post('/api/animal', function(req, res, next) {
		console.log("POST - api/animal");

		var animal = new Animal({
			nome: req.body.nome,
			tipo: req.body.tipo,
			situacao: req.body.situacao,
			localizacao: req.body.localizacao,
			descricao: req.body.descricao,
			usuario_nome: "Maria Joaquina",
			eventos: {
				usuario_nome: "Maria Joaquina",
				texto: "Registrado por Maria Joaquina",
				data: req.body.date,
				categoria: ""
			}
		});

		animal.save(function(err) {
			if (err)
				res.send(err);

			res.send("success");
		});	
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
			failureRedirect : '/login'
		}));

	// route for logging out
	app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/login');
	});

	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});
	
}

function isAuthenticated(req, res, next) {
	if (req.user.authenticated)
		return next();

	res.redirect('/');
}
