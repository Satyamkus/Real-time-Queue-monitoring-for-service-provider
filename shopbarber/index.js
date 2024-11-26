// Simulate real-time queue updates for demo purposes
document.addEventListener('DOMContentLoaded', function() {
  const queueCounts = document.querySelectorAll('.queue-count');

  // Simulated queue numbers (in a real application, this would come from a server)
  const queues = [3, 1, 5];

  queueCounts.forEach((queueCount, index) => {
      queueCount.innerText = queues[index];
  });

  // Booking button logic
  const bookButtons = document.querySelectorAll('.book-btn');
  bookButtons.forEach(button => {
      button.addEventListener('click', () => {
          alert('Appointment booked successfully!');
      });
  });
});


let slideIndex = 0;
        showSlides();
        
        function showSlides() {
          let i;
          let slides = document.getElementsByClassName("slideImg");
          let dots = document.getElementsByClassName("dot");
          for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
          }
          slideIndex++;
          if (slideIndex > slides.length) {slideIndex = 1}    
          for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
          }
          slides[slideIndex-1].style.display = "block";  
          dots[slideIndex-1].className += " active";
          setTimeout(showSlides, 3000); // Change image every 2 seconds
        }


  // scrolling location hidden property
  const scrollDiv = document.getElementById('scroll-div');
  let scrollTimeout;

  // Listen to scroll events
  window.addEventListener('scroll', () => {
      // Hide the div on scroll
      scrollDiv.classList.add('hidden');

      // Clear previous timeout
      clearTimeout(scrollTimeout);

      // Show the div after scrolling stops (delay of 300ms)
      scrollTimeout = setTimeout(() => {
          scrollDiv.classList.remove('hidden');
      }, 500);
  });
