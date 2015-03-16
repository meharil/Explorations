var connect = require('connect');
var basicAuth = require('basic-auth');
var app = connect()
	.use(function(req, res, next) {
		var user = basicAuth(req);
		if (!user || user.name !== 'tobi' || user.pass !== 'ferret'){
			console.log('your in!');
			res.statusCode = 401;
			res.end('Unauthorized');
		}else {
			console.log('your in!');
			next();
		}
	})
	.use(function (req, res) {
		res.end("I'm a secret\n");
	});

	app.listen(3000);
