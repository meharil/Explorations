var connect = require('connect');
var stat = require('serve-static');

var app = connect()
	.use('/app/files',stat('public'))
	.listen(3000);