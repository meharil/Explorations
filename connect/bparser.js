var connect = require('connect');
var bodyParser = require('body-parser');

/*var app = connect()
	.use(bodyParser.json())
	.use(function(req, res) {
		console.log("Registered new user: " + req.body.username);
		res.end('Registered new user: ' + req.body.username);
	}).listen(3000);*/

var app = connect()
	.use(bodyParser.urlencoded({extended:true}))
	.use(function(req, res) {
		console.log(req.body);
		console.log(req.files);
		res.end('thanks!')
	}).listen(3000);
