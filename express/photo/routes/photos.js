var Photo = require('../models/Photo');
var path = require('path');
var fs = require('fs');
var join = path.join;

var photos = [];
photos.push({
	name: 'doro wott',
	path: 'http://batikitchen.com/redesign/sites/default/files/styles/slideshow_style/public/slider-image/bati_doro_wett.jpg'
});

photos.push({
	name: 'kitfo',
	path: 'http://batikitchen.com/redesign/sites/default/files/styles/slideshow_style/public/slider-image/bati_delicious_kitfo_gomen.jpg'
});

photos.push({
	name: 'tibs',
	path: 'http://batikitchen.com/redesign/sites/default/files/styles/slideshow_style/public/slider-image/kitfo.jpg'
});

photos.push({
	name: 'ayib',
	path: 'http://batikitchen.com/redesign/sites/default/files/styles/slideshow_style/public/slider-image/ayib.jpg'
});

exports.list = function(req, res){
	Photo.find({}, function(err, photos){
		if (err) return next(err);
		res.render('photos', {
			title: "Photos",
			photos: photos
		});
	});	
};

exports.form = function(req, res){
	console.log('show form');
	res.render('photos/upload', {
		title: 'Photo upload'
	})
}

exports.submit = function (dir) {
	return function(req, res, next){
		console.log("req files", req.files, req.files.photo);
		var img = req.files.photo.image;
		var name = req.body.photo.name || img.name;
		var path = join(dir, img.name);
		fs.rename(img.path, path, function(err) {
			if(err) return next(err);
			Photo.create({
				name: name,
				path: img.name

			}, function(err){
				if (err) return next(err);
				res.redirect('/');
			});
		});
	};
};