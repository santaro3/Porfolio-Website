/* $( window ).on( "load", function() {
 	$(".top-header").addClass("load");
});
*/


  $( window ).on( "load", function() {
    $("#fade-content").delay(1000).fadeIn(1500, function() {
        $(this).delay(3000).fadeOut(500, function () {
        	$(".content").addClass("load");
        	$(".navbar").addClass("load-nav");
        });
    });

});