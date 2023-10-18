var Order = require('../../config/orderService');

module.exports.placeOrder = function(req, res, next){
  var order = req.body
  Order.placeOrder(order, function(err, order){
    if(err){
      res.status(404).send();
    }
    else{
      if(order){
        res.status(201).send(order)
      }
      else{
        res.status(404).send('order can not be placed')
      }
    }
  })
}

module.exports.findAll = function(req, res, next) {
  Order.getOrders(function(error, order){
    if(error){
        res.status(404).send();
      }
      else{
        if(order){
          res.status(201).send(order)
        }
        else{
          res.status(404).send('cannot get orders')
        }
      }
  })
};

module.exports.findOne = function(req, res, next) {
  var id = req.params.id
  Order.getOrderById(id, function(error, order){
    if(error){
        res.status(404).send();
      }
      else{
        if(order){
          res.status(201).send(order)
        }
        else{
          res.status(404).send('cannot get order')
        }
      }
  })
};

module.exports.update = function(req, res, next) {
    var id = req.params.id
    var order = req.body
    Order.updateOrder(id,order, function(err, order){
      if(err){
        res.status(404).send();
      }
      else{
        if(order){
          
          res.status(201).send(order)
        }
        else{
          res.status(404).send('order not updated')
        }
      }
    })
  }
  
module.exports.delete = function(req, res, next) {
  var id = req.params.id; 
  Order.deleteOrder(id, function(err, order){
    if(err){
      res.status(404).send();
    }
    else{
      if(order){
        res.status(201).send(order)
      }
      else{
        res.status(404).send('no order deleted')
      }
    }
  })
}
