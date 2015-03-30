var connect = require('connect');
var morgan = require('morgan');

var app = connect()
	.use(morgan('combined'))
	.use(hello)
	.listen(3000);

	// hello middeleware
function hello(req, res, next) {
	res.end('Hello World\n');

}