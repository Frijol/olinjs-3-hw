Order = require('../models/order.js');
Ingredient = require('../models/ingredient.js');

exports.new = function (req, res) {
	var ingredients = Ingredient.find({}, function (err, docs) {
		if (err) throw err;
		res.render('neworder', {ingredients: docs.sort()})
	});
}

exports.orders = function (req, res) {
	res.render('../views/orders.jade', {});
}