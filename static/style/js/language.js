function loadTranslations(language) {
    const currentLanguage = document.getElementById("dropdownButton").getAttribute("alt")
    if(currentLanguage!==language){
        const translationFiles = {
            en: 'static/translations/en.json', // USA
            es: 'static/translations/es.json', // Argentina, Uruguay
            pt: 'static/translations/pt.json', // Brasil
            it: 'static/translations/it.json'  // Italia
        };

        // console.log("Selected language: " + language.toUpperCase() );

        const translationFile = translationFiles[language];

        // Cargar el archivo de traducción
        fetch(translationFile)
            .then(response => response.json())
            .then(translations => {
                // Actualiza el texto de los elementos con el atributo data-lang-key
                const langElements = document.querySelectorAll('[data-lang-key]');
                
                langElements.forEach(element => {
                    const key = element.getAttribute('data-lang-key');
                    element.textContent = translations[key].toUpperCase() || key.toUpperCase(); // Usa la clave si no se encuentra la traducción
                    
                    if(element.textContent.toLowerCase()!==translations[key].toLowerCase()) {
                        console.log(
                            "Failed changing language to " + language.toUpperCase() +
                            "\nFile: static/style/js/language.js\tLine: 73" +
                            "\nelement.textContent => " + element.textContent +
                            "\nkey => " + key +
                            "\ntranslations[key] => " + translations[key]
                        );
                    }

                    if (element.classList.contains("context-title")) {
                        const parent = element.parentElement;
                        const childrens = parent.querySelectorAll("img");

                        const elementDataLang = element.getAttribute("data-lang-key")
                        
                        if (elementDataLang !== "cart" && elementDataLang !== "disclamer") {
                            
                            childrens.forEach(img => {
                                const imgData = img.getBoundingClientRect();
                                const height =imgData.height;
                                const left = imgData.left;
                                const middlePoint = imgData.width / 2;
                                const basePosition = left + middlePoint;
                                const top = imgData.top;
                                var newTop = null;
                                
                                if (elementDataLang !== "menu") {
                                    newTop = "-151%";
                                } else {
                                    newTop = top - (height/2) + "px";
                                }

                                element.style.top = newTop;

                                const contextTitleWidth = element.getBoundingClientRect().width;
                                const newLeft = basePosition - (contextTitleWidth/2);
                                element.style.left = newLeft + "px";
                                element.style.width = "fit-content";
                            });
                        } else if(elementDataLang === "disclamer") {
                            
                        } else {
                            element.style.top = "-285%";
                            element.style.left = "0";
                            element.style.width = "fit-content";
                        }
                        
                    }
                });

                // console.log("Language succesfully changed from " + currentLanguage.toUpperCase() + " to " + language.toUpperCase() + "!") ;
                document.getElementById("dropdownButton").setAttribute("alt", language); // To avoid useless language change
        }).catch(error => console.error('Error loading translations:', error));
    }
}
