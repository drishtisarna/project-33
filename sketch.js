const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var snow;
var background,background2;
var background2,backgroundImg2;

function preload(){
  backgroundImg = loadImage("snow2.jpg");
  backgroundImg2 = loadImage("snow1.jpg");
}


function setup() {
  var canvas = createCanvas(1200,1000);

  var background = createSprite(800,400);
  background.addImage(backgroundImg);

}

function draw() {

  if(keyCode === 32){

    var background2 = createSprite(800,400);
    background2.addImage(backgroundImg2);
    background2.scale = 2.5;
 }

  background(255,255,255);  
  drawSprites();
}