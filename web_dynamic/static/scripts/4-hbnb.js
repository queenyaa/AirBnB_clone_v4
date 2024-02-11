$(document).ready(function() {
	$('#search-button').click(function() {
		let amenities = [];
		$('input[type=checkbox]:checked').each(function() {
			amenities.push($(this).attr('data-id'));
		});

		$.ajax({
			type: 'POST',
			url: 'http://0.0.0.0:5001/api/v1/places_search/',
			contentType: 'application/json',
			data: JSON.stringify({ amenities: amenities }),
			success: function(data) {
				// handle the response
				console.log(data);
			}
			error: function(xhr, status, error) {
				console.error('Error:', error);
			}
		});
	});
});
