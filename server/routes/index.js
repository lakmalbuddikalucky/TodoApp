var path = require('path'); 
var router = require('express').Router();
var mongoose = require('mongoose');
var assert = require('assert');
const StanfordCoreNLPClient=require('corenlp-client');
var StopwordsFilter = require('node-stopwords-filter');


// MONGOOSE CONFIG //
mongoose.connect('mongodb://localhost:27017/todos');
mongoose.Promise = global.Promise;
var db = mongoose.connection;
mongoose.set('debug', true);

// BLUE PRINTS //
var Todo = require('../models/todo');

// OTHER DECLARATIONS //
var f = new StopwordsFilter();

// ROUTES //
router.get('/', function(req,res){
	res.sendFile(path.join(__dirname, '../../client/index.html'));
});

// To get the available todos from the database //
router.get('/api/gettodos', function(req,res){
	Todo.find(function(err, todos) {
 		if (err)
 			res.send(err);
 		res.json(todos);
 	});
});

// To store a new todo in the database //
router.post('/api/addtodo', function(req,res){
	Todo.create(req.body).then(function(todo){
		res.json(todo);
	});
});

// To  delete a todo from the database //
router.post('/api/deletetodo', function(req,res){
	Todo.find({ id: req.body.id}).remove().exec();
	res.json(req.body.title);
});

// Route to handle nlp processing requests //
router.post('/api/nlp', function(req,res){
	const client=new StanfordCoreNLPClient("http://localhost:9000","lemma");
	var titleWithoutStopwords = f.filter(req.body.title, 'string');
	var titleAfterNLP;
	client.annotate(titleWithoutStopwords)
  		.then(function(result){
  			res.json(result);
  		});
});

db.once('open', function(){
	console.log("Connection to DB opened");
})

module.exports = router;