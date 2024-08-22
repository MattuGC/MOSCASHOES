// general.js

document.querySelectorAll('nav #left-menu a').forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = event.target.getAttribute('href');
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
      });
      document.getElementById("home").style.opacity = "0";
      document.documentElement.style.setProperty("--section-opacity", "0");
      document.getElementById(targetId.substring(1)).style.opacity = "1";
    });
  });

// general.js

document.addEventListener("DOMContentLoaded", () => {
    loadProducts();
    setupLanguageSelector();
});

const home_button = document.getElementById("home-button");

home_button.addEventListener("click", (event) => {
  document.getElementById("home").style.opacity = "1";
});

const contact_button = document.getElementById("contact-button");

contact_button.addEventListener("click", (event) => {
  document.getElementById("contact").style.opacity = "1";
});
