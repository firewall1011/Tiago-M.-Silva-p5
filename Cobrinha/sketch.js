var score = 0;
var snake;
var s = 20;
var gameSpeed = 10;
var food;
var poison;
var candy;
var runTimer = false;
var timer = 0;
var text_;
var Description = 'Voce eh uma centopeia, seu objetivo eh alcançar seus 100 pés, desbloqueando seu poder (1, 2, 3)';

function setup() {
  createCanvas(1000, 800);
  snake = new Snake(s);
  frameRate(gameSpeed);
  food = createVector(this.x, this.y);
  poison = createVector(this.x, this.y);
  candy = createVector(this.x, this.y);
  pickLocation();
  pickLocationP();
  pickLocationC();
}

function draw() {
  frameRate(gameSpeed);
  background(0, 175, 0);
  createBorders();
  snake.death();
  snake.move();
  snake.show();
  if(snake.eat(food)){
    pickLocation();
    pickLocationP();
    pickLocationC();
    if(!(snake.total % 10)) gameSpeed += 3;
  }
  if(snake.eat(poison)){
    pickLocation();
    pickLocationP();
    pickLocationC();
    snake.total = 0;
    snake.tail = [];
    gameSpeed = 10;
  }
  if(snake.eat(candy)){
    pickLocation();
    pickLocationP();
    pickLocationC();
    timer = 0;
    if(!runTimer)gameSpeed += 10;
    runTimer = true;
    if(!(snake.total % 10)) gameSpeed += 3;
  }

  score = snake.total;
  text_ = 'Score: ' + score;
  fill(255);
  textSize(s);
  text(text_, s, 0, width-s, height-s);
  text(Description, 6*s, 0, width-s, height-s);
  candyTimer();

  fill(255, 0, 100);
  rect(food.x, food.y, s, s);
  fill(0, 0, 255);
  rect(poison.x, poison.y, s, s);
  fill(100, 100, 0);
  rect(candy.x, candy.y, s, s);

}

function candyTimer(){
  if(runTimer) timer++;
  if(timer > 10*gameSpeed){
    runTimer = false;
    if(gameSpeed != 10) gameSpeed -= 10;
    timer = 0;
  }
}

function pickLocation(){
    let cols = floor(width/s);
    let rows = floor(height/s);
    food = createVector(floor(random(cols)), floor(random(rows)));
    food.mult(s);
    if(food.x + s > width-s) food.x = s;
    if(food.x < s) food.x = width-2*s;
    if(food.y + s > height-s) food.y = s;
    if(food.y < s) food.y = height-2*s;
    for(a in snake.tail){
      if(food.x == a.x && food.y == a.y) pickLocation();
    }
    if(food.x == snake.x && food.y == snake.y) pickLocation();
}

function pickLocationP(){
    let cols = floor(width/s);
    let rows = floor(height/s);
    poison = createVector(floor(random(cols)), floor(random(rows)));
    poison.mult(s);
    if(poison.x + s > width-s) poison.x = s;
    if(poison.x < s) poison.x = width-2*s;
    if(poison.y + s > height-s) poison.y = s;
    if(poison.y < s) poison.y = height-2*s;
    for(a in snake.tail){
      if(poison.x == a.x && poison.y == a.y) pickLocationP();
    }
    if(poison.x == snake.x && poison.y == snake.y) pickLocationP();
}

function pickLocationC(){
    let cols = floor(width/s);
    let rows = floor(height/s);
    candy = createVector(floor(random(cols)), floor(random(rows)));
    candy.mult(s);
    if(candy.x + s > width-s) candy.x = s;
    if(candy.x < s) candy.x = width-2*s;
    if(candy.y + s > height-s) candy.y = s;
    if(candy.y < s) candy.y = height-2*s;
    for(a in snake.tail){
      if(candy.x == a.x && candy.y == a.y) pickLocationC();
    }
    if(candy.x == snake.x && candy.y == snake.y) pickLocationC();
}

function keyPressed(){
      snakeKeyTest(keyCode);
      if(snake.total >= 99) snake.powerFunc(keyCode);
}

function snakeKeyTest(keyCode){
  if(keyCode == UP_ARROW && snake.speed[1] != s) snake.speed = [0, -s];
  else if(keyCode == DOWN_ARROW && snake.speed[1] != -s) {
    snake.speed = [0, s];
    if(snake.speed = [0, -20]) snake.speed = [0, 20];
  }
  else if(keyCode == RIGHT_ARROW && snake.speed[0] != -s){
    snake.speed = [s, 0];
    if(snake.speed = [-20, 0]) snake.speed = [20, 0];
  }
  else if(keyCode == LEFT_ARROW && snake.speed[0] != s) snake.speed = [-s, 0];
}

function createBorders(){
  fill(130, 100, 20);
  stroke(100, 100, 0);
  rect(0, 0, s, height);
  rect(width-s, 0, s, height);
  rect(0, 0, width, s);
  rect(0, height-s, width, s);
}
