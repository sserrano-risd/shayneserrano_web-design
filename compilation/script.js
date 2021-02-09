var colors = {
    r:0,
    g:0,
    b:0,
}
var circwidth = {
    w:0,
}

var circloc = {
    x:0,
    y:0,
}

function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
}
function setup(){
    canvas = createCanvas(windowWidth,windowHeight);
    canvas.position(0,0);
    canvas.style('z-index','-1');
    background(0);
    frameRate(30);

}
function draw(){
    circwidth.w = random(10,150);
    circloc.x = random(0,windowWidth);
    circloc.y = random(0,windowHeight);
    colors.r = random(0,255);
    colors.g = random(0,255);
    colors.b = random(0,255);
    noFill();
    stroke(colors.r,colors.g,colors.b);
    circle(circloc.x,circloc.y,circwidth.w);
}

// $("div").mouseover(function () {
//     $("div").css('background-color','105, 165, 255');
// });

// $("div").mouseout(function () {
//     $("div").css('color','0,0,0');
// });
