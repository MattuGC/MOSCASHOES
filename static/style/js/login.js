function rememberPass(elementID) {
    rememberElement = document.getElementById(elementID);
    var rememberText = rememberElement.textContent;
    if(rememberElement.getAttribute('data-rememeber')==='0') {
        rememberElement.textContent = 'Yeah!';
        rememberElement.setAttribute('data-rememeber', '1');
        rememberElement.style.color = getCssVariable('--secundary-color');
    } else {
        rememberElement.textContent = 'Nope!'
        rememberElement.setAttribute('data-rememeber', '0');
        rememberElement.style.color = getCssVariable('--secundary-color-negative');
    }
}