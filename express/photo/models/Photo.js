var mongoose = require('mongoose');
var app = require('../app');

console.log('db url', app.locals.db_string);
mongoose.connect('mongodb://meharil:Shady_1@ds039010.mongolab.com:39010/node-db');
var schema = new mongoose.Schema({
	name: String,
	path: String
});
module.exports = mongoose.model('Photo', schema);