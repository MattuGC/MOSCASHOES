document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-item');
    const sections = document.querySelectorAll('.content-section');
    const footerLinks = document.querySelectorAll('.footer-link');
    const signUpLink = document.querySelector('a[href="#signup"]');

    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('data-target');
            sections.forEach(section => {
                section.classList.toggle('active', section.id === target);
            });
            menu_active_color(this.id);
        });
    });

    const languageSelector = document.getElementById('language-selected');
    const userLang = detectLanguage();
    loadTranslations(userLang);
    languageSelector.innerText = userLang;

    footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href').substring(1);
            sections.forEach(section => {
                section.classList.toggle('active', section.id === target);
            });
            menu_active_color(this.id);
        });
    });

    signUpLink.addEventListener('click', function(e) {
        e.preventDefault();
        sections.forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById('signup').classList.add('active');
    });

    /* const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
        }
    }); */

    /* function changeBG() {
        const images = [
            "url('/static/images/home-bg/moscaslider_1.jpg')",
            "url('/static/images/home-bg/moscaslider_2.jpg')",
            "url('/static/images/home-bg/moscaslider_3.jpg')",
            "url('/static/images/home-bg/moscaslider_4.jpg')"
        ];

        const body = document.querySelector('body');
        const bg = images[Math.floor(Math.random() * images.length)];

        body.style.backgroundImage = bg;
    }

    setInterval(changeBG, 7000); */
});

function clear_active_menu() {
    document.querySelectorAll('.menu-item').forEach(item => {
        item.style.color = getComputedStyle(document.documentElement).getPropertyValue('--background-color').trim();
        item.style.backgroundColor = 'transparent';
    });
}

function menu_active_color(section) {
    clear_active_menu();
    const menuItem = document.getElementById(section);
    try {
        menuItem.style.color = getComputedStyle(document.documentElement).getPropertyValue('--secundary-color').trim();
    } catch {}
}

function mobile_logo_menu() {
    const menuLogo = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    if (window.innerWidth <= 768) {
        const marginLogo = getComputedStyle(document.documentElement).getPropertyValue('--margin-logo').trim();
        menuLogo.style.transitionDuration = 'left 5s ease-in-out';
        if (menuLogo.style.left <= '768') {
            if (menuLogo.style.display === 'block') {
                menuLogo.style.display = 'none';
                menuLogo.style.left = marginLogo;
                menuLogo.style.display = 'inline';
                menu.style.display = 'none';
            } else {
                menuLogo.style.display = 'block';
                const pageWidth = parseInt(getComputedStyle(document.documentElement).getPropertyValue('width').trim());
                const logoWidth = menuLogo.offsetWidth;
                const leftParameter = (pageWidth - logoWidth) / 2;
                menuLogo.style.left = `${leftParameter}px`;
                menuLogo.style.position = 'fixed';
                menuLogo.style.height = '2rem';
                menuLogo.style.top = '0.7rem';
                menu.style.display = 'inline';
            }
        }
    }
}

function detectLanguage() {
    const userLang = navigator.language || navigator.userLanguage;
return userLang.startsWith( 'es' ) ? 'ES' : 
       userLang.startsWith( 'pt' ) ? 'PT' : 
       userLang.startsWith( 'it' ) ? 'IT' : 
       'EN';
}

function loadTranslations( lang ) {
    fetch(`static/translations/${ lang }.json`)
        .then( response => response.json() )
        .then( translations => {
            document.querySelectorAll( '[data-translate-key]' ).forEach( element => {
                const key = element.getAttribute( 'data-translate-key' );
                element.textContent = translations[ key ];
            });
        })
        .catch( error => console.error( 'Error loading translations:', error ) );
}

function language_selector( language ) {
    const languageSelector = document.getElementById( 'language-selected' );
    loadTranslations( language );
    languageSelector.innerText = language.toUpperCase();

    languageSelector.addEventListener( 'change', () => {
        loadTranslations( language );
    });
}
