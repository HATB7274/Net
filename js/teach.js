$(document).ready(function () {
  $('#teacherCarousel').owlCarousel({
    loop: true, // Enable loop
    margin: 10, // Adjust the margin as needed
    responsive: {
      0: {
        items: 1, // Display 1 item on smaller screens
      },
      600: {
        items: 2, // Display 2 items on screens with a width of 600px or more
      },
      768: {
        items: 3, // Display 3 items on screens with a width of 768px or more
      },
    },
    autoplay: true, // Enable autoplay
    autoplayTimeout: 5000, // Autoplay interval in milliseconds (adjust as needed)
    autoplayHoverPause: true, // Pause on hover
  });
});
