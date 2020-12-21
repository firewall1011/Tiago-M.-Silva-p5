let ang = 0;

function setup() {
    createCanvas(400, 600, WEBGL);

}

function draw() {
  background(0);

  //rotateX(ang);
  rotateY(ang);
  //rotateZ(ang);
  ang += 0.1;

  former((t) => t-5, (t) => cos(t*7), (t) => sin(t)*sin(PI), 10, [-10, 10]);
}

function former(x, y, z, k, interval = [0, TWO_PI]){
  noFill();
  stroke(255);
  strokeWeight(1);
  //translate(width/2, height/2);
  scale(k, k, k);
  beginShape(POINTS);
  for(let i = interval[0]; i < interval[1]; i += 0.001){
    vertex(x(i), y(i), z(i));
    //console.log(x(i), y(i), z(i));
  }
  endShape();
}
