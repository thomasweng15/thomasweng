var ejs = require('ejs');
var express = require('express');
var partials = require('express-partials');
var favicon = require('serve-favicon')

var app = express();

app.use(partials());

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// include public directory for static assets
app.use(express.static(__dirname + '/public'));
app.use(favicon(__dirname + '/public/favicon.ico'));

app.get('/', function (req, res, next) {
	res.render('index');
});

app.get('/secret', function (req, res, next) {
	res.render('extra', { layout: false });
});

var port = 3000;
app.listen(process.env.PORT || port, function() {
	console.log('server listening on port ' + port);
});
