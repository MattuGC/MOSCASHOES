// general.js

// Función para obtener el valor de una variable CSS
function getCssVariable(variable) {
  return getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
}

document.addEventListener("DOMContentLoaded", () => {
    loadProducts();
    setupLanguageSelector();
    setAllBorderRadius();
    setRandomRotation('figure-hover');
    setRandomRotation('category');
    // document.addEventListener('contextmenu', event => event.preventDefault());
});
  
function setBorderRarius(stickers){
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

function setAllBorderRadius() {
    const contextTitle = document.getElementsByClassName("context-title");
    const countryList = document.getElementsByClassName("country-list-hover-style");
    const secundaryMenu = document.getElementsByClassName("personal-menu");
    const inputLabel = document.getElementsByClassName("input-label");
    const themeQube = document.getElementsByClassName('theme-qube');
    const buttons = document.getElementsByClassName('button');
    const curiousFrame = document.getElementsByClassName('curious-frame');
    const backgroundCloth = document.getElementsByClassName('background-cloth');
    const page = document.getElementsByClassName('page');
    const productPopUp = document.getElementsByClassName('product-pop-up');
    const changeCategory = document.getElementsByClassName('change-category');
    const closeProduct = document.getElementsByClassName('close-product');

    var stickers = [];
    stickers = Array.prototype.concat.apply(stickers, contextTitle);
    stickers = Array.prototype.concat.apply(stickers, countryList);
    stickers = Array.prototype.concat.apply(stickers, secundaryMenu);
    stickers = Array.prototype.concat.apply(stickers, inputLabel);
    stickers = Array.prototype.concat.apply(stickers, themeQube);
    stickers = Array.prototype.concat.apply(stickers, buttons);
    stickers = Array.prototype.concat.apply(stickers, curiousFrame);
    stickers = Array.prototype.concat.apply(stickers, backgroundCloth);
    stickers = Array.prototype.concat.apply(stickers, page);
    stickers = Array.prototype.concat.apply(stickers, productPopUp);
    stickers = Array.prototype.concat.apply(stickers, changeCategory);
    stickers = Array.prototype.concat.apply(stickers, closeProduct);

    setBorderRarius(stickers);
}

function setRandomRotation(className) {
  let min = -5;
  let max = 5;
  var elements = document.getElementsByClassName(className);
  var deg;
  var leftRight;
  for(i=0;i<elements.length;i++) {
    deg = Math.random() * (max - min + 1) + min;
    elements[i].style.webkitTransform = 'rotate(' + deg + 'deg)';
    elements[i].style.mozTransform    = 'rotate(' + deg + 'deg)';
    elements[i].style.msTransform     = 'rotate(' + deg + 'deg)';
    elements[i].style.oTransform      = 'rotate(' + deg + 'deg)';
    elements[i].style.transform       = 'rotate(' + deg + 'deg)';
  }
}

function goTo(page) {
  // console.log("Going to " + page + "!");
  if( document.getElementsByClassName("active").length === 0 && page === 'home') {
    return;
  } else {
    throwRetractCloths(false);
    if(document.getElementsByClassName("active").length > 0) {
        document.getElementsByClassName("active")[0].classList.remove("active");
    }
    if(page!=="home") {
      document.getElementById(page).classList.add("active");
      throwRetractCloths(true);
    }
  
    openCloseMenu();
  }
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

function pxToVHVW(pxQuantity, type, typeOrigin) {
  if(type==='vh') {
    let screenHeight = window.innerHeight;
    let vhQuantity = (pxQuantity/screenHeight) * 100;
    console.log('vhQuantity: ' + vhQuantity);
    
    return vhQuantity + 'vh';
  } else if (type==='vw') {
    let screenWidth = window.innerWidth;
    let vwQuantity = (pxQuantity/screenWidth) * 100;
    console.log('vwQuantity: ' + vwQuantity);
    return vwQuantity;
  } else if (type==='px') {
    if(typeOrigin==='vh') {
      let screenHeight = window.innerHeight;
      pxQuantity = (screenHeight / 100) * pxQuantity;
      console.log('pxQuantity: ' + pxQuantity);
    } else if(typeOrigin==='vw') {
      let screenWidth = window.innerWidth;
      pxQuantity = (screenWidth / 100) * pxQuantity;
      console.log('pxQuantity: ' + pxQuantity);
    }
  }
}
