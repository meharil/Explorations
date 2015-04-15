var mongoose = require('mongoose');
var fs = require('fs');

var stream = fs.createReadStream('../public/settings/setting');
stream.on('data', function(chunk){
	var setting = JSON.parse(chunk);
	mongoose.connect(setting.replace(/(\:\/\/)/, '://'+obj.user+':'+obj.password+'@'));

});

//mongoose.connect('mongodb://meharil:Shady_1@ds039010.mongolab.com:39010/node-db');
var schema = new mongoose.Schema({
	name: String,
	path: String
});
module.exports = mongoose.model('Photo', schema);