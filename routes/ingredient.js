Ingredient = require('../models/ingredient.js');

exports.new = function (req, res) {
	res.render('../views/newingredient.jade', {});
}

exports.create = function (req, res) {
	var newingred = new Ingredient(req.body);
	newingred.save(function (err) {
		if (err) throw err;
	})
	res.redirect('/ingredient/new');
}