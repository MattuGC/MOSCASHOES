// Cart
//-----

let number = 5; // Change to propper injection of the data
document.getElementById('cart-quantity').textContent = number;

// //Language selector
// //-----------------

// //Show-Hide Language Menu
// function openCloseLanguageMenu() {
//     const menu = document.getElementById('dropdownMenu');
    
//     if (menu.style.opacity === '1') {
//         menu.style.opacity = '0';
//         menu.style.top = getCssVariable('--language-menu-off');
//     } else {
//         // menu.style.top = "calc(" + getCssVariable('--menu-height') + " + " + getCssVariable('--rolling-box-height') + ")";
//         menu.style.top = getCssVariable('--menu-height');
//         menu.style.opacity = '1';
//     }
// }

// // To close the element when a language is selected
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

// // Cerrar el menú si se hace clic fuera de él
// window.addEventListener('click', function(event) {
//     const menu = document.getElementById('dropdownMenu');
//     if (!event.target.matches('.dropdown-button')) {
//         menu.style.opacity = '0';
        
//         var menuHeightValue = getCssVariable('--menu-height');
//         var menuBaseHeight = getCssVariable('--menu-base-height');
//         document.documentElement.style.setProperty('--menu-height', menuBaseHeight);
//     }
// });

// Menu Button
//------------
function openCloseMenu() {
    const menu = document.getElementById("menu");
    const menuActiveTop = getCssVariable('--top-active-menu');
    const menuButton = document.getElementById('menu-input');
    
    if(menu.style.opacity==="0") {
        // console.log("Showing menu...");
        
        menu.style.opacity = 1;
        menu.style.top = menuActiveTop;
        menuButton.checked = true;
    } else {
        // console.log("Hidding menu...");
        
        menu.style.opacity = 0;
        menu.style.top = "calc(var(--menu-height) * -1)";
        menuButton.checked = false;
    }
}

// Cerrar el menú si se hace clic fuera de él
window.addEventListener('click', function(event) {
    const menu = document.getElementById("menu");
    const clickHamburguerButton = event.target.matches('#hamburguer-btn');
    const menuButton = document.getElementById('menu-input');
    const clickMenuButton = event.target.matches('.menu');
    const clickMenu = event.target.matches('#menu');
    const clickOpenMenu = event.target.matches('.open-menu');
    const clickPersonalMenu = event.target.matches('.personal-menu');
    const clickLoginMenu = event.target.matches('#login-menu');
    const clickLoginContainer = event.target.matches('#loginContainer');
    const clickLoginItem = event.target.matches('.login-item');
    
    if (!clickHamburguerButton && !clickMenuButton && !clickMenu && !clickOpenMenu && !clickPersonalMenu && !clickLoginMenu && !clickLoginContainer && !clickLoginItem) {
        // console.log("Hidding menu...");

        const headerHeight = getCssVariable('--header-height');
        const menuHeight = getCssVariable('--menu-height');
        
        menu.style.opacity = 0;
        menu.style.top = "calc(var(--menu-height) * -1)";

        if(menuButton.checked === true) {
            menuButton.checked = false;
        }
    }
});

// Check hover for menu context-title
const menuHover = document.getElementById("hamburguer-btn");
menuHover.addEventListener('mouseover', function(event) {
    const menuContextTitle = document.getElementById("menu-context-title");

    menuContextTitle.style.opacity = 1;
    menuContextTitle.style.left = "auto";
    menuContextTitle.style.right = "auto";
    menuContextTitle.style.top = "33%";
});

menuHover.addEventListener('mouseout', function(event) {
    const menuContextTitle = document.getElementById("menu-context-title");

    menuContextTitle.style.opacity = 0;
    menuContextTitle.style.top = "calc(var(--menu-height)* -1.5)";
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
        
        shopMenu.style.top = "calc(" + headerHeight + " + " + menuHeight + " - 1.3vh)";
        shopMenu.style.height = "auto";

    } else {
        // console.log("Hidding shop menu...");
        
        shopMenu.style.opacity = 0;
        shopMenu.style.top = getCssVariable("--secundary-menu-top");
        shopMenu.style.height = "0";
    }
}

