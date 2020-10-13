var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var FoodItemSchema = new Schema({
  name: String,
  description: String,
  price: Number,
  img: String,
});

var CategorySchema = new Schema({
  name: String,
  items: [FoodItemSchema],
});


var RestaurantSchema = new Schema({
  name: String,
  image: String,
});

module.exports.FoodItem = mongoose.model("FoodItem", FoodItemSchema);
module.exports.Category = mongoose.model('Category', CategorySchema);
module.exports.Restaurant = mongoose.model('Restaurant', RestaurantSchema);
