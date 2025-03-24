(function($) {
	"use strict";
	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });

	var fullHeight = function() {
		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});
	};
	fullHeight();

	var loader = function() {
		setTimeout(function() { 
			if($('#loader').length > 0) {
				$('#loader').removeClass('show');
			}
		}, 1);
	};
	loader();

   $.Scrollax();

	var carousel = function() {
		$('.home-slider').owlCarousel({
	    loop:true,
	    autoplay: true,
	    margin:0,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:true,
	    dots: true,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='ion-ios-arrow-back'></span>","<span class='ion-ios-arrow-forward'></span>"],
	    responsive:{
	      0:{
	        items:1
	      },
	      600:{
	        items:1
	      },
	      1000:{
	        items:1
	      }
	    }
		});
		$('.carousel-testimony').owlCarousel({
			center: true,
			loop: true,
			items:1,
			margin: 30,
			stagePadding: 0,
			nav: false,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 2
				},
				1000:{
					items: 3
				}
			}
		});
	};
	carousel();

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			$this.find('.dropdown-menu').removeClass('show');
	});

	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.main_navbar'),
					sd = $('.js-scroll-wrap');
			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	var counter = function() {
		$('#section-counter, .hero-section, .ftco-counter').waypoint( function( direction ) {
			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
			}
		} , { offset: '95%' } );
	}
	counter();

	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {
			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				i++;
				$(this.element).addClass('item-animate');
				setTimeout(function(){
					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
				}, 100);
			}
		} , { offset: '95%' } );
	};
	contentWayPoint();

	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom',
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1]
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });

})(jQuery);

(function(d){var r=function(b){return b.split("").reverse().join("")},
m={numberStep:function(b,a){var e=Math.floor(b);
	d(a.elem).text(e)}},g=function(b){var a=b.elem;
		a.nodeType&&a.parentNode&&(a=a._animateNumberSetter,a||(a=m.numberStep),
		a(b.now,b))};
		d.Tween&&d.Tween.propHooks?d.Tween.propHooks.number={set:g}:d.fx.step.number=g;
		d.animateNumber={numberStepFactories:{append:function(b){return function(a,e){var f=Math.floor(a);
			d(e.elem).prop("number",a).text(f+b)}},
			separator:function(b,a,e){b=b||" ";
	a=a||3;
	e=e||"";
	return function(f,k){var u=0>f,
		c=Math.floor((u?-1:1)*f).toString(),
		n=d(k.elem);
		if(c.length>a){for(var h=c,l=a,m=h.split("").reverse(),
			c=[],p,s,q,t=0,
			g=Math.ceil(h.length/l);
			t<g;
			t++){p="";
				for(q=0;q<l;q++){s=t*l+q;
					if(s===h.length)break;p+=m[s]}c.push(p)}h=c.length-1;
					l=r(c[h]);c[h]=r(parseInt(l,10).toString());
					c=c.join(b);c=r(c)}n.prop("number",f).text((u?"-":"")+c+e)}}}};
					d.fn.animateNumber=function(){for(var b=arguments[0],
						a=d.extend({},m,b),e=d(this),
						f=[a],k=1,g=arguments.length;
						k<g;k++)f.push(arguments[k]);
	if(b.numberStep){var c=this.each(function(){this._animateNumberSetter=b.numberStep}),
	n=a.complete;a.complete=function(){c.each(function(){delete this._animateNumberSetter});
	n&&n.apply(this,arguments)}}return e.animate.apply(e,f)}})(jQuery);
	