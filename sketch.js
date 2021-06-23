var ship1,ship_moving;
var ship2,ship_Image;
var sea_1




function preload(){
sea_1 = loadImage("sea.png");
ship_Image= loadAnimation("ship-1.png","ship-2.png");
ship_Lights=loadAnimation("ship-3.png","ship-4.png");

}








function setup(){
  createCanvas(1500,1500);
  
sea=createSprite(60,60,15,15);
sea.addImage("moving_sea",sea_1);
sea.scale=0.8
sea.velocityX=-3


ship1=createSprite(175,350,10,10);
ship1.addAnimation("movingship",ship_Lights)
ship1.scale=0.4


ship2=createSprite(175,350,10,10);
    ship2.addAnimation("shipLights",ship_Image)
    ship2.scale=0.4 


    if (sea.x<0){
      sea.x=sea.width/2;  
    }
background("blue");

}



  
  

function draw() {
ship1.visible=false
drawSprites();
  
}