// general.js

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = event.target.getAttribute('href');
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

// general.js

document.addEventListener("DOMContentLoaded", () => {
    loadProducts();
    setupLanguageSelector();
});