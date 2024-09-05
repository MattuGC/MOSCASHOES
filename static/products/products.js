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
    const section = document.getElementById(sectionID);
    section.getElementsByClassName('categories')[0].style.transform = 'translateY(-122%)';
}

function openProduct(sectionID, productID) {
    const section = document.getElementById(sectionID);
    
    // Get Product Data
    // var product = products[productID];

    var productPopUp = section.getElementsByClassName('product-pop-up')[0];
    productPopUp.style.top = '0vh';
}
