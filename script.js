$(function () {
    let counted = false; // Prevent multiple counting
  
    $(window).on('scroll', function () {
      if (!counted) {
        let overlayTop = $('.content-overlay').offset().top;
        let overlayBottom = overlayTop + $('.content-overlay').outerHeight();
        let windowBottom = $(window).scrollTop() + $(window).height();
  
        // Check if the section is in view
        if (windowBottom > overlayTop && $(window).scrollTop() < overlayBottom) {
          $('.counter').each(function () {
            let $this = $(this);
            let target = parseInt($this.data('target'), 10) || 0; // Get target value
            let count = 0; // Start at 0
  
            let interval = setInterval(function () {
              if (count < target) {
                count++;
                $this.text(count); // Update text
              } else {
                clearInterval(interval); // Stop when target is reached
              }
            }, 50); // Adjust speed as needed
          });
          counted = true; // Ensure it only counts once
        }
      }
    });
  });
  

  // JavaScript to handle scroll animations
document.addEventListener('DOMContentLoaded', function() {
  // Select all elements that you want to animate
  const elements = document.querySelectorAll('.fade-in');

  // Options for the observer (which options you want to configure)
  const options = {
      root: null, // Use the viewport as the root
      rootMargin: '0px',
      threshold: 0.1 // Trigger the callback when 10% of the element is visible
  };

  // Callback function to execute when the element is intersected
  const callback = (entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible'); // Add the visible class
              observer.unobserve(entry.target); // Stop observing the element
          }
      });
  };

  // Create an intersection observer
  const observer = new IntersectionObserver(callback, options);

  // Observe each element
  elements.forEach(element => {
      observer.observe(element);
  });
});


$(document).ready(function () {
  // Smooth scroll to search bar when input is focused
  $('.sticky-search-bar input').on('focus', function () {
    $('html, body').animate(
      {
        scrollTop: $(this).offset().top - 70, // Adjust for the height of navbar
      },
      500 // Duration of the scroll animation (in milliseconds)
    );
  });

  // Sticky class toggle for shadow effect when scrolling
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 10) {
      $('.sticky-search-bar').addClass('scrolled');
    } else {
      $('.sticky-search-bar').removeClass('scrolled');
    }
  });
});