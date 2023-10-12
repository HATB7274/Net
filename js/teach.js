$(document).ready(function () {
    $('#teacherCarousel').owlCarousel({
        loop: true,
        margin: 10, // You can adjust this margin to control spacing
        responsive: {
            0: {
                items: 1, // Display 1 item on smaller screens
            },
            480: {
                items: 2, // Display 2 items on screens with a width of 480px or more
            },
            768: {
                items: 3, // Display 3 items on screens with a width of 768px or more
            }
            // Add more breakpoints and options as needed
        },
        autoplay: true, // Enable autoplay
        autoplayTimeout: 5000, // Autoplay interval in milliseconds (adjust as needed)
        autoplayHoverPause: true, // Pause on hover (optional)
    });
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
