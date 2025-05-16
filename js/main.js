// menubar

$(".navbar-toggler").click(function () {
    $(".navbar-collapse").toggleClass("menu-visible");
    $(".menu_overlay").toggleClass("menu-visible");
    $("body").css("overflow", "hidden");
  });
  
  $(".menu_close_btn").click(function () {
    $(".navbar-collapse").removeClass("menu-visible");
    $(".navbar-collapse").removeClass("show");
    $(".menu_overlay").removeClass("menu-visible");
    $("body").css("overflow", "auto");
  });
  
  $(".menu_overlay").click(function () {
    $(".menu_overlay").removeClass("menu-visible");
    $(".navbar-collapse").removeClass("show");
    $(".navbar-collapse").removeClass("menu-visible");
    $("body").css("overflow", "auto");
  });
  
  
  
  $( ".web-header .navbar .navbar-nav li ul" ).find( "li" ) .closest("ul") .parent("li") .addClass( 'dropdown_menu' );
  $(".web-header .navbar .navbar-nav li").click(function(){
    $(this).toggleClass("curent");
    $('.web-header .navbar .navbar-nav li').not($(this)).removeClass('curent');
  });


// counter section

if($('#counter').length) {
var counted = 0;
  $(window).scroll(function () {

    var oTop = $("#counter").offset().top-window.innerHeight;
    if (counted == 0 && $(window).scrollTop() > oTop) {
      $(".counter-value").each(function () {
        var $this = $(this),
          countTo = $this.attr("data-count");
        $({
          countNum: $this.text(),
        }).animate(
          {
            countNum: countTo,
          },

          {
            duration: 1000,
            easing: "swing",
            step: function () {
              $this.text(Math.floor(this.countNum));
            },
            complete: function () {
              $this.text(this.countNum);
              //alert('finished');
            },
          }
        );
      });
      counted = 1;
    }
  });
}

// client say slider

$(function () {
  // Owl Carousel
  var owl = $(".client-say-wrapper");
  owl.owlCarousel({
    items: 3,
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    center: true, 
    margin: 20,   
    responsive: {
      360: {
        items: 1,
        nav: false,
        center: true
      },
      440: {
        items: 1,
        nav: false,
        center: true
      },
      480: {
        items: 1,
        nav: false,
        center: true
      },
      575: {
        items: 2,
        nav: false,
        center: true
      },
      767: {
        items: 2,
        nav: false,
        center: true
      },
      1024: {
        items: 4,
        nav: false,
        center: true
      }
    }
  });
});

// client slider

$(function () {
  // Owl Carousel
  var owl = $(".client-wrapper");
  owl.owlCarousel({
    items: 5,
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 4000,
    // autoplayHoverPause: true
    responsive: {
      360: {
         items: 1,     
      },
      440: {
        items: 2,           
      },
      480: {
         items: 2,         
      },
      575: {
        items: 3,         
      },
      767: { 
         items: 4,     
      },
      1024: { 
        items: 5,   
      }
  }
  });
});

