function replay (){
	$("#low_button img").fadeOut();
	$("#charging_button img").fadeIn();
	$("body").animate({scrollTop: 990}, '2000');
};

$("#low_button").click(replay);

$("#charging_button").click(replay);

$(window).scroll(function(){
	var scrollPos = $(window).scrollTop();

	if(scrollPos < 600) {
		$("#low_button img").fadeIn();
		$("#charging_button img").fadeOut();
	}
	if(scrollPos > 500) {
		$("#man").animate({
			left: "162px"
		}, 2000);
	}
	if(scrollPos > 520){
		$("#mobile").animate({
			left: "155px"
		}, 2000);
	}
	if(scrollPos > 1500) {
		$("#dog_food img").animate({
			bottom: "35px",
			left: "300px"
		}, 2000);

	};

	console.log(scrollPos);
});


$("#food_button").click(function(){
	$("body").animate({scrollTop: 1550}, '2000');

});


// $(window).scroll(function() {
// 	console.log($(window).scroll());
// 	if($(window).scroll() < 600) {
// 	$("#man").animate({
// 		"left":"-100px"
// 		"right": "100px"
// 	}, 200);

// 	})







// $("#move-box").mouseenter(function(){
// 	//use stop() to avoid double animations
// 	$(this).animate({
//    "top" : "50px", 
//    "left" : "50px"
// 	}, 200);
// });