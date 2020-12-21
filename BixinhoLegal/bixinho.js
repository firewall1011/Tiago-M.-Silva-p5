class Bixinho{
  constructor(x = 0, y = 0){
    this.pos = createVector(x, y);
    this.view_dist = 60;
    this.looking_dir = createVector(0, -1);
    this.view_angle = 120;
  }

  show(){
    color(255, 0, 0);
    ellipse(this.pos.x, this.pos.y, 10, 10);
  }

  inRange(x, y){
    let v = createVector(x, y);
    let dist = this.pos.copy().dist(v);
    let dir = v.sub(this.pos.copy());
    if(dist < this.view_dist){
      let ang = dir.angleBetween(this.looking_dir);
      print(ang);
      if( ang < PI/3){
        return true;
      }
    }
  }

  move(x, y){
    let v = createVector(x, y);
    v = this.pos.copy().sub(v);
    this.pos.add(v.normalize());
  }
}
