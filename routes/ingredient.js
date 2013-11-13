Ingredient = require('../models/ingredient.js');

exports.new = function (req, res) {
	res.render('../views/newingredient.jade', {});
}

exports.create = function (req, res) {
	console.log(req.body);
	res.redirect('/ingredient/new');
}