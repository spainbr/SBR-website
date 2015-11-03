var lastX = 0;
var currentX = 0;
var page = 1;

$(window).scroll(function () {
	if (page < maxPages) {
		currentX = $(window).scrollTop();
		if (currentX - lastX > 200 * page) {
			lastX = currentX;
			page++;
			$.get('/list/' + page, function(data) {
				$('#propertyList').append(data);
			});
		}
	}
});