// ==================================================
// Project Name  :  Hostbitpro
// File          :  JS Base
// Version       :  1.0.0
// Last change   :  23.03.24
// Author        :  Bitspeck
// ==================================================


document.addEventListener('DOMContentLoaded', function() {
  // preloader - start
  // --------------------------------------------------
  $(window).on('load', function () {
    $('#preloader').fadeOut('slow', function () { $(this).remove(); });
  });
  // preloader - end
  

  // --------------------------------------------------
  // sticky-header - start
  // -----------------------------------------------
  // var headerId = $(".sticky-header");
  // var headerTop = $(".sticky-header .header-top");

  // $(window).on('scroll', function () {
  //   var amountScrolled = $(window).scrollTop();
  //   if ($(this).scrollTop() > 50) {
  //     headerId.removeClass("not-stuck");
  //     headerId.addClass("stuck");
  //     headerTop.addClass("display-none");
  //   } else {
  //     headerId.removeClass("stuck");
  //     headerId.addClass("not-stuck");
  //     headerTop.removeClass("display-none");
  //   }
  // });
  
  // Cache jQuery selections
  var headerId = $(".sticky-header");
  var headerTop = $(".sticky-header .header-top");
  var scrollThreshold = 50;

  // Function to update header state based on scroll position
  function updateHeaderState() {
    var amountScrolled = $(window).scrollTop();
    headerId.toggleClass("stuck", amountScrolled > scrollThreshold);
    headerId.toggleClass("not-stuck", amountScrolled <= scrollThreshold);
    headerTop.toggleClass("display-none", amountScrolled > scrollThreshold);
  }

  // Attach scroll event listener to the window
  $(window).on('scroll', function () {
    updateHeaderState();
  });

  // Initial call to updateHeaderState() to set initial state
  updateHeaderState();


 // --------------------------------------------------
  // sticky-header - start
  // -----------------------------------------------
  
  // -----------------------------------------------
  // service - start
  // -----------------------------------------------
  var owl = $('.service');
  owl.owlCarousel({
    margin: 10,
    nav: false,
    loop: true,
    autoplay:true,
    autoplayTimeout:5000,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });

// -----------------------------------------------
// service - end
// -----------------------------------------------
$('.work-with').owlCarousel({
    margin: 10,
    nav: false,
    loop: true,
    autoplay:true,
    autoplayTimeout:5000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})


// -----------------------------------------------
// service - start
// -----------------------------------------------

    var specialTable = $('.pricing-section .special');
    $('.pricing-card').on('mouseover', function () {
        specialTable.removeClass('active');
    }).on('mouseleave', function () {
        specialTable.addClass('active');
    });
    var specialTable = $('.pricing-section .special');
    $('.home-2-pricing-card').on('mouseover', function () {
        specialTable.removeClass('active');
    }).on('mouseleave', function () {
        specialTable.addClass('active');
    });
     var specialTable = $('.pricing-section .special');
    $('.home-3-pricing-card').on('mouseover', function () {
        specialTable.removeClass('active');
    }).on('mouseleave', function () {
        specialTable.addClass('active');
    });

// -----------------------------------------------
// service - end
// -----------------------------------------------
// -----------------------------------------------
 // top-to-back - start 
 // ----------------------------------------------
  

  if ($(window).scrollTop() < 100) {
    $('.back-to-top').hide();
  }
  
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').stop().animate({scrollTop:0}, 500, 'swing');
    return false;
  });
  
// -----------------------------------------------
 // top-to-back - start 
 // ----------------------------------------------

$('.testimonials').owlCarousel({
    margin: 10,
    nav: false,
    loop: true,
    autoplay:true,
    autoplayTimeout:5000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})


$('#contact_form .contact-btn').click(function () {
    $.ajax({
        type: 'post',
        url: 'mail.php',
        data: $('#contact_form').serialize(),
        success: function () {
            $('#contact_form')[0].reset();
            $('#contact_form .contact-btn').attr('style', "background-color:#16C39A");
            $('#contact_form .contact-btn').siblings().html("<i style='color:#16C39A'>*</i> Email has been sent successfully");
        }
    });
    return false;
});

});