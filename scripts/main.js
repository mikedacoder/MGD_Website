// JavaScript Document
$(document).ready(function ($) {			
	
	// Highlights the current menu page.
	$('.menu a').each(function(index) {
        if(this.href.trim() == window.location)
            $(this).css("color", "#EDE7BE");
    });
	
	// Toggle to show and hide the hamburger menu in mobile.
	$(".burgerBtn").click(function(){
        $(".mobileNav").toggle();
    });		
	
	// Slider for Graphic Design page.
	$('.gdslider').bxSlider({
		responsive: true,			  
		adaptiveHeight: true,
		mode: 'horizontal',
		auto: true,
		autoControls: true,
		randomStart: true,
		touchEnabled: true,
		oneToOneTouch: true,
		autoHover: true,
		slideWidth: 600,
		pager: false
	});	
	
	// Slider for Web Design page.
	$('.wdslider').bxSlider({
		responsive: true,			  
		adaptiveHeight: true,
		mode: 'horizontal',
		auto: true,
		autoControls: true,
		randomStart: true,
		touchEnabled: true,
		oneToOneTouch: true,
		autoHover: true,
		slideWidth: 600,
		pager: false
	});	
});