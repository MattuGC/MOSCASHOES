//Language Selector
//-----------------

function setupLanguageSelector() {
    const countryList = document.getElementById("country-list");
    const welcomePopup = document.getElementById("welcome-popup");
    const greetingElement = document.getElementById("greeting");
    const topRollingText = document.getElementById("top-rolling-text");
    const bottomRollingText = document.getElementById("bottom-rolling-text");
    const topImage = document.querySelector('.top-image');
    const bottomImage = document.querySelector('.bottom-image');

    countryList.addEventListener("click", function(event) {
        if (event.target.tagName === "LI") {
            const selectedLanguage = event.target.getAttribute("data-lang");
            loadTranslations(selectedLanguage);
            const dropdownButton = document.getElementById('dropdownButton');
            dropdownButton.textContent = selectedLanguage.toUpperCase();
            
            // Slide images out before dissolving the popup
            topImage.style.transform = 'translateX(-1000%)'; // Slide left
            bottomImage.style.transform = 'translateX(2000%) rotate(180deg)'; // Slide right
            
            setTimeout(() => {
                dissolvePopup(welcomePopup);
            }, 500); // Match the duration of the slide-out
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
                    topRollingText.innerText = translations.rollingText;
                    bottomRollingText.innerText = translations.rollingText;
                });
        }
    });
}

function dissolvePopup(popup) {
    popup.style.opacity = 0;
    setTimeout(() => {
        popup.style.display = 'none';
    }, 500); // Match the duration of the opacity transition
}
