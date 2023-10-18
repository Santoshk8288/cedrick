const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cedrick', {useNewUrlParser: true});

const restaurantSchema = mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  category:{
    type: String, 
    required: true
  },
  photoUrl:{
    type: String,
    required: true
  },
  tag:{
    type: String,
    required: true
  },
  status:{
    type: String,
    required: true
  },
  create_date:{
    type: Date,
    default: Date.now
  }
});

const Restaurant = module.exports = mongoose.model('restaurant', restaurantSchema);

module.exports.addRestaurant = function(restaurant, callback){
  Restaurant.create(restaurant, callback)
}

module.exports.getRestaurants = function(callback){
  Restaurant.find(callback)
}

module.exports.getRestaurantById = function(id, callback){
  Restaurant.findById(id, callback)
}

module.exports.updateRestaurant = function(id, restaurant, callback){
  var find = {'_id': id}
  var set = {$set:restaurant}
  Restaurant.updateOne(find, set, {upsert: true}, callback)
}

module.exports.deleteRestaurant = function(id, callback){
  var query = {'_id':id}
  Restaurant.findOneAndDelete(query, callback) 
}
