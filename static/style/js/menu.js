// Cart
//-----

let number = 5; // Change to propper injection of the data
document.getElementById('cart-quantity').textContent = number;

//Language selector
//-----------------

//Show-Hide Language Menu
function openCloseLanguageMenu() {
    const menu = document.getElementById('dropdownMenu');
    
    if (menu.style.opacity === '1') {
        menu.style.opacity = '0';
        menu.style.top = getCssVariable('--language-menu-off');
    } else {
        // menu.style.top = "calc(" + getCssVariable('--menu-height') + " + " + getCssVariable('--rolling-box-height') + ")";
        menu.style.top = getCssVariable('--menu-height');
        menu.style.opacity = '1';
    }
}

// Función para obtener el valor de una variable CSS
function getCssVariable(variable) {
    return getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
}

// To close the element when a language is selected
const items = document.querySelectorAll('.dropdown-item');

items.forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault(); // Evita el comportamiento predeterminado del enlace
        const selectedLanguage = this.getAttribute('data-lang');
        document.getElementById('dropdownMenu').style.opacity = '0'; // Cierra el menú
        
        // Actualiza el texto del botón con el idioma seleccionado
        const buttonText = document.getElementById('dropdownButton').firstChild;
        buttonText.textContent = this.textContent;
        
        // // Muestra el ícono de idioma
        // const icon = document.querySelector('.dropdown-icon');
        // icon.style.display = 'inline-block';

        var menuHeightValue = getCssVariable('--menu-height');
        var menuBaseHeight = getCssVariable('--menu-base-height');
        document.documentElement.style.setProperty('--menu-height', menuBaseHeight);
    });
});

// Cerrar el menú si se hace clic fuera de él
window.addEventListener('click', function(event) {
    const menu = document.getElementById('dropdownMenu');
    if (!event.target.matches('.dropdown-button')) {
        menu.style.opacity = '0';
        
        var menuHeightValue = getCssVariable('--menu-height');
        var menuBaseHeight = getCssVariable('--menu-base-height');
        document.documentElement.style.setProperty('--menu-height', menuBaseHeight);
    }
});

// Menu Button
//------------

function openCloseMenu() {
    const menu = document.getElementById("menu");
    const headerHeight = getCssVariable('--header-height');
    const menuHeight = getCssVariable('--menu-height');
    
    if(menu.style.opacity==="0") {
        // console.log("Showing menu...");

        menu.style.opacity = 1;
        menu.style.top = headerHeight;
        menu.style.zIndex = 1500;

    } else {
        // console.log("Hidding menu...");
        
        menu.style.opacity = 0;
        menu.style.top = "calc(" + headerHeight + " - " + menuHeight + ")";  // calc(var(--header-height) - var(--menu-height))
        menu.style.zIndex = -2000;
    }
}

// Cerrar el menú si se hace clic fuera de él
window.addEventListener('click', function(event) {
    const menu = document.getElementById("menu");
    const clickHamburguerButton = event.target.matches('#hamburguer-btn-img');
    const clickMenu = event.target.matches('#menu');
    const clickOpenMenu = event.target.matches('.open-menu');
    
    if (!clickHamburguerButton && !clickMenu && !clickOpenMenu) {
        // console.log("Hidding menu...");

        const headerHeight = getCssVariable('--header-height');
        const menuHeight = getCssVariable('--menu-height');
        
        menu.style.opacity = 0;
        menu.style.top = "calc(" + headerHeight + " - " + menuHeight + ")";  // calc(var(--header-height) - var(--menu-height))
        menu.style.zIndex = -2000;
    }
});

// Secundary Menu Button
//----------------------

function openCloseSecundaryMenu(secundaryMenu) {
    const shopMenu = document.getElementById(secundaryMenu);
    const headerHeight = getCssVariable('--header-height');
    const menuHeight = getCssVariable('--menu-height');
    
    if(shopMenu.style.opacity==="0" || shopMenu.style.opacity==="") {
        // console.log("Showing shop menu...");

        shopMenu.style.opacity = 1;
        shopMenu.style.top = "calc(" + headerHeight + " + " + menuHeight + ")";  // calc(var(--header-height) - var(--menu-height))
        shopMenu.style.zIndex = 2000;
        shopMenu.style.height = "auto";

    } else {
        // console.log("Hidding shop menu...");
        
        shopMenu.style.opacity = 0;
        shopMenu.style.top = getCssVariable("--secundary-menu-top");
        shopMenu.style.zIndex = -2000;
        shopMenu.style.height = "0";
    }
}

// Cerrar el menú si se hace clic fuera de él
window.addEventListener('click', function(event) {
    const menu = document.getElementById("shop-menu");
    const clickHamburguerButton = event.target.matches('.shop-menu');
    
    if (!clickHamburguerButton) {
        // console.log("Hidding menu...");
        
        menu.style.opacity = 0;
        menu.style.top = getCssVariable("--secundary-menu-top");
        menu.style.zIndex = -2000;
        shopMenu.style.height = "0";
    }
});

// Cerrar el menú si se hace clic fuera de él
window.addEventListener('click', function(event) {
    const menu = document.getElementById("about-mosca-menu");
    const clickHamburguerButton = event.target.matches('.about-mosca-menu');
    
    if (!clickHamburguerButton) {
        // console.log("Hidding menu...");
        
        menu.style.opacity = 0;
        menu.style.top = getCssVariable("--secundary-menu-top");
        menu.style.zIndex = -2000;
        shopMenu.style.height = "0";
    }
});

// Personal Menu
//--------------


