function changePowerLimit() {
    var newPowerElement = document.getElementById('power-limit');
    const newPower = newPowerElement.value;
    var variables = document.querySelector(':root');

    if (newPower) {
        variables.style.setProperty('--power-limit', newPower);
        newPowerElement.placeholder = newPower;
    }
}

const curiousElement = document.getElementById('curious');
curiousElement.addEventListener('click', function(event) {
    if( event.target !== this) return;
    curiousElement.style.transform = "translate(100vw, 100vh)";
    newPlace();
});

function newPlace() {
    let top = Math.random();
    let left = Math.random();
    let rotation = Math.random() * 360;
    var curiousContextTitle = document.getElementById('curious-context-title');

    curiousContextTitle.style.top = `${top}vh`;
    curiousContextTitle.style.left = `${left}vh`;
    curiousContextTitle.style.transform = `rotate(${rotation}deg)`;
}

var powerSelector = document.getElementById('power-selector');
powerSelector.addEventListener('click', function () {
    let top = Math.random() * 11;
    let left = Math.random() * 33;
    let rotation = Math.random() * 360;
    curiousElement.style.position = 'sticky';
    curiousElement.style.transform = `rotate(${rotation}deg)`;
    curiousElement.style.top = `${top}vh`;
    curiousElement.style.left = `${left}vh`;
    newPlace();
});
