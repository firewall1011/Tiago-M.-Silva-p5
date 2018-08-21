var ship = [];
var passed = 0;

function setup() {
  createCanvas(800, 400);
  for(let i = 0; i < 10; i++){
    ship.push(new Ship(20, height/2, [random(30), random(30)]));
  }
}

function draw() {
  background(150, 20, 20);
  noStroke();
  fill(50, 150, 50);
  rect(width-20, 0, 20, height);
  for(let i = 0; i < ship.length; i++){
    if(ship[i].run()) reset();
    if(ship[i].move()) passed += 1;
  }
  if(passed == ship.length) reset();
}

function reset(){
  crossOver();
  for(let i = 0; i < 10; i++){
    ship[i].x = 0;
    ship[i].y = height/2;
  }
  passed = 0;
}

function crossOver(){
  let best = findBest();
  for(let i = 0; i < ship.length; i++){
    ship[i].speed[0] = (ship[i].speed[0] + best.speed[0])/2;
    ship[i].speed[1] = (ship[i].speed[1] + best.speed[1])/2;
  }
  mutate();
}

function findBest(){
  let best = new Ship(0, 0, [0, 0]);
  best.points = 10000000;
  for(let i = 0; i < ship.length; i++){
    if(ship[i].points < best.points) best = ship[i];
  }
  return best;
}

function mutate(){
  for(let i = 0; i < ship.length; i++){
    ship[i].speed[0] += random(-0.2, 0.2);
    ship[i].speed[1] += random(-0.2, 0.2);
  }
}
