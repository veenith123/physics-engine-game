var snake ;
var rez = 20;
var food ;
var w;
var h;
var bgImg ;
var score = 0;
var length = 0;
var bgm ;

function preload(){
  bgImg = loadImage ("gameOverScreen.jpg")
}

function setup() {
  createCanvas(600, 500);
  w = floor(width/rez)
  h = floor(height/rez)
  frameRate(5);
  snake = new Snake();
  foodLocation();

}

function foodLocation(){
  var x = floor(random(w))
  var y = floor(random(h))
  food = createVector(x,y)
}

function keyPressed(){
  if (keyCode === LEFT_ARROW){
    snake.setDir(-1,0)
  } else if (keyCode === RIGHT_ARROW){
    snake.setDir(1,0)
  }else if (keyCode === DOWN_ARROW){
    snake.setDir(0,1)
  }else if (keyCode === UP_ARROW){
    snake.setDir(0,-1)
  }
}

function draw() {
  background("black");
noStroke();
  strokeWeight(0)
  fill("white")
  textFont("Alternate Gothic")
  textSize(25)
  text("Score : " + score, 40,40)

  scale(rez)

  if (snake.eat(food)){
    score = score+10 ;
    console.log(score);
    foodLocation();
  }
  
  snake.update();
  snake.show();

  if (snake.endGame()){
    console.log("Game ended");
    background(bgImg);
    snake.visible = false ;
    food.visible = false ;
    noLoop();
  }
  
  stroke("black");
  strokeWeight(0.1)
  fill(247,30,0)
  rect(food.x, food.y,1,1)

}
