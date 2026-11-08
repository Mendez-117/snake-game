function setup() {
    var canvas = createCanvas(460,460);
    canvas.parent('myCanvas');
    strokeWeight(0);
    for(let i = 0; i<20; i++){
        for(let j = 0; j<20; j++){
            if((i+j)%2==0){
                fill('#A3C5B2');
                rect((j*23),(i*23),23,23);
            } else if((i+j)%2 == 1){
                fill('#4B8B3B');
                rect((j*23),(i*23),23,23);
            }
        }
    }
}

function draw(){
    
}