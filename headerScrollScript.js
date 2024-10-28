  // Listens for scroll events on the window
  window.addEventListener('scroll', function() {
    // Gets the header element
    const header = document.querySelector('.header');

    // Checks if the user has scrolled more than 50px
    if (window.scrollY > 50) {
      header.style.backgroundColor = 'rgba(244, 245, 246, 0.8)'; // Transparent background
      header.style.backdropFilter = 'blur(10px)'; // Add blur effect
    } else {
      header.style.backgroundColor = 'rgba(244, 245, 246, 1)'; // Solid background when at the top
      header.style.backdropFilter ='none' //remove blur
    }
  });