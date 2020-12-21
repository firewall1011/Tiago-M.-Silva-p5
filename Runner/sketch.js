var groundCoord;
var player;
var playerSprite;
var obstacleSprite;
var gravitySpeed = 2;
var obstacles = [];
var ground;
var obsSpeed = 5;
var endGame = false;
var spawnTime = 150;

function setup() {
  createCanvas(1400, 450);
  groundCoord = [0, height-height/20, width, height/20];
  ground = height-height/10;
  playerSprite = loadImage('Assets/Sprites/player2.png');
  obstacleSprite = loadImage('Assets/Sprites/Obstacle.png');
  player = new Player(playerSprite);
  obstacles.push(new Obstacle(obstacleSprite));
}

function draw() {
  background(45, 0, 60);
  noStroke();
  fill(20, 10, 25);
  rect(groundCoord[0], groundCoord[1],groundCoord[2], groundCoord[3]);
  player.auto();
  obstaclesAuto();
}

function keyPressed(){
  if(keyCode === UP_ARROW && player.onGround){
    player.isJumping = true;
    //print("Jumping");
  }
  if(keyCode === ENTER && endGame){
    restart();
  }
}

function restart(){
  endGame = false;
  player.reconstruct();
  for(i = obstacles.length-1; i >= 0; i--){
    obstacles[i].x = 0;
    obstacles.splice(i, 1);
  }
  obstacles.push(new Obstacle(obstacleSprite));
  loop();
}

function obstaclesAuto(){
  if(frameCount%spawnTime == 0) obstacles.push(new Obstacle(obstacleSprite));
  for(i = 0; i < obstacles.length-1; i++){
    obstacles[i].auto();
    if(obstacles[i].collision(player)){
      noLoop();
      endGame = true;
    }
    if(obstacles[i].dead()) obstacles.splice(i, 1);
  }
}
