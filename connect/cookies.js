var connect = require('connect');

var app = connect()
	.use(connect.cookieParser('tobi is a ferret'))
	.use(function(req, res) {
		console.log(req.cookies);
		console.log(req.signedCookies);
		res.end('hello\n');
	}).listen(3000);