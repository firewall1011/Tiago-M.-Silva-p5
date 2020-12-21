class Cell{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.bomb;
    this.active = false;
    this.neighboors = 0;
  }

  show(){
    stroke(0);
    if(!this.active){
      fill(200);
      rect(this.x, this.y, scl, scl);
    }
    else if(this.bomb){
        noFill();
        rect(this.x, this.y, scl, scl);
        fill(200, 100, 0);
        ellipse(this.x+scl/2, this.y-scl/2, scl/2, scl/2);
    }
    else{
      noFill();
      rect(this.x, this.y, scl, scl);
      fill(0);
      textSize(20);
      text(this.neighboors, this.x+scl/3, this.y-scl/7);
    }
  }

  setBomb(){
    let a = floor(random(0, 5));
    if(a <= 0) this.bomb = true;
    else this.bomb = false;
  }
}
