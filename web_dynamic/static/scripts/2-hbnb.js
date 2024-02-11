$(document).ready(function() {
	let list_am = [];
	$('input[type=checkbox]').change (function() {
		let name = $(this).attr('data-name');
			if ($(this).is (':checked')) {
				list_am.push(name);
			} else {
				list_am = list_am.filter(amenities => amenities !== name);
			}
		$('.amenities h4').text(list_am.join(', '));
	});


	$.ajax({
		type: 'GET',
		url: 'http://0.0.0.0:5001/api/v1/status/',
		dataType: 'json',
		success: function(data) {
			if (data.status === "OK") {
				$('#api_status').addClass('available');
			} else {
				$('#api_status').removeClass('available');
			}
		}
	});
});
