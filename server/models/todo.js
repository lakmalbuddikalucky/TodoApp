'use strict';

var mongoose = require('mongoose');

// Schema to be used when dealing with the MongoDB
var todoSchema = mongoose.Schema({
	id:{
		type: String
	},
	title:{
		type:String
	}
});

module.exports = mongoose.model('todo',todoSchema);