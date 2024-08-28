// products.js
const products = [
    // { name: "Product 1", image: "static/images/products/example_1.jpg" },
    // { name: "Product 2", image: "static/images/products/example_2.jpg" },
    // { name: "Product 3", image: "static/images/products/example_3.jpg" },
    // { name: "Product 4", image: "static/images/products/example_4.jpg" },
    // { name: "Product 5", image: "static/images/products/example_5.jpg" },
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