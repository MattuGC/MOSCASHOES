// general.js

document.addEventListener("DOMContentLoaded", () => {
    loadProducts();
    setupLanguageSelector();
    setBorderRarius();
  });
  
  function setBorderRarius(){
    const contextTitle = document.getElementsByClassName("context-title");
    const countryList = document.getElementsByClassName("country-list-hover-style");
    var stickers = [];
    stickers = Array.prototype.concat.apply(stickers, contextTitle);
    stickers = Array.prototype.concat.apply(stickers, countryList);
    
    for(i=0;i<stickers.length;i++) {
      const borderRadius = stickerShapeGenerator();
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

function stickerShapeGenerator() {
  // const randomBorderRadius = '3em .5em 2em .5em/.4em 2em .5em 3em';
  const min = 0;
  const max = 5;
  var randomBorderRadius = "";
  var randomNumber = "";

  randomNumber = getRandomEm(1, 5);
  randomBorderRadius = `${randomBorderRadius}${randomNumber} `;
  randomNumber = getRandomEm(1, 5);
  randomBorderRadius = `${randomBorderRadius}${randomNumber} `;
  randomNumber = getRandomEm(1, 5);
  randomBorderRadius = `${randomBorderRadius}${randomNumber} `;
  randomNumber = getRandomEm(1, 5);
  randomBorderRadius = `${randomBorderRadius}${randomNumber} / `;
  randomNumber = getRandomEm(1, 5);
  randomBorderRadius = `${randomBorderRadius}${randomNumber} `;
  randomNumber = getRandomEm(1, 5);
  randomBorderRadius = `${randomBorderRadius}${randomNumber} `;
  randomNumber = getRandomEm(1, 5);
  randomBorderRadius = `${randomBorderRadius}${randomNumber} `;
  randomNumber = getRandomEm(1, 5);
  randomBorderRadius = `${randomBorderRadius}${randomNumber}`;
  
  return randomBorderRadius;
}

function openLink(link) {
  window.open(link, '_blank').focus();
}
