var connect = require('connect');


function logger(req, res, next) {
	console.log('%s %s', req.method, req.url);
	next();
}

function hello(req, res){
	res.setHeader('Content-Type', 'text/plain');
	res.end('hello world');
}

function restrict(req, res, next){
	var authorization = req.headers.authorization;
	if (!authorization) return next(new Error('Unauthorized'));
	var parts = authorization.split(' ')
	var scheme = parts[0]
	var auth = new Buffer(parts[1], 'base64').toString().split(':')
	var user = auth[0]
	var pass = auth[1];

	authenticateWithDB(user, pass, function(err) {

		if (err) return next(err);
		if (user == 'ml' && pass == 'ml') next();
	});
}

connect()
	.use(logger)
	.use('/admin', restrict)
	.use('/admin', admin)
	.use(hello)
	.listen(3000);