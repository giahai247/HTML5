$(document).ready(function(){
	
	$(".next").click(function(){next()});
	$(".pre").click(function(){pre()});
	
	$("#slider ul li img").click(function() {
        $(".box-model").slideDown(1000);
        $(".img-model img").attr("src", $(this).attr("src"));

    })
    $(".box-model span").click(function() {
        $('.box-model').slideUp();
    })
	
});