// Script to enhance the portfolio experience

// Add smooth scrolling and active link highlighting
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section');
  
    window.addEventListener('scroll', () => {
      let currentSection = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          currentSection = section.getAttribute('id');
        }
      });
  
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSection)) {
          link.classList.add('active');
        }
      });
    });
  
    // Toggle mobile navigation menu
    const toggleMenu = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-links');
  
    toggleMenu.addEventListener('click', () => {
      navMenu.classList.toggle('show');
    });
  });

  