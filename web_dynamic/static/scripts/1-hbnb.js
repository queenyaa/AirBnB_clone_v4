$(document).ready(function() {
    // Initialize an empty array to store Amenity IDs
    var selectedAmenities = [];

    // Listen for changes on each input checkbox tag
    $('input[type="checkbox"]').change(function() {
        var amenityId = $(this).data('id');
        var amenityName = $(this).data('name');

        if ($(this).is(':checked')) {
            // if the checkbox is checked, add Amenity ID to the array
            selectedAmenities.push(amenityId);
        } else {
            // If the checkbox is unchecked, remove Amenity Id from array
            var index = selectedAmenities.indexOf(amenityId);
            if (index !== -1) {
                selectedAmenities.splice(index, 1);
            }
        }
        // Update of the h4 tag inside the Amenities with the list checked
        $('div.Amenities h4').text(selectedAmenities.join(', '));
    });
});
