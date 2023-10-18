var Restaurant = require('../../config/restaurantService');

module.exports.create = function(req, res, next) {
  var restaurant = req.body;
  Restaurant.addRestaurant(restaurant, function(error, restaurant){
    if(error){
        res.status(404).send();
      }
      else{
        if(restaurant){
          res.status(200).send(restaurant)
        }
        else{
          res.status(404).send('restaurant cannot be created')
        }
      }
  })
};

module.exports.findAll = function(req, res, next) {
  Restaurant.getRestaurants(function(error, restaurants){
    if(error){
        res.status(404).send();
      }
      else{
        if(restaurants){
          res.status(200).send(restaurants)
        }
        else{
          res.status(404).send('cannot get restaurants')
        }
      }
  })
};

module.exports.findOne = function(req, res, next) {
  var id = req.params.id
  Restaurant.getRestaurantById(id, function(error, restaurant){
    if(error){
        res.status(404).send();
      }
      else{
        if(restaurant){
          res.status(200).send(restaurant)
        }
        else{
          res.status(404).send('cannot get restaurant')
        }
      }
  })
};

module.exports.update = function(req, res, next) {
  var id = req.params.id
  var user = req.body
  Restaurant.updateRestaurant(id,user, function(err, user){
    if(err){
      res.status(404).send();
    }
    else{
      if(user){
        
        res.status(200).send(user)
      }
      else{
        res.status(404).send('restaurant not updated')
      }
    }
  })
}
  
  module.exports.delete = function(req, res, next) {
    var id = req.params.id; 
    Restaurant.deleteRestaurant(id, function(err, user){
      if(err){
        res.status(404).send();
      }
      else{
        if(user){
          res.status(200).send(user)
        }
        else{
          res.status(404).send('no restaurant deleted')
        }
      }
    })
  }
