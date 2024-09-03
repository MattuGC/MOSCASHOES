// function draggElement(img) {
//     img.onmousedown = event => {
//         event = event || window.event;
//         event.preventDefault();

//         let y = event.clientY;
//         let x = event.clientX;

//         window.onmousemove = event => {
//             event = event || window.event;
//             event.preventDefault();

//             y = y - event.clientY;
//             x = x - event.clientX;

//             let factor = 100;
//             let newY = (img.offsetTop - (y * factor));
//             img.style.top = newY + 'px';
//             let newX = (img.offsetLeft - (x * factor));
//             img.style.left = newX + 'px';

//             y = event.clientY;
//             x = event.clientX;
//         };

//         window.onmouseup = () => {
//             window.onmousemove = null;
//             window.onmouseup = null;
//             resetPosition(img);
//         }
//     }
// }

// function resetPosition(img) {
//     let imgWidth = img.offsetWidth;
//     let imgHeight = img.offsetHeight;
    
//     if(img.offsetLeft < 0) {
//         img.style.left = '0vw';
//     } else if(img.offsetLeft > window.innerWidth - imgWidth) {
//         let newLeft = window.innerWidth - imgWidth;
//         img.style.left = newLeft + "px";
//     }

//     const homeHeight = document.getElementById('home').offsetHeight;
//     if(img.offsetTop < 0) {
//         img.style.top = '0vh';
//     } else if(img.offsetTop > homeHeight - imgHeight) {
//         let newTop = homeHeight - imgHeight;
//         img.style.top = newTop + 'px';
//     }
// }

// draggElement(document.getElementById("home-boots"));

function throwSticker(stickerID) {
    var sticker = document.getElementById(stickerID);
    const sideSticker = sticker.style.height;
  
    let top = Math.random() * (100 - sideSticker); // 100% - 10vh
    let left = Math.random() * (100 - sideSticker); // 100% - 10vh
    // let rotation = Math.random() * 360; // Rotación entre 0 y 360 grados
    let rotation = stickerThorwPower * 360;

    if (Math.random()<0.5) {
        top = top * -1;
    }

    if (Math.random()<0.5) {
        left = left * -1;
    }
    
    if (Math.random()<0.5) {
        rotation = rotation * -1;
    }

    sticker.style.top = `${top}vh`;
    sticker.style.left = `${left}vh`;
    sticker.style.transform = `rotate(${rotation}deg)`;
}

let stickerThorwPower = 0;
var homeBoots = document.getElementById('home-boots');
var timer;
homeBoots.addEventListener("mousedown", function(){
     timer=setInterval(function(){
        if (stickerThorwPower < getCssVariable('--power-limit')){
            stickerThorwPower++;
            console.log('stickerThorwPower: ' + stickerThorwPower);
            
        }
        
     }, 100); // Every 100 ms.
});
homeBoots.addEventListener("mouseup", function(){
    throwSticker('home-boots')
    clearInterval(timer);
    stickerThorwPower = 0;
});
