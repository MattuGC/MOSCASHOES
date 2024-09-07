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

function selectCategory(sectionID, category) {
    var section = document.getElementById(sectionID);

    var products = section.getElementsByClassName('product');
    for( i=0; i<products.length ;i++ ) {
        if( products[i].getAttribute( 'data-category' ) !== category ) {
            products[i].setAttribute( 'data-show', '0' );
        }
    }

    var categories = document.getElementsByClassName('category');

    categories[0].style.left = '-100vw';
    categories[1].style.left = '100vw';
    categories[2].style.left = '100vw';
    section.getElementsByClassName('categories')[0].style.transform = 'translateY(-122%)';
}

function openProduct(productID) {
    // const section = document.getElementById(sectionID);
    
    // Get Product Data
    // var product = products[productID];
    // Populate with product data

    var productPopUp = document.getElementsByClassName('product-pop-up')[0];
    productPopUp.style.top = '3.3vh';
}

function tabSelection(tabSelectionID) {
    var buttons = document.querySelectorAll('.tabs button');
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

function closeProduct() {
    var productPopUp = document.getElementsByClassName('product-pop-up')[0];
    productPopUp.style.top = '-200vh';
}

function setMainPic(productID, imgURL) {
    var product = document.getElementById(productID);
    var mainPic = product.getElementsByClassName('main-pic')[0];
    mainPic.setAttribute('src', imgURL);
    setRandomRotation('main-pic');
}
