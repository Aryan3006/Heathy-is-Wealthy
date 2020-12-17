var game
var yoga;
var yogaImg;
var health;
var step=1;
var eye
var eye_btn = false
var owls,owlImg,EyeT,Eyes;
function preload(){

yogaImg=loadImage("meditatio.webp")
owlImg=loadImage("Owl.jpg")
EyeT=loadImage("Eye Test.jpg")
}

function setup(){
    createCanvas(1350,650);
game=new breath()
health= new healthMeasures()
eye= new EyeTest()
}
function draw(){
    background(yogaImg);
    game.display()
   
eye.display();


health.display()
}


