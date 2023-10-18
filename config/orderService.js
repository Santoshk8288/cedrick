const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cedrick', {useNewUrlParser: true});

const orderSchema = mongoose.Schema({
  event:{
    type:String,
    required: true
  },
  restaurant_acknowledged_at:{
    type:String,
    required: true
  },
  restaurant_id:{
    type:String,
    required: true
  },
  order:{
    type:Object,
    required: true
  },
  create_date:{
    type: Date,
    default: Date.now
  }
});

const Order = module.exports = mongoose.model('order', orderSchema);

module.exports.placeOrder = function(order, callback){
  Order.create(order, callback)
}

module.exports.getOrders = function(callback){
  Restaurant.find(callback)
}

module.exports.getOrderById = function(id, callback){
  Restaurant.findById(id, callback)
}

module.exports.updateOrder = function(id, order, callback){
  var find = {'_id': id}
  var set = {$set:order}
  Restaurant.updateOne(find, set, {upsert: true}, callback)
}

module.exports.deleteOrder = function(id, callback){
  var query = {'_id':id}
  Restaurant.findOneAndDelete(query, callback) 
}
