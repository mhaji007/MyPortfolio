$(document).ready(function(){

	$('#slides').superslides({
		animation:'fade',
		play:5000,
		pagination:false
	});

	var typed = new Typed(".typed", {
		strings: ["Software Engineer.", "Web Developer.", "UI/UX Designer."],
		typeSpeed:70,
		loop:true,
		startDelay:995,
		showCursor: false
	});
});
