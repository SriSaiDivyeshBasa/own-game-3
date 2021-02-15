var bruse,bruseImg;
var daniel,danielImg;
var david,davidImg;

var hero,heroImg;

var enemy;

function preload(){
  bruseImg=loadImage("bruse.png");
  danielImg=loadImage("daniel.png");
  davidImg=loadImage("david.png");
  heroImg=loadImage("hero.png");
}

function setup() {
  createCanvas(displayWidth-20,displayHeight-30);

  hero=createSprite(690, 550, 50, 50);
  hero.addImage(heroImg);
  hero.scale=(0.5);
}

function draw() {
  background("black");  

    if (keyDown("up")){
        hero.velocityX=0;
        hero.velocityY=-2;
    }

    if (keyDown("down")){
      hero.velocityX=0;
      hero.velocityY=2;
  }

    if (keyDown("left")){
    hero.velocityX=-2;
    hero.velocityY=0;
  }

    if (keyDown("right")){
    hero.velocityX=2;
    hero.velocityY=0;
  }
  spawnEnemys();

  drawSprites();
}

function spawnEnemys(){
  if (frameCount%100===0){
      enemy=createSprite(0,0,10,10);
      enemy.x=Math.round(random(50,displayWidth-50));
      enemy.y=Math.round(random(50,displayHeight-50));

      var r=Math.round(random(1,3));
      switch(r){
        case 1:enemy.addImage(bruseImg);
        break;
        case 2:enemy.addImage(danielImg);
        break;
        case 3:enemy.addImage(davidImg);
        break;

      }
      enemy.scale=0.5;
      enemy.velocityX=Math.round(random(-5,5));
      enemy.velocityY=Math.round(random(-5,5));
    }

}