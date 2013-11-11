var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/burgers');

var ingredientSchema = mongoose.Schema({
	name: String,
	cost: Number
});

var Ingredient = mongoose.model('Ingredient', ingredientSchema);

module.exports = Ingredient;

var orderSchema = mongoose.Schema({
	customerName: String,
	ingredients: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient' }]
});

var Order = mongoose.model('Order', orderSchema);

module.exports = Order;