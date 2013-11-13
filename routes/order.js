Order = require('../models/order.js');
Ingredient = require('../models/ingredient.js');

exports.new = function (req, res) {
	var ingredients = Ingredient.find({}, function (err, docs) {
		if (err) throw err;
		res.render('neworder', {ingredients: docs.sort()});
		console.log(docs.sort())
	});
}

exports.orders = function (req, res) {
	var orders = Order.find({}, function (err, docs) {
		if (err) throw err;
		res.render('orders', {orders: docs.sort()});
	});
}