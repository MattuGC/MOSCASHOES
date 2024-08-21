document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = event.target.getAttribute('href');
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

// scripts.js

document.addEventListener("DOMContentLoaded", () => {
  loadProducts();
  setupLanguageSelector();
});

function loadProducts() {
  const productList = document.getElementById("product-list");

  // Example product data
  const products = [
      { name: "Product 1", image: "static/images/products/example_1.jpg" },
      { name: "Product 2", image: "static/images/products/example_2.jpg" },
      { name: "Product 3", image: "static/images/products/example_3.jpg" },
      { name: "Product 4", image: "static/images/products/example_4.jpg" },
      { name: "Product 5", image: "static/images/products/example_5.jpg" },
  ];

  products.forEach(product => {
      const productDiv = document.createElement("div");
      productDiv.innerHTML = `<h3>${product.name}</h3><img src="${product.image}" alt="${product.name}">`;
      productList.appendChild(productDiv);
  });
}

function setupLanguageSelector() {
  const countryList = document.getElementById("country-list");
  const welcomePopup = document.getElementById("welcome-popup");
  const greetingElement = document.getElementById("greeting");

  countryList.addEventListener("click", function(event) {
      if (event.target.tagName === "LI") {
          const selectedLanguage = event.target.getAttribute("data-lang");
          loadTranslations(selectedLanguage);
          dissolvePopup(welcomePopup);
      }
  });

  countryList.addEventListener("mouseover", function(event) {
      if (event.target.tagName === "LI") {
          const selectedLanguage = event.target.getAttribute("data-lang");
          const translationFiles = {
              en: 'static/translations/en.json', // USA
              es: 'static/translations/es.json', // Argentina, Uruguay
              pt: 'static/translations/pt.json', // Brasil
              it: 'static/translations/it.json'  // Italia
          };

          const translationFile = translationFiles[selectedLanguage];

          fetch(translationFile)
              .then(response => response.json())
              .then(translations => {
                  greetingElement.innerText = translations.greeting;
              });
      }
  });
}

function loadTranslations(language) {
  const translationFiles = {
      en: 'static/translations/en.json', // USA
      es: 'static/translations/es.json', // Argentina, Uruguay
      pt: 'static/translations/pt.json', // Brasil
      it: 'static/translations/it.json'  // Italia
  };

  const translationFile = translationFiles[language];

  fetch(translationFile)
      .then(response => response.json())
      .then(translations => {
          // Update the page with translations
          document.querySelector("h1").innerText = translations.welcome;
          document.querySelector("#about h2").innerText = translations.about;
          document.querySelector("#contact h2").innerText = translations.contact;
          document.getElementById("greeting").innerText = translations.greeting;
          // Add more translations as needed
      });
}

function dissolvePopup(popup) {
  popup.style.opacity = 0;
  setTimeout(() => {
      popup.style.display = 'none';
  }, 500); // Match the duration of the opacity transition
}