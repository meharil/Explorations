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
	res.render('photos', {
		title: "Photos",
		photos: photos
	});
};