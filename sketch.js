function setup() {
    var canvas = createCanvas(460,460);
    canvas.parent('myCanvas');
    strokeWeight(0);
    let apple_position_x = ((Math.floor((Math.random())*20))*23)+11.5;
    let apple_position_y = ((Math.floor((Math.random())*20))*23)+11.5;

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
    fill('#FF3B30');
    ellipse(apple_position_x,apple_position_y,23,23);
}

let length = 1;
let snake_position_x = 0;
let snake_position_y = 0;

function game_start(){
    rect()
}


function draw(){
    strokeWeight(0);
    fill('#ADFF2F');
    document.getElementById('start').onclick(game_start())
}