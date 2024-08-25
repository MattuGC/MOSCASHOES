// general.js

document.addEventListener("DOMContentLoaded", () => {
    loadProducts();
    setupLanguageSelector();
});

function goTo(page) {
  console.log("Going to " + page + "!");
  if(document.getElementsByClassName("active").length > 0) {
    document.getElementsByClassName("active")[0].classList.remove("active");
  }
  if(page!=="home") {
    document.getElementById(page).classList.add("active");
  }
}
