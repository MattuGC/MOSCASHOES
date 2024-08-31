// general.js

// Función para obtener el valor de una variable CSS
function getCssVariable(variable) {
  return getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
}

document.addEventListener("DOMContentLoaded", () => {
    loadProducts();
    setupLanguageSelector();
    setBorderRarius();
  });
  
  function setBorderRarius(){
    const contextTitle = document.getElementsByClassName("context-title");
    const countryList = document.getElementsByClassName("country-list-hover-style");
    const secundaryMenu = document.getElementsByClassName("personal-menu");
    const inputLabel = document.getElementsByClassName("input-label");
    const themeQube = document.getElementsByClassName('theme-qube');
    const buttons = document.getElementsByClassName('button');

    var stickers = [];
    stickers = Array.prototype.concat.apply(stickers, contextTitle);
    stickers = Array.prototype.concat.apply(stickers, countryList);
    stickers = Array.prototype.concat.apply(stickers, secundaryMenu);
    stickers = Array.prototype.concat.apply(stickers, inputLabel);
    stickers = Array.prototype.concat.apply(stickers, themeQube);
    stickers = Array.prototype.concat.apply(stickers, buttons);
    
    for(i=0;i<stickers.length;i++) {
      var borderRadius = "";
      if(stickers[i].classList.contains("personal-menu")){
        borderRadius = stickerShapeGenerator(4, 8);
      } else {
        borderRadius = stickerShapeGenerator();
      }
      stickers[i].style.borderRadius = borderRadius;
    }
}

function goTo(page) {
  // console.log("Going to " + page + "!");
  if(document.getElementsByClassName("active").length > 0) {
    document.getElementsByClassName("active")[0].classList.remove("active");
  }
  if(page!=="home") {
    document.getElementById(page).classList.add("active");
  }

  openCloseMenu();
}

function getRandomEm(min, max) {
  var randomNumber = 10;
  while(randomNumber < min || randomNumber > max) {
    randomNumber = Math.random() + (0-9+1) + 0;
    randomNumber = randomNumber.toString()[3];
  }
  const random = Math.random() < 0.5;

  if(random) {
    randomNumber = `${randomNumber}em`;
  } else {
    randomNumber = `.${randomNumber}em`;
  }
  
  return randomNumber;
}

function stickerShapeGenerator(min, max) {
  // const randomBorderRadius = '3em .5em 2em .5em/.4em 2em .5em 3em';
  var randomBorderRadius = "";
  var randomNumber = "";

  if(min === undefined) {
    const min = 0;
    const max = 5;
  }

  randomNumber = getRandomEm(min, max);
  randomBorderRadius = `${randomBorderRadius}${randomNumber} `;
  randomNumber = getRandomEm(min, max);
  randomBorderRadius = `${randomBorderRadius}${randomNumber} `;
  randomNumber = getRandomEm(min, max);
  randomBorderRadius = `${randomBorderRadius}${randomNumber} `;
  randomNumber = getRandomEm(min, max);
  randomBorderRadius = `${randomBorderRadius}${randomNumber} / `;
  randomNumber = getRandomEm(min, max);
  randomBorderRadius = `${randomBorderRadius}${randomNumber} `;
  randomNumber = getRandomEm(min, max);
  randomBorderRadius = `${randomBorderRadius}${randomNumber} `;
  randomNumber = getRandomEm(min, max);
  randomBorderRadius = `${randomBorderRadius}${randomNumber} `;
  randomNumber = getRandomEm(min, max);
  randomBorderRadius = `${randomBorderRadius}${randomNumber}`;
  
  return randomBorderRadius;
}

function openLink(link) {
  window.open(link, '_blank').focus();
}
