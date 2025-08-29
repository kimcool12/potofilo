// --- MOBILE MENU TOGGLE ---
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.intro');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


// --- SCROLL REVEAL ANIMATION ---
const revealElements = document.querySelectorAll('.reveal, .card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target); // Animate only once
    }
  });
}, {
  threshold: 0.15 // Triggers when 15% of the element is visible
});

revealElements.forEach(el => observer.observe(el));