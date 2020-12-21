var vel_max = 3;
var acc_max = 5;

var player;

function setup() {
  createCanvas(600, 600);
  player = new Blob(width/2, height/2);
}

function draw() {

  background(0);
  ellipse(width/2,height/2, 100, 50);
  translate(player.pos.x, player.pos.y);
  player.update();

}
