var bg
var astranaut,sleep,brush,gym,eat,drink,move,Bath;
function preload() {
  bg=loadImage("iss.png")
  sleep=loadAnimation("sleep.png")
  brush=loadAnimation("brush.png")
  gym=loadAnimation("gym11.png","gym12.png")
  eat=loadAnimation("eat1.png","eat2.png")
  drink=loadAnimation("drink1.png","drink2.png")
  move=loadAnimation("move.png","move1.png")
  Bath=loadAnimation("bath1.png","bath2.png")

}
function setup() {
  createCanvas(700,400);
 astranaut=createSprite(350, 200, 50, 50);
 astranaut.addAnimation("sleeping",sleep)
    astranaut.changeAnimation("sleeping",sleep)
 astranaut.scale=0.08
}

function draw() {
  background(bg); 
  if(keyDown("UP_ARROW")){
    astranaut.addAnimation("brushing",brush)
    astranaut.changeAnimation("brushing",brush)
    astranaut.velocityY=0
    astranaut.velocityX=0
  }
  if(keyDown("DOWN_ARROW")){
    astranaut.addAnimation("gyming",gym)
    astranaut.changeAnimation("gyming",gym)
    astranaut.y=250
    astranaut.velocityY=0
    astranaut.velocityX=0
  }
  if(keyDown("LEFT_ARROW")){
    astranaut.addAnimation("eating",eat)
    astranaut.changeAnimation("eating",eat)
    astranaut.velocityY=0
    astranaut.velocityX=0
  }
  if(keyDown("RIGHT_ARROW")){
    astranaut.addAnimation("Bathing",Bath)
    astranaut.changeAnimation("Bathing",Bath)
    astranaut.velocityY=0
    astranaut.velocityX=0
  }
  if(keyDown("m")){
    astranaut.addAnimation("Moving",move)
    astranaut.changeAnimation("Moving",move)
    astranaut.velocityY=-2
    astranaut.velocityX=2
  }
  drawSprites();
}