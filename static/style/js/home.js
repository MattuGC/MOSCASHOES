function throwSticker(stickerID) {
    var sticker = document.getElementById(stickerID);
    const sideSticker = sticker.style.height;
  
    let top = Math.random() * (100 - sideSticker); // 100% - 10vh
    let left = Math.random() * (100 - sideSticker); // 100% - 10vh
    // let rotation = Math.random() * 360; // Rotación entre 0 y 360 grados
    let rotation = stickerThrowPower * 360;

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

var timer;
let stickerThrowPower = 0;
function chargeThrow(throwSticker){
    if(!throwSticker) {
        timer=setInterval(function(){
            if (stickerThrowPower < getCssVariable('--power-limit')){
                stickerThrowPower++;
                if (stickerThrowPower > 20) {
                    console.log('Sticker Throw Power: ' + stickerThrowPower);
                }
            }
            
        }, 100); // Every 100 ms.
    } else {
        clearInterval(timer);
        stickerThrowPower = 0;
    }
}

var homeBoots = document.getElementById('home-boots');
homeBoots.addEventListener("mousedown", function(){
    chargeThrow(false);
});

homeBoots.addEventListener("mouseup", function(){
    throwSticker('home-boots')
    chargeThrow(true);
});

var prodManufact = document.getElementById('home-prod-manufact');
prodManufact.addEventListener("mousedown", function(){
    chargeThrow(false);
});

prodManufact.addEventListener("mouseup", function(){
    throwSticker('home-prod-manufact')
    chargeThrow(true);
});
