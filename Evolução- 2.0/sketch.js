var ship = [];
var population = 20;
var moveset = [];
var run_time = 240;
var objective;
var best;
var generation = 0;
var counter = 0;

function setup() {
  createCanvas(800, 400);
  objective = createVector(width-20, 0);
  for(let i = 0; i < population; i++){
    ship.push(new Ship(moveset, true));
  }
  best = ship[0];
}

function draw() {
  background(150, 20, 20);
  noStroke();
  fill(50, 150, 50);
  rect(width-20, 0, 20, height);
  for(let i = 0; i < ship.length; i++){
    ship[i].move();
    ship[i].show();
  }
  counter++;
  reset();

}

function reset(){
  if(counter % run_time == 0){
    generationCrossOver();
    generation++;
    counter = 0;
    run_time += 30;
  }
}

function generationCrossOver(){
  let at_best = findBest();
  if(at_best.points < best.points) best = at_best;
  for(let i = 0; i < ship.length; i++){
    ship[i].crossOver(best);
    ship[i].mutate();
  }
}

function findBest(){
  let at_best = ship[0];
  let bestId = 0;
  for(let i = 0; i < ship.length; i++){
    if(ship[i].points < at_best.points ){
      at_best = ship[i];
      bestId = i;
    }
  }
  return at_best;
}

function min_max(a, b, is = 0){
    if(is){
      if(a > b) return a;
      else return b;
    }
    else{
        if(a < b) return a;
        else return b;
    }
}
