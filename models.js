var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/burgers');

var ingredientschema = mongoose.Schema({
        name: String,
        cost: Number
});

var Ingredient = mongoose.model('Ingredient', ingredientschema);

module.exports = Ingredient;