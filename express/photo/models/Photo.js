var mongoose = require('mongoose');
var fs = require('fs');

var stream = fs.createReadStream('../../public/settings/settings');
stream.on('data', function(chunk){
	var setting = JSON.parse(chunk);
	mongoose.connect(setting.replace(/(\:\/\/)/, '://'+obj.user+':'+obj.password+'@'));

});
stream.on('error', function(err) {
		process.stderr.write("ERROR: " + err.message + "\n");
});

//mongoose.connect('mongodb://meharil:Shady_1@ds039010.mongolab.com:39010/node-db');
var schema = new mongoose.Schema({
	name: String,
	path: String
});
module.exports = mongoose.model('Photo', schema);