// Jquery with no conflict
jQuery(document).ready(function($) {
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
	$("#tweets").tweet({
        count: 2,
        username: "ericoverfield"
    });
	
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


$(function() {
   BindTopNav();
});
function BindTopNav() {
   /*grab top nav SP generated list*/
   var u = $('#topnav ul.root');
   if (u.length > 0) {
      /*loop through every nav item that has dynamic children*/
      u.find('a.dynamic-children').each(function() {
         /*get current link parent li and first child span*/
         var l = $(this).parent('li');
         var s = $(this).children('span').eq(0);
         /*override parent li hover event to show dropdown*/
         l.hover(
            function () {HoverTopNav($, $(this),'');},
            function () {HoverTopNav($, $(this),'o');}
         );
         /*trap link click*/
         $(this).bind('click',function(e) {
            /*do math to determine if click was the link text, or the dropdown arrow*/
            var w = $(this).outerWidth(true);
            var s = $(this).children('span').eq(0);
            var rs = parseInt($(this).css("padding-right")) + parseInt($(this).css("margin-right")) + 
                  parseInt(s.css("padding-right")) + parseInt(s.css("margin-right"));
            var x = e.pageX - $(this).offset().left;
            if (x > (w-rs))
               DropTopNav($, $(this));
            else
               return true;
            return false;
         });
         /*need to trap link span too for some browsers*/
         s.bind('click',function(e) {
            /*do similar math to determine if click was link text or arrow*/
            var w = $(this).outerWidth(true);
            var rs = parseInt($(this).css("padding-right")) + parseInt($(this).css("margin-right"));
            var x = e.pageX - $(this).offset().left;
            if (x > (w-rs))
               DropTopNav($, $(this).parent('a').eq(0));
            else
               window.location.href = $(this).parent('a').eq(0).attr('href');
            return false;
         });
      });
   }
}

/*triggered when a nav link is hovered*/
function HoverTopNav($, l, a) {
   if (l.length > 0) {
      var m = $('.navbar .btn-navbar-close');
      if (m.length > 0) {
         /*only down dropdown on hover if not mobile nav view*/
         if (m.css('display') != 'inline-block')
            DropTopNav($, l.children('a.dynamic-children').eq(0), a);
      }
   }
} 

/*triggered when a nav link is clicked*/
function DropTopNav($, l, a) {
   if (l.length > 0) {
      var u = l.siblings('ul').eq(0);
      if (u.length > 0) {
         /*if the sub menu is hidden, then show or visa-versa*/
         if (l.hasClass('selected') || (a=='o')) {
            u.css('display','none');
            l.removeClass('selected');
            u.find('ul.dynamic').css('display','none');
            u.find('a.dynamic-children').removeClass('selected');
         }
         else {
            u.css('display','block');
            l.addClass('selected');
         }
      }
   }
}
