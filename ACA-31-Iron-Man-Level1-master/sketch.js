
var bg, backgroundImg;

function preload() {
  backgroundImg = loadImage("images/bg.jpg");
  IronImg = loadImage("images/iron.png");
 
}

function setup() {
  createCanvas(1000, 600);
  background("black")
  bg = createSprite(580,300);
  bg.addImage(backgroundImg)
  
  iron=createSprite(550,540)
  iron.addImage(IronImg)
  iron.scale=0.2
}

function draw() {
  
if(bg.x<320){
    bg.x=bg.width/5.2
  }

  if(keyDown("a")){
    iron.x-=6
}    
if(keyDown("d")){
  iron.x+=6
}
if(keyDown("w")){
  iron.y-=6
}
if(keyDown("s")){
    iron.y+=6
}
    drawSprites();
   

}

