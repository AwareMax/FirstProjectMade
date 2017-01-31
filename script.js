$(document).ready(function(){
    $( "button" ).bind({
  mouseenter: function() {
    $(this).addClass('highlight')
  },
  mouseleave: function() {
    $(this).removeClass('highlight');
  }

  
});
});
/*$(document).ready(function(){
    $("#toTarget").click(function(){
        $('html, body').animate({
            scrollTop: $("#latestproject").offset().top
        }, 2000);
    });
});
*/
$(document).ready(function(){
    $("li[data-target]").click(function(){
        var targetElement = $("#"+this.getAttribute("data-target"));
        $("html, body").animate({
           scrollTop: targetElement.offset().top
        }, 1000);
    });

    $("p[data-back]").click(function(){
    var targetBack = $("#"+this.getAttribute("data-back"));
	   $('html, body').animate({
		  scrollTop: 0
	}, 2000);
	return false;
});
});



















/*
   bxslider
$(document).ready(function(){
    $(window).scroll(function(){

    });
});

*/

/*

    $('#backTop').click(function() {
	   $('html, body').animate({
		  scrollTop: 0
	}, 700);
	return false;

    */
