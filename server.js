var ejs = require('ejs');
var express = require('express');
var partials = require('express-partials');

var app = express();

app.use(partials());

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// include public directory for static assets
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res, next) {
	res.render('index');
});

var port = 3000;
app.listen(port, function() {
	console.log('server listening on port ' + port);
});
