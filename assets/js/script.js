document.addEventListener("DOMContentLoaded", function() {
    // Get the button element
    var backButton = document.querySelector('.back-top-button');
  
    // Add a click event listener to the button
    backButton.addEventListener('click', function() {
      // Scroll to the top of the page
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // for smooth scrolling
      });
    });
  
    // Show or hide the button based on scroll position
    window.addEventListener('scroll', function() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backButton.style.display = 'flex';
      } else {
        backButton.style.display = 'none';
      }
    });
  });
  