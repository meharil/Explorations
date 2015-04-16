var mongoose = require('mongoose');
var fs = require('fs');

var stream = fs.createReadStream(__dirname + '/settings/settings');
stream.on('data', function(chunk){
	var setting = JSON.parse(chunk);
	mongoose.connect(setting.replace(/(\:\/\/)/, '://'+obj.user+':'+obj.password+'@'));

});
stream.on('error', function(err) {
		process.stderr.write("ERROR: " + err.message + "\n");
});

var schema = new mongoose.Schema({
	name: String,
	path: String
});
module.exports = mongoose.model('Photo', schema);