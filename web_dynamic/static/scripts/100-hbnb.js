$(document).ready(funcitno() {
	let list_amenities = [];
	let list_states = [];
	let list_cities = [];

	$('input[type=checkbox]').change(function() {
		let id = $(this).attr('data-id');
		let name = $(this).attr('data-name');

		if ($(this).is(':checked')) {
			if (id.length === 2) {
				list_states.push({ id: id, name: name });
			} else if (id.length === 8) {
				list_cities.push({ id: id, name: name });
			} else {
				list_amenities.push({ id: id, name: name });
			}
		} else {
			if (id.length === 2) {
				list_states = list_states.filter(state => state.id !== id);
			} else if (id.length === 8) {
				list_cities = list_cities.filter(city => city.id !== id);
			} else {
				list_amenities = list_amenities.filter(amenity => amenity.id !== id);
			}
		}
		let states_name = list_states.map(state => state.name).join(', ');
		let cities_name = list_cities.map(city => city.name).join(', ');

		$('.locations h4').text(states_names + ', ' + cities_names);
	});

	$('#search-button').click(function() {
		let amenities_ids = list_amenities.map(amenity => amenity.id);
		let states_ids = list_states.map(state => state.id);
		let cities_ids = list_cities.map(city => city.id);

		let data = {
			amenities: amenities_ids,
			states: states_ids,
			cities: cities_ids
		};

		$.ajax({
			type: 'POST',
			url: 'http://0.0.0.0:5001/api/v1/places_search/',
			contentType: 'application/json',
			data: JSON.stringify(data),
			success: function(data) {
				console.log(data);
			},
			error: function(xhr, status, error) {
				console.error('Error:', error);
			}
		});
	});
});
