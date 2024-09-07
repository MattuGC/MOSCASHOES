// products.js
const products = [
    // { name: "Ankle Boots Bold", image: "/static/img/products/ankle_boots_bold.jpg" },
    // { name: "Boots Elegance", image: "/static/img/products/boots_elegance.jpg" },
    // { name: "Clogs Casual", image: "/static/img/products/clogs_casual.jpg" },
    // { name: "Flats Comfy", image: "/static/img/products/flats_comfy.jpg" },
    // { name: "Heels Glamour", image: "/static/img/products/heels_glamour.jpg" },
];

function loadProducts() {
    const productList = document.getElementById("product-list");

    // Clear existing products
    productList.innerHTML = '';

    // Loop through the products array and create HTML elements for each product
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product-item"); // Add a class for styling if needed
        productDiv.innerHTML = `<h3>${product.name}</h3><img src="${product.image}" alt="${product.name}">`;
        productList.appendChild(productDiv);
    });
}

function showCategories(sectionID) {
    var section = document.getElementById(sectionID);
    section.getElementsByClassName('categories')[0];
    
    var categories = section.getElementsByClassName('category');

    categories[0].style.left = '0%';
    categories[1].style.left = '33%';
    categories[2].style.left = '66%';
    section.getElementsByClassName('categories')[0].style.transform = 'translateY(0%)';
}

function selectCategory(sectionID, category) {
    var section;
    section = document.getElementById(sectionID);

    var products;
    products = section.getElementsByClassName('product');
    for( i=0; i<products.length ;i++ ) {
        if ( products[i].getAttribute( 'data-category' ) === category ) {
            products[i].setAttribute( 'data-show', '1' );
        } else {
            products[i].setAttribute( 'data-show', '0' );
        }
    }

    var categories;
    categories = section.getElementsByClassName('category');

    categories[0].style.left = '-100vw';
    categories[1].style.left = '100vw';
    categories[2].style.left = '100vw';
    section.getElementsByClassName('categories')[0].style.transform = 'translateY(-122%)';
}

function showProduct(productID, status) {
    // const section = document.getElementById(sectionID);
    
    // Get Product Data
    // var product = products[productID];
    // Populate with product data

    var productPopUp;
    var randomPostion;
    var random;
    var negPos;
    productPopUp = document.getElementById(productID);
    if(status) {
        var products = document.getElementsByClassName('product-pop-up');
        for ( i=0; i<products.length; i++ ) {
            products[i].style.zIndex = '11000';
        }

        productPopUp.style.top = '3.3vh';
        productPopUp.style.left = '50%';
        productPopUp.style.zIndex = '11001';
        
        let min = -3;
        let max = 3;
        var deg;
        deg = Math.random() * (max - min + 1) + min;
        deg = deg + 'deg';
        productPopUp.style.transform = `translateX(-50%) rotate(${deg})`;
    } else {
        random = Math.random();
        if ( random < 0.5 ) {
            side = 'vw';
        } else {
            side = 'vh';
        }
        
        random = Math.random();
        if ( random < 0.5 ) {
            negPos = 200;
        } else {
            negPos = -200;
        }

        randomPostion = negPos;
        randomPostion = randomPostion + side;
        if ( side ===  'vh' ) {
            productPopUp.style.top = randomPostion;
        } else {
            productPopUp.style.left = randomPostion;
        }
    }
}

function tabSelection(productID, tabSelectionID) {
    var product = document.getElementById(productID);
    var buttons = product.querySelectorAll('.tabs button');
    for(i=0;i<buttons.length;i++) {
        buttons[i].classList.remove('button-selected');
    }

    var buttonSelection = document.getElementById(tabSelectionID.replace(/-data$/, ""));
    buttonSelection.classList.add('button-selected');

    var tabs = document.querySelectorAll('.info div');
    for(j=0;j<tabs.length;j++) {
        tabs[j].classList.remove('active-tab');
    }

    var tab = document.getElementById(tabSelectionID);
    tab.classList.add('active-tab');
}

function setMainPic(productID, src) {
    var product = document.getElementById(productID);
    var mainPic;
    if ( src.includes('jpg') || src.includes('jpeg') || src.includes('png') ) {
        mainPic = product.querySelector('.main-pic img');
        mainPic.style.display = 'block';
        
        product.querySelector('.main-pic video').style.display = 'none';
    } else if ( src.includes('mp4') ) {
        mainPic = product.querySelector('.main-pic video source');
        product.querySelector('.main-pic video').style.display = 'block';

        product.querySelector('.main-pic img').style.display = 'none';
    }
    mainPic.setAttribute('src', src);
    setRandomRotation('main-pic');
}
