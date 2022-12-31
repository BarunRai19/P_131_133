img="";

function preload(){
  img=loadImage("CentralVista.jpg");  
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
    text("Rashtrapati Bhawan", 282, 18);
    rect(280, 20, 115, 38);
    fill("red");
    stroke("red");
    noFill();
    text("India Gate", 282,177);
    rect(280, 180, 100, 100);
    fill("red");
    stroke("red");
    noFill();
    text("Netaji Subhas Cahandra Bose statue", 220,326);
    rect(295, 330, 60, 80);
}