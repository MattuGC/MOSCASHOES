function resetClothBorderRadius() {
    const backgroundCloth = document.getElementsByClassName('background-cloth');
    setBorderRarius(backgroundCloth);
}

var closePosition = [
    {
        'top': '-11vh',
        'left': '-111vw',
        'transform': 'rotate(1deg)'
    },
    {
        'top': '22vh',
        'left': '222vw',
        'transform': 'rotate(2deg)'
    },
    {
        'top': '133vh',
        'left': '333vw',
        'transform': 'rotate(3deg)'
    },
    {
        'top': '144vh',
        'left': '-244vw',
        'transform': 'rotate(4deg)'
    }
]

var openPosition = [
    {
        'top': 'calc(var(--logo-banner-height) + var(--rolling-box-height) + 2.9vh)',
        'left': '5.2vw',
        'transform': 'rotate(1.8deg)'
    },
    {
        'top': 'calc(var(--logo-banner-height) + var(--rolling-box-height) + 1.5vh)',
        'left': '1.7vw',
        'transform': 'rotate(-1.1deg)'
    },
    {
        'top': 'calc(var(--logo-banner-height) + var(--rolling-box-height) + 4.9vh)',
        'left': '4.2vw ',
        'transform': 'rotate(1.5deg)'
    },
    {
        'top': 'calc(var(--logo-banner-height) + var(--rolling-box-height) + 4.9vh)',
        'left': '6vw',
        'transform': 'rotate(4deg)'
    }
]

function throwRetractCloths(open){
    var backgroundCloth = document.getElementsByClassName('background-cloth');

    var addClass;
    var positionDataList = null;
    if(open) {
        positionDataList = Object.assign([{}],openPosition);
    } else {
        positionDataList = Object.assign([{}],closePosition);
    }

    let position = null;
    var positionData = null;
    let arrayIndex = [0,1,2,3];
    
    for(i=0;i<backgroundCloth.length;i++) {
        position = Math.floor(Math.random() * arrayIndex.length);
        positionData = positionDataList[position];

        backgroundCloth[i].style.top = positionData['top'];
        backgroundCloth[i].style.left = positionData['left'];
        backgroundCloth[i].style.transform = positionData['transform'];
        arrayIndex.splice(position, 1);
        positionDataList.splice(position, 1);
    }
}
