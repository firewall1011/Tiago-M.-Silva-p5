var bixinho;

function setup() {
  createCanvas(400, 600);
  bixinho = new Bixinho(width/2, height/2)
}

function mouse(){
  if(bixinho.inRange(mouseX, mouseY)){
    bixinho.move(mouseX, mouseY);
  }
}

function draw() {
  background(0);
  mouse();
  bixinho.show();
}
