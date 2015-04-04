var connect = require('connect');
var stat = require('serve-static');

var app = connect()
	.use(stat('public'))
	.listen(3000);