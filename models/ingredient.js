var mongoose = require('mongoose');

var ingredientSchema = mongoose.Schema({
	ingredient: String,
	cost: Number
});

var Ingredient = mongoose.model('Ingredient', ingredientSchema);

module.exports = Ingredient;