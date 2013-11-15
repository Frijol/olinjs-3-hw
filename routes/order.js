Order = require('../models/order.js');
Ingredient = require('../models/ingredient.js');

exports.new = function (req, res) {
	var ingredients = Ingredient.find({}, function (err, docs) {
		if (err) throw err;
		res.render('neworder', {ingredients: docs.sort()});
	});
}

exports.create = function (req, res) {
	console.log(req.body);
	ingredlist = []
	for (i in req.body) {
		if (i == 'customerName') {
			name = req.body[i]
		} else {
			ingredlist.push(' ' + i)
		}
	}
	var neworder = new Order({customerName: name, ingredients: ingredlist});
	neworder.save(function (err) {
		if (err) throw err;
	});
	res.redirect('/orders')
}

exports.orders = function (req, res) {
	var orders = Order.find({}, function (err, docs) {
		if (err) throw err;
		res.render('orders', {orders: docs.sort()});
	});
}