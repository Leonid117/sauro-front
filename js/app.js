$(function() {

	var $down = $('.down');
	var $next = $down.parents('section').next('section');

	$down.on('click', function(e) {
		$('html, body').animate({
			scrollTop: $next.offset().top
		}, 700);
	});

	if ($(window).width() <= 520) {

		var $items = $('#items');
		var $dots = $('.dots .dot');
		var $cur;

		if (!$items.length) {
			return false;
		}

		$items.itemslide();

		$cur = $items.find('.itemslide-active').index() + 1;

		$items.on('changeActiveIndex', function(e) {
			$cur = $items.find('.itemslide-active').index() + 1;
			$.each($dots, function(i, v) {
				var v = $(v);
				var c = 'i' + $cur;
				v.removeClass('active');
				if (v.hasClass(c)) {
					v.addClass('active');
				}
			});
		});

	}

});