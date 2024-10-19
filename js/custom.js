$(document).ready(function(){
  $('.logo-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false, // Corrected
    arrows: false,
    infinite: true,
    dots: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: true,
        }
      }
      // Add more breakpoints and settings if needed
    ]
  });
});

$(document).ready(function(){
  var header = $(".header");
  var sticky = header.offset().top;

  $(window).scroll(function() {
    if (window.pageYOffset > sticky) {
      header.addClass("sticky-header");
    } else {
      header.removeClass("sticky-header");
    }
  });
});


$(document).ready(function(){
  $('.navbar-toggler').click(function(){
    $('.navbar-collapse').toggleClass('show');
  });

  // Close button functionality
  $('.close-btn').click(function(){
    $('.navbar-collapse').removeClass('show');
  });

  // Close menu when clicking outside
  $(document).on('click', function (e) {
    if (!$(e.target).closest('.navbar-collapse').length && !$(e.target).closest('.navbar-toggler').length) {
      $('.navbar-collapse').removeClass('show');
    }
  });
});

//multistep form

$(document).ready(function(){
    
  var current_fs, next_fs, previous_fs; //fieldsets
  var opacity;
  
  $(".next").click(function(){
      
      current_fs = $(this).parent();
      next_fs = $(this).parent().next();
      
      //Add Class Active
      $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
      
      //show the next fieldset
      next_fs.show(); 
      //hide the current fieldset with style
      current_fs.animate({opacity: 0}, {
          step: function(now) {
              // for making fielset appear animation
              opacity = 1 - now;
  
              current_fs.css({
                  'display': 'none',
                  'position': 'relative'
              });
              next_fs.css({'opacity': opacity});
          }, 
          duration: 600
      });
  });
  
  $(".previous").click(function(){
      
      current_fs = $(this).parent();
      previous_fs = $(this).parent().prev();
      
      //Remove class active
      $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
      
      //show the previous fieldset
      previous_fs.show();
  
      //hide the current fieldset with style
      current_fs.animate({opacity: 0}, {
          step: function(now) {
              // for making fielset appear animation
              opacity = 1 - now;
  
              current_fs.css({
                  'display': 'none',
                  'position': 'relative'
              });
              previous_fs.css({'opacity': opacity});
          }, 
          duration: 600
      });
  });
  
  $('.radio-group .radio').click(function(){
      $(this).parent().find('.radio').removeClass('selected');
      $(this).addClass('selected');
  });
  
  $(".submit").click(function(){
      return false;
  })
      
  });