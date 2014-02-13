$(document).ready(function() {
	// $('a').removeClass("test");
	$('a').click(function(event) {
			event.preventDefault();
			$(this).hide("slow");
			// alert( "As you can see, the link no longer took you to jquery.com");
	});
});