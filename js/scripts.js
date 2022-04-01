$(document).ready(function() {
  //Scroll animation  
  AOS.init({offset:0, duration:1000, delay:200});

  //Scrollbar
  $(".scrollbar").mCustomScrollbar();

  //Bar slider
  $('.owl-carousel').owlCarousel({
      autoplay: true,
      autoplayTimeout:3000,
    margin: 10,
    responsiveClass: true,
    dots: true,
    nav: true,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    navText: ["<img src='img/arrow-left.png'  alt='' />","<img src='img/arrow-right.png'  alt='' />"],
    responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        }
    }
  });
});