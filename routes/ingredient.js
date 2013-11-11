Models = require('../models.js')
Ingredient = Models.Ingredient

exports.new = function (req, res) {
	res.render('../views/newingredient.jade', {});
}

exports.create = function (req, res) {
	console.log(req.body);
	res.redirect('/ingredient/new')

}