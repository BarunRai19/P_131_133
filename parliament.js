img="";

function preload(){
  img=loadImage("parliament.jpg");  
}
function setup(){
  canvas=createCanvas(640, 420);
  canvas.center();
}
function draw(){
    image(img, 0, 0, 640, 420);
    fill("red");
    stroke("red");
    noFill();
    text("Old Parliament", 248, 46);
    rect(242, 50, 260, 150);
    fill("red");
    stroke("red");
    noFill();
    text("New Parliament", 124, 156);
    rect(120, 160, 380, 250);
}