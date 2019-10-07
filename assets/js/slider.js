function slider(images, _options){
	let options = {
		speed: 3000,
		timeout: 3000,
		opacity: 0.5
	}
	images = images && images.length ? images : [  ]
	let isPlaying = true
	let to = null
	let inTransition = false

	const $container = $(this)
	options = $.extend({  }, options, _options)

	let _currentBackgroundUrl = $container =>  $container.css('background-image')

	let _setBg = $url => $container.css('background-image', `url(${$url})`)
	
	let _hasBackgroundImage = $container => $container.css('background-image') !== 'none'

	let _getImageIndex = $image =>  images.indexOf($image)

	let _show = (image) => {
		// $container.fadeOut(options.speed-1000, function() {
			
		// });
		

		$container.fadeIn(5000,()=>_setBg(images[0]));

	}

	_show('hh')

}

jQuery.fn.extend({
	'slider': slider
});