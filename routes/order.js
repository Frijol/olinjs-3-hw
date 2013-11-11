Models = require('../models.js');
Order = Models.Order;

exports.new = function (req, res) {
	res.render('../views/neworder.jade', {});
}

exports.orders = function (req, res) {
	res.render('../views/orders.jade', {});
}