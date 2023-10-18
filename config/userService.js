
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cedrick', {useNewUrlParser: true});

const userSchema = mongoose.Schema({
	first_name:{
		type: String,
		required: true
	},
	last_name:{
		type: String,
		required: true
	},
	email:{
		type: String,
		required: true
	},
	password:{
		type: String,
		required: true
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

const User = module.exports = mongoose.model('user', userSchema);

module.exports.createUser = function(user, callback){
	User.create(user, callback)
}

module.exports.getAllUsers = function(callback){
	User.find(callback);
}

module.exports.getUserById = function(id, callback){
	User.findById(id, callback);
}

module.exports.updateUser = function(id, user, callback){
	var find = {'_id': id}
	var set = {$set:user}
	User.updateOne(find, set, {upsert: true}, callback)
}

module.exports.deleteUser = function(id, callback){
	var query = {'_id':id}
	User.findOneAndDelete(query, callback) 
}

module.exports.login = function(user, callback){
	var query = {'email':user.email, 'password':user.password}
	User.find(query, callback)
}


