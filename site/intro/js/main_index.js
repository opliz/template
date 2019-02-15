// PROUDLY CODED BY LORENZO BOCCHI

// LOAD	
$(window).load(function() {
		$("#qLoverlay").animate({ opacity: "1"}, 50, function () {
		});
	});

// READY	
$(document).ready(function () {
	$("body").queryLoader2({
		backgroundColor: "#1F2025",
		barColor: "#fff",
		percentage: false,
		deepSearch: true,
		barHeight: 2,
		minimumTime: 1000,
		fadeOutTime: 0,
		completeAnimation: "fade",	
				
	    onComplete: function(){
			
		$("#cover").delay(500).addClass('animated fadeOutRightBig').animate({ opacity: "0"}, 50, function () {
			$("#logo1").delay(1000).addClass('animated fadeInUp').animate({ opacity: "0"}, 50, function () {			
				$("#division_container1").delay(250).addClass('animated fadeInUp').animate({ opacity: "0"}, 50, function () {			
				$("#division_container2").delay(250).addClass('animated fadeInUp').animate({ opacity: "0"}, 50, function () {			
				$("#division_container3").delay(1200).addClass('animated fadeInUp').animate({ opacity: "0"}, 50, function () {			
					$("#loading").delay(500).addClass('animated fadeOutRightBig').animate({ opacity: "0"}, 50, function () {
						$("#dark_bar").delay(250).addClass('animated fadeInUp').animate({ opacity: "0"}, 50, function () {
							var addClassToEl = function($el) {
								$el.addClass('animated flipInY');
							};
							$('.block').each(function(i, el) {
								setTimeout(function() {addClassToEl($(el))}, i++ * 250);

							});	
							$(".block").delay(2000).animate({ opacity: "0"}, 50, function () {
								$("#awwwards").delay(250).addClass('animated fadeIn').animate({ opacity: "1"}, 50, function () {
								$("#csswinner").addClass('animated fadeIn').animate({ opacity: "1"}, 50, function () {
								});			
								});
							});
						});			
					});			
				});				
				});			
				});			
			});			
		});			

	}
});
	
	// HAMBURGER CROSS
	if ($('.si-icon-hamburger-cross').length > 0) {
		(function() {
			[].slice.call( document.querySelectorAll( '.si-icons-default > .si-icon' ) ).forEach( function( el ) {
				var svgicon = new svgIcon( el, svgIconConfig );
			} );
			new svgIcon( document.querySelector( '.si-icons-easing .si-icon-hamburger-cross' ), svgIconConfig, { easing : mina.elastic, speed: 600 } );
		})();
	}

	$(function() {
		$(window).resize(function() {
			$('.block, #dark_bar, #dark_bar_container').height($(window).height() - $('div:block').offset().top);
		});
		$(window).resize();
	});
	
	// SCROLL CONVERTER
	if (($('#container_shooting').length > 0 || $('#container_design').length > 0) && $('.si-icon-hamburger-cross').length > 0) {
		console.log('asdf');
		if (document.documentElement.clientWidth > 900) {
			var mouseWheelEvt = function (e) {
				var event = e || window.event;
				if (document.body.doScroll) {
					document.body.doScroll(event.wheelDelta > 0 ? "left" : "right");
				} else if ((event.wheelDelta || event.detail) > 0) {
					document.body.scrollLeft -= 40;
				} else {
					document.body.scrollLeft += 40;
				}
				return false;
			};
	
			if ("onmousewheel" in document.body) {
				document.body.onmousewheel = mouseWheelEvt;
			} else {
				document.body.addEventListener("DOMMouseScroll", mouseWheelEvt);
			}
		}
	}

	// BLOCK ANIMATION
	$(".block").mouseenter(function() {
		$(this).find("#baloon .circle").stop().transition({scale: 1.35},250, "easeOutSine");
		$(this).find(".block_filter").stop().fadeTo(120, 0); 
	 }).mouseleave(function() {
		$(this).find("#baloon .circle").stop().transition({scale: 1.0},150, "easeOutSine");
		$(this).find(".block_filter").stop().fadeTo(120, 0.85); 
	 });	

	// SOCIAL
	$(".facebook, .twitter, .behance, .pics, .linkedin").mouseenter(function() {
		$(this).stop().transition({y:'-7px'},120, "easeOutSine");
	}).mouseleave(function() {
		$(this).stop().transition({y:'0px'},200, "easeOutSine");
	});		
	
	// SIDEBAR		
	$('.si-icons').click(function() {
		$(this).toggleClass('close');
		if($(this).hasClass('close')) {
			$('#dark_bar').animate({ "margin-left": 0 }, 300, "easeOutCubic");
			$('.si-icons').animate({ "margin-left": 132 }, 300, "easeOutCubic");
			$('#container_design').css({"width": "3420px"});
			$('#container_shooting').css({"width": "4100px"});
			$('#container_code').css({"width": "3420px"});
			$('#container_maps').animate({"margin-left": "360px"}, 300, "easeOutCubic");
			$('#container_me').animate({"margin-left": "360px"}, 300, "easeOutCubic");
			$("#dark_bar_container_logo").delay().addClass('animated bounceIn');
			$("#dark_bar_container_menu").delay().addClass('animated bounceIn');
			$("#dark_bar_container_submenu").delay().addClass('animated bounceIn');
			$("#dark_bar_container_social").delay().addClass('animated bounceIn');
			$("#dark_bar_container_line").delay().addClass('animated bounceIn');
		} else {
			$('#dark_bar').animate({ "margin-left": -280 }, 300, "easeOutCubic");
			$('.si-icons').animate({ "margin-left": 272}, 300, "easeOutCubic");
			$('#container_design').css({"width": "3140px"});
			$('#container_shooting').css({"width": "3820px"});
			$('#container_code').css({"width": "3140px"});
			$('#container_maps').animate({"margin-left": "80px"}, 300, "easeOutCubic");
			$('#container_me').animate({"margin-left": "80px"}, 300, "easeOutCubic");
		}
	});

	// SIDEBAR MOBILE
	$("#open_mobile").click(function() {
		$('#dark_bar_mobile').animate({ "margin-top": 0 }, 300, "easeOutCubic");
		$('#dark_bar_container_logo_mobile').animate({ "bottom": -30 }, 300, "easeOutCubic");
		$('#open_mobile').fadeOut(150);
		$("#dark_bar_container_menu_mobile").fadeIn();
		$("#dark_bar_container_submenu_mobile").fadeIn();
		$("#dark_bar_container_social_mobile").fadeIn();
		$("#dark_bar_container_line_mobile").fadeIn();
	});

	$("#close_mobile").click(function() {
		$('#dark_bar_mobile').animate({ "margin-top": -420 }, 300, "easeOutCubic");
		$('#dark_bar_container_logo_mobile').animate({ "bottom": -450 }, 300, "easeOutCubic");
		$('#open_mobile').fadeIn();
		$("#dark_bar_container_menu_mobile").fadeOut();
		$("#dark_bar_container_submenu_mobile").fadeOut();
		$("#dark_bar_container_social_mobile").fadeOut();
		$("#dark_bar_container_line_mobile").fadeOut();
	});	

	// WOW
		wow = new WOW(
		  {
			boxClass: 'wow',
			animateClass: 'animated',
			offset: 250,
			mobile: false,
			}
		)
		wow.init();
	});

//LAZY LOAD
$(function() {
	$("img.lazy").lazyload({
   		threshold : 600,
	});
});

// REFRESH – CHANGE ORIENTATION
window.onorientationchange = function() {
   window.location.reload();
};