var ship = [];
var obstacles = [];
var population = 20;
var numObs = 3;
var run_time = 240;
var best;
var generation = 0;
var counter = 0;
var deathP = 100;
var fruit;

function setup() {
  createCanvas(800, 400);
  //Generating initial population
  for(let i = 0; i < population; i++){
    ship.push(new Ship());
    ship[i].initialize_md();
  }

  //Generating objective(fruit)
  let size = createVector(20, 20);
  let pos = createVector(width-20, height/2);
  let color = [0, 100, 0];
  fruit = new Objective(pos, size, color);

  //Generating obstacles
  for(let i = 0; i < numObs; i++){
    size = createVector(random(5, 20), random(5, 30));
    pos = createVector(random(width/3, width), random(height-size.y));
    color = [0];
    obstacles.push(new Objective(pos, size, color));
  }

  //Initializing best
  best = ship[0];
  best.points = 100000000;
}

function draw() {
  background(150, 20, 20);
  fruit.show();
  for(let i = 0; i < ship.length; i++){
    ship[i].move();
    ship[i].show();
    for(let j = 0; j < obstacles.length; j++){
      obstacles[j].show();
      ship[i].hitObs(obstacles[j]);
    }
  }
  counter++;
  reset();

}

function reset(){
  let deadss = 0;
  for(let i = 0; i < ship.length; i++) if(ship[i].death) deadss++;
  if(counter % run_time == 0 || deadss == ship.length){
    generationCrossOver();
    generation++;
    counter = 0;
    run_time += 30;
  }
}

function generationCrossOver(){
  best = findBest(best);
  for(let i = 0; i < ship.length; i++){
    ship[i].crossOver(best);
    ship[i].mutate();
  }
}

function findBest(at_best){
  //let bestId = 0;
  for(let i = 0; i < ship.length; i++){
    if(ship[i].points <= at_best.points ){
      at_best = ship[i];
      //bestId = i;
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
