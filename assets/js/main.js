// for cokie
function acceptCookies() {
    localStorage.setItem('cookieConsent','accepted');

    document.getElementById('cookieBanner').style.display='none';

    loadGoogleAnalytics();
}

if(localStorage.getItem('cookieConsent')==='accepted'){
    document.getElementById('cookieBanner').style.display='none';
} 

// For navbar
  document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('mainNavbar');
    const stickyOffset = 800; // Customize scroll offset if needed

    window.addEventListener('scroll', function () {
      if (window.scrollY > stickyOffset) {
        navbar.classList.add('sticky-navbar');
      } else {
        navbar.classList.remove('sticky-navbar');
      }
    });
  });

// hero section
 // Typewriter Configuration
const typewriterTexts = [
  "Look professional with design",
  "Get customers through websites",
  "Make your brand memorable",
  "Keep visitors coming back"
];

let currentText = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeWriter() {
  const typewriterElement = document.getElementById("typewriter");
  const fullText = typewriterTexts[currentText];
  
  if (isDeleting) {
    typewriterElement.textContent = fullText.substring(0, charIndex - 1);
    charIndex--;
    typingSpeed = 50;
  } else {
    typewriterElement.textContent = fullText.substring(0, charIndex + 1);
    charIndex++;
    typingSpeed = 100;
  }

  if (!isDeleting && charIndex === fullText.length) {
    isDeleting = true;
    typingSpeed = 1500; // Pause at end
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    currentText = (currentText + 1) % typewriterTexts.length;
    typingSpeed = 500; // Pause between texts
  }

  setTimeout(typeWriter, typingSpeed);
}

// Initialize on load
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(typeWriter, 1000);
});

// Service section
document.addEventListener('DOMContentLoaded', function() {
  // Initialize Bootstrap modal
  const contactModal = new bootstrap.Modal(document.getElementById('contactModal'));
  const modalServiceTitle = document.getElementById('modalServiceTitle');
  const selectedServiceInput = document.getElementById('selectedService');

  // Handle service selection
  document.querySelectorAll('.select-service').forEach(button => {
    button.addEventListener('click', function() {
      const service = this.getAttribute('data-service');
      const details = document.getElementById(`${service}-details`);
      const allDetails = document.querySelectorAll('.service-details');
      
      // Toggle current service details
      details.style.display = details.style.display === 'block' ? 'none' : 'block';
      
      // Hide other service details
      allDetails.forEach(item => {
        if (item.id !== `${service}-details`) {
          item.style.display = 'none';
        }
      });
      
      // Update button icon
      const icon = this.querySelector('i');
      if (details.style.display === 'block') {
        icon.classList.remove('fa-chevron-right');
        icon.classList.add('fa-chevron-up');
      } else {
        icon.classList.remove('fa-chevron-up');
        icon.classList.add('fa-chevron-right');
      }
    });
  });

  // Handle custom order buttons
  document.querySelectorAll('.custom-order-btn').forEach(button => {
    button.addEventListener('click', function() {
      const serviceName = this.getAttribute('data-service');
      modalServiceTitle.textContent = `Custom Order: ${serviceName}`;
      selectedServiceInput.value = serviceName;
      contactModal.show();
    });
  });

  // Handle form submission
  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Here you would typically send the form data to your server
    alert(`Thank you for your ${selectedServiceInput.value} request! We'll contact you soon.`);
    contactModal.hide();
    this.reset();
  });
});