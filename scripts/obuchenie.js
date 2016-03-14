$( document ).ready(function() {
  $(".urok li").click(function() {
  	$(".urok li").removeClass( "aktiv" );
  	$(this).addClass( "aktiv" );
  	// var parent = $(this).attr('class').parent();
  	// parent.removeClass("skrito");
  	// var href = $(this).attr('href');
  	// $('a[name=href]').removeClass("skrito");
    });
});