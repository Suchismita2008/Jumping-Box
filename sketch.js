var canvas;
var music;
var surface1, surface2, surface3, surface4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
surface1 = createSprite(95, 585, 200, 30);
surface1.shapeColor = "blue";
surface2 = createSprite(296, 585, 200, 30);
surface2.shapeColor = "orange";
surface3 = createSprite(497, 585, 200, 30);
surface3.shapeColor = "purple";
surface4 = createSprite(698, 585, 200 ,30);
surface4.shapeColor = "green";

box = createSprite(random(20, 770), 100, 40, 40);
box.velocityY = -5;
box.velocityX = -5;
box.shapeColor = "white";
}

function draw() {
    background(0,0,0);
    //create edgeSprite
    if(box.y<0)
    {
      box.velocityY = box.velocityY*-1;
    }
    if(box.x<0)
    {
      box.velocityX = box.velocityX*-1;
    }
    if(box.x>800)
    {
      box.velocityX = box.velocityX*-1;
    }
    
    if(surface1.isTouching(box) && box.bounceOff(surface1))
    {
        box.shapeColor = "blue";
        music.play();
    }
    if(surface2.isTouching(box))
    {
        box.shapeColor = "orange";
        box.velocityY = 0;
        box.velocityX = 0;
        music.stop();
    }
    if(surface3.isTouching(box) && box.bounceOff(surface3))
    {
        box.shapeColor = "purple";
        music.play();
    }
    if(surface4.isTouching(box) && box.bounceOff(surface4))
    {
        box.shapeColor = "green";
        music.play();
    }
    
   drawSprites(); //add condition to check if box touching surface and make it box
}
