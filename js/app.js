if ($(window).width() <= 520) {

	var items, cur, dots = $('.dots .dot');

	$(document).ready(function() {

		items = $('#items');

		if (!items.length) {
			return false;
		}

		items.itemslide();

		cur = items.find('.itemslide-active').index() + 1;

		items.on('changeActiveIndex', function(e) {
			cur = items.find('.itemslide-active').index() + 1;
			$.each(dots, function(i, v) {
				var v = $(v);
				var c = 'i' + cur;
				v.removeClass('active');
				if (v.hasClass(c)) {
					v.addClass('active');
				}
			});
		});

	});

}