$(document).ready(function() {
	$.ajax({
		type: 'POST',
		url: 'http://0.0.0.0:5001/api/v1/places_search/',
		contentType: 'application/json',
		data: JSON.stringify({})
	}).done(function(data) {
		// Check if places data is available
		if (data.length > 0) {
			// Loop through places data
			data.forEach(function(place) {
				var placeHTML = '<article>' +
						'<div class="title_box">' +
						'<h2>' + place.name + '</h2>' +
						'<div class="price_by_night">$' +
						place.price_by_night + '</div>' +
						'</div>' + '<div class="information">' +
						'<div class="max_guest">' + place.max_guest +
						'Guest' + (place.max_guest != 1 ? 's' : '') +
						'</div>' + '<div class="number_rooms">' +
						place.number_rooms + 'Bedroom' +
						(place.number_rooms != 1 ? 's' : '') +
						'</div>' + '<div class="number_bathrooms">' +
						place.number_bathrooms + 'Bathroom' +
						(place.number_bathrooms != 1 ? 's' : '') +
						'</div>' + '</div>' +
						'<div class="description">' + place.description +
						'</div>' + '</article>';
				$(.'places').append(placeHTML);
			});
		}
	});
});
