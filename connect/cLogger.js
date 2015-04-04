var connect = require('connect');
var morgan = require('morgan');
var url = require('url');

morgan.token('query-string', function(req, res) {
	return url.parse(req.url).query;
})

var app = connect()
	.use(morgan(':query-string :response-time'))
	.use(hello)
	.listen(3000);

	// hello middeleware
function hello(req, res, next) {
	res.end('Hello World\n');

}
