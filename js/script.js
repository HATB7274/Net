(function ($) {
    'use strict';

    // Sticky Menu
    $(window).scroll(function () {
        if ($('header').offset().top > 10) {
            $('.top-header').addClass('hide');
            $('.navigation').addClass('nav-bg');
        } else {
            $('.top-header').removeClass('hide');
            $('.navigation').removeClass('nav-bg');
        }
    });

    // Background-images
    $('[data-background]').each(function () {
        $(this).css({
            'background-image': 'url(' + $(this).data('background') + ')'
        });
    });

    //Hero Slider
    $('.hero-slider').slick({
        autoplay: true,
        autoplaySpeed: 7500,
        pauseOnFocus: false,
        pauseOnHover: false,
        infinite: true,
        arrows: true,
        fade: true,
        prevArrow: '<button type=\'button\' class=\'prevArrow\'><i class=\'ti-angle-left\'></i></button>',
        nextArrow: '<button type=\'button\' class=\'nextArrow\'><i class=\'ti-angle-right\'></i></button>',
        dots: true
    });
    $('.hero-slider').slickAnimation();

    // venobox popup
    $(document).ready(function(){
        $('.venobox').venobox(); 
    });

    
    // mixitup filter
    var containerEl = document.querySelector('[data-ref~="mixitup-container"]');
    var mixer;
    if (containerEl) {
        mixer = mixitup(containerEl, {
            selectors: {
                target: '[data-ref~="mixitup-target"]'
            }
        });
    }

    //  Count Up
    function counter() {
        var oTop;
        if ($('.count').length !== 0) {
            oTop = $('.count').offset().top - window.innerHeight;
        }
        if ($(window).scrollTop() > oTop) {
            $('.count').each(function () {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                $({
                    countNum: $this.text()
                }).animate({
                    countNum: countTo
                }, {
                    duration: 1000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                    }
                });
            });
        }
    }
    $(window).on('scroll', function () {
        counter();
    });

})(jQuery);


document.getElementById('roleDropdown').addEventListener('change', function() {
    var role = this.value;
    var studentYearDropdown = document.getElementById('studentYearDropdown');

    if (role === 'student') {
        studentYearDropdown.style.display = 'block';
    } else {
        studentYearDropdown.style.display = 'none';
    }
});

// JavaScript for showing/hiding the password
const showPasswordCheckbox = document.getElementById("showPassword");
const passwordInput = document.getElementById("pass1");

showPasswordCheckbox.addEventListener("change", function () {
  if (this.checked) {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
});






document.getElementById('readMoreButton').addEventListener('click', function() {
    var content = document.getElementById('contentToShow');
    content.style.display = 'block';
});

document.getElementById('closeButton').addEventListener('click', function() {
    var content = document.getElementById('contentToShow');
    content.style.display = 'none';
});


// Section 1
document.getElementById('readMoreButton1').addEventListener('click', function() {
    var content = document.getElementById('contentToShow1');
    content.style.display = 'block';
});

document.getElementById('closeButton1').addEventListener('click', function() {
    var content = document.getElementById('contentToShow1');
    content.style.display = 'none';
});

// Section 2
document.getElementById('readMoreButton2').addEventListener('click', function() {
    var content = document.getElementById('contentToShow2');
    content.style.display = 'block';
});

document.getElementById('closeButton2').addEventListener('click', function() {
    var content = document.getElementById('contentToShow2');
    content.style.display = 'none';
});
