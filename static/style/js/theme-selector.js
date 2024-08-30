function openThemeMenu() {
    const themeSelector = document.getElementById('theme-selector');

    themeSelector.style.top = '0vh';
}

var root = document.querySelector(':root');

function applyTheme(theme) {
    var mainColor = '';
    var mainColorWithTransparency = '';
    var secundaryColor = '';

    if( theme === 'pink-theme' ) {
        mainColor = getCssVariable('--pink');
        mainColorWithTransparency = getCssVariable('--pink-transparecy');
        secundaryColor = getCssVariable('--yellow');
    }   
    if( theme === 'cream-theme' ) {
        mainColor = getCssVariable('--cream');
        mainColorWithTransparency = getCssVariable('--cream-transparecy');
        secundaryColor = getCssVariable('--blue');
    }
    if( theme === 'grey-theme' ) {
        mainColor = getCssVariable('--grey');
        mainColorWithTransparency = getCssVariable('--grey-transparecy');
        secundaryColor = getCssVariable('--cream');
    }
    if( theme === 'blue-theme' ) {
        mainColor = getCssVariable('--blue');
        mainColorWithTransparency = getCssVariable('--blue-transparecy');
        secundaryColor = getCssVariable('--cream');
    }
    if( theme === 'yellow-theme' ) {
        mainColor = getCssVariable('--yellow');
        mainColorWithTransparency = getCssVariable('--yellow-transparecy');
        secundaryColor = getCssVariable('--pink');
    }

    root.style.setProperty('--main-color', mainColor);
    root.style.setProperty('--sub-menu-color', mainColorWithTransparency);
    root.style.setProperty('--secundary-color', secundaryColor);

    const themeSelector = document.getElementById('theme-selector');

    themeSelector.style.top = getCssVariable('--theme-selector-top');
}

// Themes Sections
// ------ --------

const pinkTheme = document.getElementById('pink-theme');
pinkTheme.addEventListener('mouseenter', function() {
    themeQubes('pink-theme');
});

const greyTheme = document.getElementById('grey-theme');
greyTheme.addEventListener('mouseenter', function() {
    themeQubes('grey-theme');
});

const creamTheme = document.getElementById('cream-theme');
creamTheme.addEventListener('mouseenter', function() {
    themeQubes('cream-theme');
});

const yellowTheme = document.getElementById('yellow-theme');
yellowTheme.addEventListener('mouseenter', function() {
    themeQubes('yellow-theme');
});

const blueTheme = document.getElementById('blue-theme');
blueTheme.addEventListener('mouseenter', function() {
    themeQubes('blue-theme');
});

function themeQubes(theneID) {
    const sideQube = 10;
    const mainColorQuery = '#' + theneID + ' .theme-main-color';
    const mainColorQube = document.querySelector(mainColorQuery)

    const secundaryColorQubeQuery = '#' + theneID + ' .theme-secundary-color';
    const secundaryColorQube = document.querySelector(secundaryColorQubeQuery);

    var qubes = [mainColorQube, secundaryColorQube];
    
    for (let i = 0; i < 2; i++) {
        // Genera valores aleatorios para top, left y rotation
        const top = Math.random() * (100 - sideQube); // 100% - 10vh
        const left = Math.random() * (100 - sideQube); // 100% - 10vh
        const rotation = Math.random() * 360; // Rotación entre 0 y 360 grados

        qubes[i].style.top = `${top}vh`;
        qubes[i].style.left = `${left}vh`;
        qubes[i].style.transform = `rotate(${rotation}deg)`;
    }

    // Genera valores aleatorios para top, left y rotation
    // var top = Math.random() * (100 - sideQube); // 100% - 10vh
    // var left = Math.random() * (100 - sideQube); // 100% - 10vh
    // var rotation = Math.random() * 360; // Rotación entre 0 y 360 grados

    // mainColorQube.style.top = `${top}vh`;
    // mainColorQube.style.left = `${left}vh`;
    // mainColorQube.style.transform = `rotate(${rotation}deg)`;

    // top = Math.random() * (100 - sideQube); // 100% - 10vh
    // left = Math.random() * (100 - sideQube); // 100% - 10vh
    // rotation = Math.random() * 360; // Rotación entre 0 y 360 grados

    // secundaryColorQube.style.top = `${top}vh`;
    // secundaryColorQube.style.left = `${left}vh`;
    // secundaryColorQube.style.transform = `rotate(${rotation}deg)`;
}
