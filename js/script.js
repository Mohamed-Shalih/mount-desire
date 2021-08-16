
// Wow Ignite & Pre-Loader
$(window).on("load", function () {
  $(".preloader").fadeOut(1000);
  new WOW({ mobile: false }).init();
});

$(document).ready(function() {

  // Home Carousel
  $("#owl-demo").owlCarousel({
      loop: true,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      margin: 0,
      nav: false,
      autoplay: 6000,
      loop:true,
      responsive : {
          0 : {
              items : 1,  
          },
          480 : {
              items : 1,
          },
          768 : {
              items : 1, 
          }
      }
  });

  // services carousel


  // Project Area Selection
  let $btns = $('.project-area .button-group button');

  $btns.click(function(e){
      $('.project-area .button-group button').removeClass('active');
      e.target.classList.add('active');
      let selector = $(e.target).attr('data-filter');
      $('.project-area .grid').isotope({
          filter:selector
      });
      return false
  });

  $('.project-area .button-group #btn1').trigger('click');
});

// Navbar Onscroll View
var nav = document.querySelector('nav');
          
window.addEventListener('scroll', function () {
  if (window.pageYOffset > 100) {
    nav.classList.add('bg-light', 'shadow');
  } else{
    nav.classList.remove('bg-light', 'shadow');
  }
});