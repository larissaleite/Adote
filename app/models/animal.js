// app/models/animal.js
var mongoose = require('mongoose');

// define the schema for animal model
var animalSchema = mongoose.Schema({
	tipo: String,
	situacao: String,
	localizacao: String,
	usuario_nome: String,
	eventos: {
		usuario_nome: String,
		texto: String,
		data: Date,
		categoria: String
	},
	comentarios: {
		usuario_nome: String,
		texto: String,
		data: Date
	}

});

// create the model for users and expose it to our app
module.exports = mongoose.model('Animal', animalSchema);