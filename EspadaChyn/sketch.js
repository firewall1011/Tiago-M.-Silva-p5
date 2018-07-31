var player;
var enemies = [];
var spawnEnemy = true;

function setup() {
    createCanvas(600, 400);
    player = new Player(width/2-15, -30);
    enemies.push(new Enemy());
}

function draw() {
  background(0);
  fill(100, 235, 10);
  noStroke();
  rect(0, height/1.5, width, height/3);
  fill(0, 100, 255);
  noStroke();
  rect(0, 0, width, height*2/3);
  translate(0, height/1.5);
  if(!(frameCount % 260) && spawnEnemy) enemies.push(new Enemy());
  for(let i = 0; i < enemies.length; i++){
    enemies[i].show();
    enemies[i].move(player);
    enemies[i].collide(player);
    if(enemies.length >= 3) spawnEnemy = false;
    else spawnEnemy = true;
  }
  player.move();
  player.show();

}

function keyPressed(){
  player.attack(keyCode);
}
