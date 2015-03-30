var connect = require('connect');
var app = connect()
	.use(connect.logger())
	.use(hello)
	.listen(3000);

	// hello middeleware
function hello(req, res, next) {
	res.end('Hello World\n');

}