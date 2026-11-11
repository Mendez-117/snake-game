let grid_width = 460;
let grid_height = 460;
let starting_segments = 3;
let xStart = 23;
let yStart = 0;
let direction = right;
let segments = [];
let score = 0;
let fruit;
function setup() {
    var canvas = createCanvas(460,460);
    canvas.parent('myCanvas');
    strokeWeight(0);
    frameRate(10);
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

function fruit_coords(){
    let apple_position_x = ((Math.floor((Math.random())*20))*23)+11.5;
    let apple_position_y = ((Math.floor((Math.random())*20))*23)+11.5;fill('#FF3B30');
    ellipse(apple_position_x,apple_position_y,15,15);
}

function gameStart(){
    fruit_coords();
    segments = []
    for(let x = xStart; x < xStart + starting_segments; x++){
        let segmentPosition = createVector(x,yStart);
        segments.unshift(segmentPosition);
    }
    score = 0;
    gameStarted = true;
    loop();
}

function showSegments(){
    noFill();
    stroke(96,255,64);
    beginShape();
    for(let segment of segments){
        vertex(segment.x, segment.y);
        
    }
}


function draw(){
    strokeWeight(0);
    fill('#ADFF2F');
    showSegments();
    check_for_collision();
    check_for_fruit();
    updateSegments();
}