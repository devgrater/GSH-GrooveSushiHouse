var COMBO_COUNT = 0;

function doCombo(level){
    COMBO_COUNT += 1;
    console.log(level);
    fishstage.fish_hit_fx.playSpriteAnimation();
}


function doMiss(){
    COMBO_COUNT = 0;
}