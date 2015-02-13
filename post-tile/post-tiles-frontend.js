jQuery(document).ready(function($){

	// If jQuery is turned on in the admin panel then it add's a fade in effect.
	$('#category-key').fadeTo('slow', 1.0);
	// Fade in each li one after another
	$('ul#post-tiles li').each(function(index) {
	    $(this).delay(200*index).fadeTo('slow', 1.0);
	});

	// This used the category key to accent selected category
    $('#category-key a').not('#category-all').click(function() {
    	// Get category's id which is the cateogyr name
    	var categoryClass = '.'+$(this).attr('id');
    	// Target all those posts except with matching category id and fade
    	$('ul#post-tiles li').not(categoryClass).fadeTo('slow', 0.3);
    	// Remove the previous selected category id
    	$('.post-tile-selected').removeClass('post-tile-selected');
    	// Fade in the current selected category
    	$('li.'+categoryClass).fadeTo('fast', 1.0);
    	// Add the active class to the category key
    	$('li.'+categoryClass).addClass('post-tile-selected');
    	// Disbale the anchor
    	return false;
    });

    // This returns all category types to accent when all is clicked
    $('#category-all').click(function() {
    	$('ul#post-tiles li').fadeTo('fast', 1.0);
    	return false;
    });

    // Animate Up
	    // Action when mouse enter of featured image
	    $('li.featured-image.up').mouseenter(function() {
	    	$(this).children('a').animate({
	    	    top: '0%'
	    	  }, 500 );
	    });

	    // Action when mouse leave of featured image
	    $('li.featured-image.up').mouseleave(function() {
	    	$(this).children('a').animate({
	    	    top: '100%'
	    	  }, 500 );
	    });

	// Animate Down
		// Action when mouse enter of featured image
		$('li.featured-image.down').mouseenter(function() {
			$(this).children('a').animate({
			    bottom: '0%'
			  }, 500 );
		});

		// Action when mouse leave of featured image
		$('li.featured-image.down').mouseleave(function() {
			$(this).children('a').animate({
			    bottom: '105%'
			  }, 500 );
		});
	// Animate Down
		// Action when mouse enter of featured image
		$('li.featured-image.left').mouseenter(function() {
			$(this).children('a').animate({
			    right: '0%'
			  }, 500 );
		});

		// Action when mouse leave of featured image
		$('li.featured-image.left').mouseleave(function() {
			$(this).children('a').animate({
			    right: '105%'
			  }, 500 );
		});
	// Animate Down
		// Action when mouse enter of featured image
		$('li.featured-image.right').mouseenter(function() {
			$(this).children('a').animate({
			    left: '0%'
			  }, 500 );
		});

		// Action when mouse leave of featured image
		$('li.featured-image.right').mouseleave(function() {
			$(this).children('a').animate({
			    left: '105%'
			  }, 500 );
		});
	// Animate Down
		$('li.fade a').fadeToggle();
		// Action when mouse enter of featured image
		$('li.fade').mouseenter(function() {
			$(this).children('a').css({left: '0%'});
			$(this).children('a').fadeToggle();
		});

		// Action when mouse leave of featured image
		$('li.fade').live('mouseleave', function(){
			$(this).children('a').fadeToggle(function() {
				$(this).children('a').css({left: '105%'});
			});
		});

});


/*---------------------------------*/
// New Responsive Grid
jQuery(document).ready(function() {
	// Check if the tiles are responsive
	if ($('.responsive').length) {

		// Optimalisation: Store the references outside the event handler:
		var $tilesWrapper = $('.responsive');

		function checkWidth() {
				// Get the width
				var wrapperSize = $tilesWrapper.width();
				// Screen width based on Zurb Foundation native grid breakpoints
				if (wrapperSize > 700) {
					// Grid of 4 Tiles
					// Remove the padding width
					var adjustedWidth = wrapperSize -30;
					var tileDimentions = Math.floor(adjustedWidth / 4);

					$tilesWrapper.addClass('tiles-large').removeClass('tiles-medium').removeClass('tiles-small');
				} else if (wrapperSize > 400 && wrapperSize < 699) {
					// Grid of 2
					var adjustedWidth = wrapperSize -10;
					var tileDimentions = Math.floor(adjustedWidth / 2);
					$tilesWrapper.addClass('tiles-medium').removeClass('tiles-large').removeClass('tiles-small');
				} else {
					// Grid of 1
					var tileDimentions = wrapperSize;
					$tilesWrapper.addClass('tiles-small').removeClass('tiles-large').removeClass('tiles-medium');
				}
				$tilesWrapper.find('li').width(tileDimentions).height(tileDimentions);
		}
		// Execute on load
		checkWidth();
		// Bind event listener
		$(window).resize(checkWidth);
	}
});
/*---------------------------------*/
