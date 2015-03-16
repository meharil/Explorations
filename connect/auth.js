var connect = require('connect');
var basicAuth = require('basic-auth');
var app = connect()
	.use(basicAuth('tobi', 'ferret'))
	.use(function (req, res) {
		res.end('I am a secret\n');
	});
