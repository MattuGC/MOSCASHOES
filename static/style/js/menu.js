function toggleMenu(element) {
    const menu_categories = document.getElementsByClassName( 'menu-categories' )[ 0 ];
    if ( menu_categories.style.left === '0rem' ) {
        menu_categories.style.left = '-100%';
    } else {
        menu_categories.style.left = '0rem';
    }

    element.classList.toggle('open');
}
