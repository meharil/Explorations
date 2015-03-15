var connect = require('connect');
var cookieParser = require('cookie-parser');

// var app = connect()
// 	.use(cookieParser('tobi is a ferret'))
// 	.use(function(req, res) {
// 		console.log(req.cookies);
// 		console.log(req.signedCookies);
// 		res.end('hello\n');
// 	}).listen(3000);

var app = connect()
	.use(function(req, res) {
		res.setHeader('Set-Cookie', 'foo=bar');
		res.setHeader('Set-Cookie', 'tobi=ferret; Expires=Tue, 08 Jun 2020 12:12:15 GMT');
		res.end();
	}).listen(3000);