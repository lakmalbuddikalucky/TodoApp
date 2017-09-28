	// PACKAGES //
var path = require('path');
var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');

// IMPORTS //
var indexRoutes = require('./routes/index');

// CREATE APP //
var app = express();

// VIEW ENGINE //
app.set('view engine', 'html'); 
app.engine('html', function(path, options, callback){
	fs.readFile(path, 'utf-8', callback);
});

// MIDDLEWARE //
app.use(express.static(path.join(__dirname,'../client')));


// BODY PARSING //
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ROUTES //
app.use('/', indexRoutes);

// ERROR HANDLER //
app.use(function(err, req,res,next){
	res.status(err.status || 500);
});

// SERVE APP //
module.exports = app;