// Cerrar el menú si se hace clic fuera de él
window.addEventListener('click', function(event) {
    const shopMenu = document.getElementById("shop-menu");
    const clickHamburguerButton = event.target.matches('.shop-menu');
    
    if (!clickHamburguerButton) {
        // console.log("Hidding menu...");
        
        shopMenu.style.opacity = 0;
        shopMenu.style.top = getCssVariable("--secundary-menu-top");
        shopMenu.style.height = "0";
    }
});

// Cerrar el menú si se hace clic fuera de él
window.addEventListener('click', function(event) {
    const aboutMosca = document.getElementById("about-mosca-menu");
    const clickHamburguerButton = event.target.matches('.about-mosca-menu');
    
    if (!clickHamburguerButton) {
        // console.log("Hidding menu...");
        
        aboutMosca.style.opacity = 0;
        aboutMosca.style.top = getCssVariable("--secundary-menu-top");
        aboutMosca.style.height = "0";
    }
});

// Personal Menu
//--------------

// Cerrar el menú si se hace clic fuera de él
window.addEventListener('click', function(event) {
    const loginMenu = document.getElementById('login-menu');
    const personalMenu = event.target.matches('.personal-menu');
    
    if (!loginMenu) {
        // console.log("Hidding menu...");
        
        loginMenu.style.opacity = 0;
        loginMenu.style.top = getCssVariable("--secundary-menu-top");
        loginMenu.style.height = "0";
    }
});

// OpenClose User Menu
//---------- ---- ----

// sleep time expects milliseconds
function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

function openCloseUserMenu(userMenuID) {
    sleep(1).then(() => {
        const userMenu = document.getElementById(userMenuID);
        const menuHeight = getCssVariable('--menu-height');
        
        if(userMenu.style.opacity==="0" || userMenu.style.opacity==="") {
            // console.log("Showing User menu...");
    
            userMenu.style.opacity = 1;
            userMenu.style.top = menuHeight;
    
        } else {
            // console.log("Hidding User menu...");
            
            userMenu.style.opacity = 0;
            userMenu.style.top = getCssVariable("--secundary-menu-top");
        }
    });
}

// Cerrar el menú si se hace clic fuera de él
window.addEventListener('click', function(event) {
    const loginMenu = document.getElementById("login-menu");
    const clickLoginItem = event.target.matches('.login-item');
    
    if(loginMenu.style.opacity==="1"){
        if (!clickLoginItem) {
            // console.log("Hidding menu...");
            
            loginMenu.style.opacity = 0;
            loginMenu.style.top = getCssVariable("--user-menu-top");
        }
    }
});

// Menu's context title
// ------ ------- -----

// Cart
const cartButton = document.getElementById("cart-button");
cartButton.addEventListener('mouseover', function(event) {
    const cartCT = document.getElementById("cart-context-title");
    cartCT.style.opacity = 1;
});
cartButton.addEventListener('mouseout', function(event) {
    const cartCT = document.getElementById("cart-context-title");
    cartCT.style.opacity = 0;
});

// moscathecollection
const moscathecollectionButton = document.getElementById("moscathecollection-button");
moscathecollectionButton.addEventListener('mouseover', function(event) {
    const moscathecollectionCT = document.getElementById("moscathecollection-context-title");
    moscathecollectionCT.style.opacity = 1;
});
moscathecollectionButton.addEventListener('mouseout', function(event) {
    const moscathecollectionCT = document.getElementById("moscathecollection-context-title");
    moscathecollectionCT.style.opacity = 0;
});

// moscastudiok
const moscastudiokButton = document.getElementById("moscastudiok-button");
moscastudiokButton.addEventListener('mouseover', function(event) {
    const moscastudiokCT = document.getElementById("moscastudiok-context-title");
    moscastudiokCT.style.opacity = 1;
});
moscastudiokButton.addEventListener('mouseout', function(event) {
    const moscastudiokCT = document.getElementById("moscastudiok-context-title");
    moscastudiokCT.style.opacity = 0;
});

// wa
const waButton = document.getElementById("wa-button");
waButton.addEventListener('mouseover', function(event) {
    const waCT = document.getElementById("wa-context-title");
    waCT.style.opacity = 1;
});
waButton.addEventListener('mouseout', function(event) {
    const waCT = document.getElementById("wa-context-title");
    waCT.style.opacity = 0;
});
