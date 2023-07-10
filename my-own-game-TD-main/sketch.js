
var doodlejump,characterimg
var background,backgroundimg
var obstacle,obstacleimg

function preload(){
  characterimg=loadImage("character.png");
  backgroundimg=loadImage('background.jpg');
  obstacleimg=loadImage("obstacle.jpeg");
}

function setup(){
  createCanvas(900,500)
  
  doodlejump=createSprite(450,400,20,20);
  doodlejump.addImage("character",characterimg);
  doodlejump.scale=0.2;

  ground=createSprite(450,480,900,5)
 
}

function draw(){
  background(backgroundimg);
 
  if (keyDown('space')){
    doodlejump.velocityY=-10;

  }
  doodlejump.velocityY+=0.8;
  
  doodlejump.collide(ground);
drawSprites()
} 