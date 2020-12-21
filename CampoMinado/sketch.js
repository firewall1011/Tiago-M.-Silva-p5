var rows, cols;
var scl = 25;
var grid = [];

function setup(){
  createCanvas(scl*20+1, scl*20+1);
  rows = floor(height/scl);
  cols = floor(width/scl);
  generateGrid();
}

function draw(){
  background(100);
  for(let a in grid){
     grid[a].show();
  }
}

function generateGrid(){
  for(let i = 0; i < rows; i++)
    for(let j = 0; j < cols; j++){
      grid.push(new Cell(i*scl, j*scl));
      grid[i*rows + j].setBomb();
    }
}
