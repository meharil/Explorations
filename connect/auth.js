var connect = require('connect');
var app = connect()
	.use(connect.basicAuth('tobi', 'ferret'))
	.use(function (req, res) {
		res.end('I am a secret\n');
	});
