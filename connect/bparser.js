var connect = require('connect');
var bodyParser = require('body-parser');

var app = connect()
	.use(bodyParser.json())
	.use(function(req, res) {
		res.end('Registered new user: ' + req.body.username);
	}).listen(3000);
