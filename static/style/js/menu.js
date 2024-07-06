document.addEventListener( 'DOMContentLoaded',
    function() {
        const menu = document.getElementById( 'menu' );

        menu.addEventListener( 'click',
            function() {
                var home_section = document.getElementById( 'home' );
                var logo_menu = document.getElementById( 'home-menu' );
                if (home_section.classList.contains( 'active' )) {
                    logo_menu.classList.remove( 'home-menu' );
                    logo_menu.classList.add( 'home-menu-home' );
                } else {
                    logo_menu.classList.remove( 'home-menu-home' );
                    logo_menu.classList.add( 'home-menu' )
                }
            }
        );
    }
);

function toggleMenu( element ) {
    const menu_categories = document.getElementsByClassName( 'menu-categories' )[ 0 ];
    if ( menu_categories.style.left === '0rem' ) {
        menu_categories.style.left = '-100%';
    } else {
        menu_categories.style.left = '0rem';
    }

    element.classList.toggle('open');
}

function home_or_not_home() {
    var home_section = document.getElementById( 'home' );
    var logo_menu = document.getElementById( 'home-menu' );

    setTimeout( function() {
        if ( !( home_section.classList.contains( 'active' ) ) ) {
            home_section.classList.add( 'active' )
            logo_menu.classList.remove( 'home-menu' );
            logo_menu.classList.add( 'home-menu-home' );
        }
    }, 100);
};
