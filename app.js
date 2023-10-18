var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

var port = process.env.PORT || 3100;
var user = require('./api/controllers/user')
var restaurant = require('./api/controllers/restaurant')
// var meal = require('./api/controllers/meal')

app.listen(port,function(){
	console.log('Server running at', port)
})

/*API's for User*/
app.post('/user', user.create)
app.get('/user', user.findAll)
app.get('/user/:id', user.findOne)
app.put('/user/:id', user.update)
app.delete('/user/:id', user.delete)

/*API's for Restaurant*/
app.post('/restaurant', restaurant.create)
app.get('/restaurant', restaurant.findAll)
app.get('/restaurant/:id', restaurant.findOne)
app.put('/restaurant/:id', restaurant.update)
app.delete('/restaurant/:id', restaurant.delete)

/*API for login*/
app.post('/login', user.login)