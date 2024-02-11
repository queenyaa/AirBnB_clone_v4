$(document).ready(function() {
    $('span#show-hide-reviews').click(function() {
        if ($(this).text() === 'show') {
            // Fetch and display reviews
            $.ajax({
                type: 'GET',
                url: 'http://0.0.0.0:5001/api/v1/reviews',
                dataType: 'json',
                success: function(data) {
                    // Display reviews
                    displayReviews(data);
                    // Change text to "hide"
                    $(this).text('hide');
                },
                error: function(error) {
                    console.error('Error fetching reviews:', error);
                }
            });
        } else {
            // Hide reviews
            $('.review').remove();
            // Change text to "show"
            $(this).text('show');
        }
    });

    // Function to display reviews
    function displayReviews(reviews) {
        reviews.forEach(function(review) {
            var reviewElement = $('<div class="review"></div>');
            reviewElement.append('<p><strong>' + review.author + '</strong>: ' + review.text + '</p>');
            $('body').append(reviewElement);
        });
    }
});
