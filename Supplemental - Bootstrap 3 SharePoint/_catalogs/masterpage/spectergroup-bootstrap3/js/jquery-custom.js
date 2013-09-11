// Jquery with no conflict
jQuery(document).ready(function($) {
	// Superfish
	$(".nav > ul.root").superfish({ 
        animation: {height:'show'},   // slide-down effect without fade-in 
        delay:     800 ,              // 1.2 second delay on mouseout 
        autoArrows:  false,
        speed: 100
    });
	
	//social
	$('header .social a.social-toggle').click(function() {
		if ($('header .social').hasClass('down')) $('header .social').removeClass('down');
		else $('header .social').addClass('down');
	});
	// Slider http://nivo.dev7studios.com/support/jquery-plugin-usage/
	$('#hpslider').nivoSlider({
		effect: 'slideInLeft', // Specify sets like: 'random,fold,fade,sliceDown'
		animSpeed: 500, // Slide transition speed
        pauseTime: 10000, // How long each slide will show
        startSlide: 0, // Set starting Slide (0 index)
		slices: 1, // For slice animations
        boxCols: 1, // For box animations
        boxRows: 1, // For box animations
        controlNav: true, // 1,2,3... navigation
		afterLoad: function(){
			jQuery(".nivo-caption").animate({right:"0"}, {easing:"easeOutBack", duration: 500});
		},
		beforeChange: function(){
			jQuery(".nivo-caption").animate({right:"-500"}, {easing:"easeInBack", duration: 500});
		},
		afterChange: function(){
			jQuery(".nivo-caption").animate({right:"0"}, {easing:"easeOutBack", duration: 500});
		}
	});
	
	/* custom thumbnail caption hover animation*/
	$('.thumbcaption').hover(function() {$(this).children('span').animate({bottom:"0"}, {easing:"easeInOutCubic", duration: 500});},
		function() {$(this).children('span').animate({bottom:"-100"}, {easing:"easeInOutCubic", duration: 500});});

	// Slider - property
	$('#slider-property').nivoSlider({
		effect: 'slideInLeft', // Specify sets like: 'fold,fade,sliceDown'
		animSpeed: 500, // Slide transition speed
		pauseTime: 3000, // How long each slide will show
		startSlide: 0, // Set starting Slide (0 index)
		controlNav: true // 1,2,3... navigation
	});

	// Isotope Communities
	var $container = $('#filter-container');
	$container.imagesLoaded( function(){
		$container.isotope({
			itemSelector : 'li',
			filter: '*',
			resizable: false,
			animationEngine: 'jquery'			  
		});
	});
	// filter buttons
	$('#filter-buttons a').click(function(){
		// select current
		var $optionSet = $(this).parents('#filter-buttons');
	    $optionSet.find('.selected').removeClass('selected');
	    $(this).addClass('selected');
    	var selector = $(this).attr('data-filter');
		$container.isotope({ filter: selector });
		return false;
	});
	
	// Tweet feed
	/*
	$("#tweets").tweet({
        count: 2,
        username: "ericoverfield"
    });
	*/
	
	//accordion
	$('.accordion-wrapper').each(function() {
		$(this).children('.accordion-container').hide(); 
		$(this).children('.accordion-trigger').eq(0).addClass('active').next().show();
		$(this).children('.accordion-trigger').click(function(){
			if( $(this).next().is(':hidden') ) { 
				$(this).siblings('.accordion-trigger').removeClass('active').next().slideUp();
				$(this).toggleClass('active').next().slideDown();
			}
			return false;
		});
	});
	
	// Toggle box
    $('.toggle-trigger').click(function() {
		$(this).next().toggle('slow');
		$(this).toggleClass("active");
		return false;
	}).next().hide();
	
	// Tabs
	$(".tabs").tabs("div.panes > div", {effect: 'fade'});

	// Tool tips
	$('.poshytip').poshytip({
		className: 'tip-yellow',
		showTimeout: 1,
		alignTo: 'target',
		alignX: 'center',
		offsetY: 5,
		allowTipHover: false
	});
	$('.form-poshytip').poshytip({
		className: 'tip-yellow',
		showOn: 'focus',
		alignTo: 'target',
		alignX: 'right',
		alignY: 'center',
		offsetX: 5
	});
});

jQuery(document).ready(function($) {
	BindTopNav($);
});
function BindTopNav($) {
	/*grab top nav SP generated list*/
	var u = $('#topnav ul.root');
	if (u.length > 0) {
		/*loop through every nav item that has dynamic children*/
		u.find('li.dynamic-children').each(function() {
			/*get li's menu item, either a or span*/
			var a = $(this).children('.menu-item');
			var s = a.children('span').eq(0);
			var t = s.children('span.menu-item-text').eq(0);
			/*override parent li hover event to show dropdown*/
			$(this).hover(
				function () {HoverTopNav($, $(this),'');},
				function () {HoverTopNav($, $(this),'o');}
			);
			if (a.is('span')) {
				a.bind('click',function(e) {
					DropTopNav($, $(this));
					return false;
				});
				s.bind('click',function(e) {
					DropTopNav($, $(this).parent());
					return false;
				});
			}
			else {
				a.bind('click',function(e) {
					//if click occured inside of a text span, then redirect
					if (((e.pageX >= t.offset().left) && (e.pageX <= (t.offset().left + t.outerWidth(true)))) && 
						((e.pageY >= t.offset().top) && (e.pageY <= (t.offset().top + t.outerHeight(true))))) {
						return true;
					}
					else
						DropTopNav($, $(this).eq(0));
					return false;
				});
				/*need to trap link span too for some browsers*/
				s.bind('click',function(e) {
					//if click occured inside of a text span, then redirect
					if (((e.pageX >= t.offset().left) && (e.pageX <= (t.offset().left + t.outerWidth(true)))) && 
						((e.pageY >= t.offset().top) && (e.pageY <= (t.offset().top + t.outerHeight(true))))) {
						window.location.href = $(this).parent('a').eq(0).attr('href');						
					}
					else
						DropTopNav($, $(this).parent('a').eq(0));
					return false;
				});

			}
		});
	}
}

/*triggered when a nav link is hovered*/
/*l = the li that has been hovered*/
function HoverTopNav($, l, a) {
   if (l.length > 0) {
      var m = $('.navbar-toggle');
      if (m.length > 0) {
         /*only down dropdown on hover if not mobile nav view*/
         if (m.css('display') == 'none')
            DropTopNav($, l.children('.menu-item').eq(0), a);
      }
   }
} 

/*triggered when a nav link is clicked*/
/*l = the .menu-item, either an anchor or span(header)*/
function DropTopNav($, l, a) {
	if (l.length > 0) {
		var u = l.siblings('ul').eq(0);
		var p = l.parent();
		if (u.length > 0) {
			/*if the sub menu is hidden, then show or visa-versa*/
			if (p.hasClass('shown') || (a=='o')) {
				p.removeClass('shown');
			}
			else {
				p.addClass('shown');
			}
		}
	}
}