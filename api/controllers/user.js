var User = require('../../config/userService');
module.exports = {};


module.exports.create = function(req, res, next) {
	var user = req.body
	User.createUser(user, function(err, user){
		if(err){
			res.status(404).send();
		}
		else{
			if(user){
				res.status(200).send(user)
			}
			else{
				rres.status(404).send('User cannot be created')
			}
		}
	})
}

module.exports.findAll = function(req, res, next) {
  User.getAllUsers(function(err, user){
	if(err){
			res.status(404).send();
		}
		else{
			if(user){
				res.status(200).send(user)
			}
			else{
				res.status(404).send('no user found')
			}
		}
  })
}

module.exports.findOne = function(req, res, next) {
	var id = req.params.id; 
	User.getUserById(id, function(err, user){
		if(err){
			res.status(404).send();
		}
		else{
			if(user){
				res.status(200).send(user)
			}
			else{
				res.status(404).send('no user found')
			}
		}
	});
}

module.exports.update = function(req, res, next) {
	var id = req.params.id
	var user = req.body
	User.updateUser(id,user, function(err, user){
		if(err){
			res.status(404).send();
		}
		else{
			if(user){
				res.status(200).send(user)
			}
			else{
				res.status(404).send('user not updated')
			}
		}
	})
}

module.exports.delete = function(req, res, next) {
	var id = req.params.id; 
	User.deleteUser(id, function(err, user){
		if(err){
			res.status(404).send();
		}
		else{
			if(user){
				res.status(200).send(user)
			}
			else{
				res.status(404).send('no user deleted')
			}
		}
	})
}

module.exports.login = function(req, res, next){
	var user = req.body
	User.login(user, function(err, user){
		if(err){
			res.status(404).send();
		}
		else{
			if(user.length){
				res.status(200).send(user)
			}
			else{
				res.status(404).send('wrong email or password')
			}
		}
	})
}