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

	if (user != 'ml' || pass != 'ml')
	{
		console.log("user/pass incorrect")
		return next(new Error('Unauthorized/incorrect'));
	}
	else
		next();

	//authenticateWithDB(user, pass, function(err) {

		/*if (err) return next(err);
		console.log("err", err);
		next();*/
	//});
}

function authenticateWithDB(user, pass) {
	console.log('user/pass', user, pass);
	if (user != 'ml' || pass != 'ml')
	{
		console.log("user/pass incorrect")
		throw Error("Unauthorized");
	}
	else
		return
	//console.log("continue");
		
}

function admin(req, res, next) {
	switch (req.url) {
		case '/':
			res.end('try /users');
			break;
		case '/users':
			res.setHeader('Content-Type', 'application/json');
			res.end(JSON.stringify(['tobi', 'loki', 'jane']));
			break;
	}
}

connect()
	.use(logger)
	.use('/admin', restrict)
	.use('/admin', admin)
	.use(hello)
	.listen(3000);