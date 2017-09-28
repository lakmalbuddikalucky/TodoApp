var app = require('../server/server');

// DEFINE THE PORT FOR EXPRESS SERVER //
var port = 8000;

// INITIALIZE THE APP AND LISTEN //
app.listen(port, function(){
	console.log('Running at localhost:' + port);
});