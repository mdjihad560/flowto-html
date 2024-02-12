"use strict";

(function ($) {
  "use strict";

  /*------------------------------------------------------------------
  [Table of contents]
  FLOWTO PRELOADER JS INIT
  FLOWTO STICKY MENU JS INIT
  FLOWTO COUNTER JS INIT
  FLOWTO BRAND SLIDER ONE
  FLOWTO BRAND SLIDER TWO
  FLOWTO TESTIMONIAL SLIDER ONE
  FLOWTO TESTIMONIAL SLIDER TWO
  FLOWTO TESTIMONIAL SLIDER THREE
  FLOWTO TESTIMONIAL SLIDER FOUR
  FLOWTO MAGNIFIC POPUP JS INIT
  FLOWTO PRICING TABLE JS INIT
  FLOWTO WOW JS INIT
  FLOWTO PORTFOLIO TWO COLUMN JS 
  FLOWTO PORTFOLIO ONE COLUMN JS 
  
  -------------------------------------------------------------------*/

  /*--------------------------------------------------------------
  CUSTOM PRE DEFINE FUNCTION
  ------------------------------------------------------------*/
  /* is_exist() */
  jQuery.fn.is_exist = function () {
    return this.length;
  };
  $(function () {
    /*--------------------------------------------------------------
    FLOWTO PRELOADER JS INIT
    --------------------------------------------------------------*/

    $(".flowto-preloader-wrap").fadeOut(500);

    /*--------------------------------------------------------------
    FLOWTO STICKY MENU JS INIT
    --------------------------------------------------------------*/
    $(window).on('scroll', function () {
      if ($(window).scrollTop() > 50) {
        $('#sticky-menu').addClass('sticky-menu');
      } else {
        $('#sticky-menu').removeClass('sticky-menu');
      }
    });

    /*--------------------------------------------------------------
    FLOWTO COUNTER JS INIT
    --------------------------------------------------------------*/
    var flowto_counter = $('#flowto-counter');
    if (flowto_counter.is_exist()) {
      var a = 0;
      $(window).scroll(function () {
        var oTop = $(flowto_counter).offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
          $('.flowto-counter').each(function () {
            var $this = $(this),
              countTo = $this.attr('data-percentage');
            $({
              countNum: $this.text()
            }).animate({
              countNum: countTo
            }, {
              duration: 4000,
              easing: 'swing',
              step: function step() {
                $this.text(Math.floor(this.countNum));
              },
              complete: function complete() {
                $this.text(this.countNum);
              }
            });
          });
          a = 1;
        }
      });
    }

    /*--------------------------------------------------------------
    FLOWTO BRAND SLIDER ONE
    --------------------------------------------------------------*/
    var flowto_brand_slider1 = $('.flowto-brand-slider1');
    if (flowto_brand_slider1.is_exist()) {
      flowto_brand_slider1.slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 10000,
        cssEase: 'linear',
        pauseOnHover: true,
        adaptiveHeight: true,
        responsive: [{
          breakpoint: 991,
          settings: {
            slidesToShow: 3
          }
        }, {
          breakpoint: 767,
          settings: {
            slidesToShow: 2
          }
        }]
      });
    }

    /*--------------------------------------------------------------
    FLOWTO BRAND SLIDER TWO
    --------------------------------------------------------------*/
    var flowto_brand_slider2 = $('.flowto-brand-slider2');
    if (flowto_brand_slider2.is_exist()) {
      flowto_brand_slider2.slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 10000,
        cssEase: 'linear',
        pauseOnHover: true,
        adaptiveHeight: true,
        responsive: [{
          breakpoint: 991,
          settings: {
            slidesToShow: 3
          }
        }, {
          breakpoint: 767,
          settings: {
            slidesToShow: 2
          }
        }]
      });
    }

    /*--------------------------------------------------------------
    FLOWTO TESTIMONIAL SLIDER
    --------------------------------------------------------------*/

    var flowto_t_slider = $('.flowto-testimonial-slider');
    if (flowto_t_slider.is_exist()) {
      flowto_t_slider.slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 10000,
        cssEase: 'linear',
        pauseOnHover: true,
        adaptiveHeight: true,
        responsive: [{
          breakpoint: 1349,
          settings: {
            slidesToShow: 3
          }
        }, {
          breakpoint: 991,
          settings: {
            slidesToShow: 2
          }
        }, {
          breakpoint: 767,
          settings: {
            slidesToShow: 1
          }
        }]
      });
    }

    /*--------------------------------------------------------------
    FLOWTO TESTIMONIAL SLIDER TWO
    --------------------------------------------------------------*/
    var flowto_t_slider2 = $('.flowto-testimonial-slider2');
    if (flowto_t_slider2.is_exist()) {
      flowto_t_slider2.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: false
      });
    }

    /*--------------------------------------------------------------
    FLOWTO TESTIMONIAL SLIDER THREE
    --------------------------------------------------------------*/
    var flowto_t_slider3 = $('.flowto-testimonial-slider3');
    if (flowto_t_slider3.is_exist()) {
      flowto_t_slider3.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        autoplay: false,
        prevArrow: '<button class="slide-arrow flowto-t-next"></button>',
        nextArrow: '<button class="slide-arrow flowto-t-prev"></button>'
      });
    }

    /*--------------------------------------------------------------
    FLOWTO TESTIMONIAL SLIDER FOUR
    --------------------------------------------------------------*/
    var flowto_t_slider4 = $('.flowto-testimonial-slider4');
    if (flowto_t_slider4.is_exist()) {
      flowto_t_slider4.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        autoplay: false,
        prevArrow: '<button class="slide-arrow flowto-t-next2"></button>',
        nextArrow: '<button class="slide-arrow flowto-t-prev2"></button>'
      });
    }

    /*--------------------------------------------------------------
    FLOWTO MAGNIFIC POPUP JS INIT
    ------------------------------------------------------------*/
    var popup_youtube = $('.video-init');
    if (popup_youtube.is_exist()) {
      popup_youtube.magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade'
      });
    }

    /*--------------------------------------------------------------
    FLOWTO PRICING TABLE JS INIT
    ------------------------------------------------------------*/
    // Table BTN Trigger
    $("#l5-pricing-btn .toggle-btn").on("click", function (e) {
      console.log($(e.target).parent().parent().hasClass("monthly-active"));
      $(e.target).toggleClass("clicked");
      if ($(e.target).parent().parent().hasClass("monthly-active")) {
        $(e.target).parent().parent().removeClass("monthly-active").addClass("yearly-active");
      } else {
        $(e.target).parent().parent().removeClass("yearly-active").addClass("monthly-active");
      }
    });
    $("[data-pricing-trigger]").on("click", function (e) {
      $(e.target).addClass("active").siblings().removeClass("active");
      var target = $(e.target).attr("data-target");
      console.log($(target).attr("data-value-active") == "monthly");
      if ($(target).attr("data-value-active") == "monthly") {
        $(target).attr("data-value-active", "yearly");
      } else {
        $(target).attr("data-value-active", "monthly");
      }
    });
  }); /*End document ready*/

  $(window).on("resize", function () {}); // end window resize

  /*--------------------------------------------------------------
  FLOWTO WOW JS INIT
  ------------------------------------------------------------*/

  $(window).on("load", function () {
    var wow = new WOW({
      mobile: false,
      // default
      tablet: false
    });
    wow.init();

    /*--------------------------------------------------------------
    FLOWTO PORTFOLIO TWO COLUMN JS 
    ------------------------------------------------------------*/
    var flowto_portfolio_two_column = $('#flowto-two-column');
    if (flowto_portfolio_two_column.is_exist()) {
      var $container = $(flowto_portfolio_two_column),
        colWidth = function colWidth() {
          var w = $container.width(),
            columnNum = 1,
            columnWidth = 0;
          if (w > 1200) {
            columnNum = 2;
          } else if (w > 900) {
            columnNum = 2;
          } else if (w > 600) {
            columnNum = 1;
          } else if (w > 450) {
            columnNum = 1;
          } else if (w > 385) {
            columnNum = 1;
          }
          columnWidth = Math.floor(w / columnNum);
          $container.find('.collection-grid-item').each(function () {
            var $item = $(this),
              multiplier_w = $item.attr('class').match(/collection-grid-item-w(\d)/),
              multiplier_h = $item.attr('class').match(/collection-grid-item-h(\d)/),
              width = multiplier_w ? columnWidth * multiplier_w[1] : columnWidth,
              height = multiplier_h ? columnWidth * multiplier_h[1] * 0.4 - 12 : columnWidth * 0.5;
            $item.css({
              width: width
              //height: height
            });
          });

          return columnWidth;
        },
        isotope = function isotope() {
          $container.isotope({
            resizable: false,
            itemSelector: '.collection-grid-item',
            masonry: {
              columnWidth: colWidth(),
              gutterWidth: 0
            }
          });
        };
      isotope();
      $(window).resize(isotope);
      var $optionSets = $('.flowto-portfolio-menu .option-set'),
        $optionLinks = $optionSets.find('li');
      $optionLinks.click(function () {
        var $this = $(this);
        var $optionSet = $this.parents('.option-set');
        $optionSet.find('.active').removeClass('active');
        $this.addClass('active');

        // make option object dynamically, i.e. { filter: '.my-filter-class' }
        var options = {},
          key = $optionSet.attr('data-option-key'),
          value = $this.attr('data-option-value');
        // parse 'false' as false boolean
        value = value === 'false' ? false : value;
        options[key] = value;
        if (key === 'layoutMode' && typeof changeLayoutMode === 'function') {
          // changes in layout modes need extra logic
          changeLayoutMode($this, options);
        } else {
          // creativewise, apply new options
          $container.isotope(options);
        }
        return false;
      });
    }

    /*--------------------------------------------------------------
    FLOWTO PORTFOLIO ONE COLUMN JS 
    ------------------------------------------------------------*/
    var flowto_portfolio_one_column = $('#flowto-one-column');
    if (flowto_portfolio_one_column.is_exist()) {
      var $container = $(flowto_portfolio_one_column),
        colWidth = function colWidth() {
          var w = $container.width(),
            columnNum = 1,
            columnWidth = 0;
          if (w > 1200) {
            columnNum = 1;
          } else if (w > 900) {
            columnNum = 1;
          } else if (w > 600) {
            columnNum = 1;
          } else if (w > 450) {
            columnNum = 1;
          } else if (w > 385) {
            columnNum = 1;
          }
          columnWidth = Math.floor(w / columnNum);
          $container.find('.collection-grid-item').each(function () {
            var $item = $(this),
              multiplier_w = $item.attr('class').match(/collection-grid-item-w(\d)/),
              multiplier_h = $item.attr('class').match(/collection-grid-item-h(\d)/),
              width = multiplier_w ? columnWidth * multiplier_w[1] : columnWidth,
              height = multiplier_h ? columnWidth * multiplier_h[1] * 0.4 - 12 : columnWidth * 0.5;
            $item.css({
              width: width
              //height: height
            });
          });

          return columnWidth;
        },
        isotope = function isotope() {
          $container.isotope({
            resizable: false,
            itemSelector: '.collection-grid-item',
            masonry: {
              columnWidth: colWidth(),
              gutterWidth: 0
            }
          });
        };
      isotope();
      $(window).resize(isotope);
      var $optionSets = $('.flowto-portfolio-menu .option-set'),
        $optionLinks = $optionSets.find('li');
      $optionLinks.click(function () {
        var $this = $(this);
        var $optionSet = $this.parents('.option-set');
        $optionSet.find('.active').removeClass('active');
        $this.addClass('active');

        // make option object dynamically, i.e. { filter: '.my-filter-class' }
        var options = {},
          key = $optionSet.attr('data-option-key'),
          value = $this.attr('data-option-value');
        // parse 'false' as false boolean
        value = value === 'false' ? false : value;
        options[key] = value;
        if (key === 'layoutMode' && typeof changeLayoutMode === 'function') {
          // changes in layout modes need extra logic
          changeLayoutMode($this, options);
        } else {
          // creativewise, apply new options
          $container.isotope(options);
        }
        return false;
      });
    }
  }); // End window LODE
})(jQuery);