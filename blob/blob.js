class Blob{
  constructor(_x, _y){
    this.pos = createVector(_x, _y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
  }

  move(){
    this.vel.add(this.acc);
    this.vel.limit(vel_max);
    this.pos.add(this.vel);
  }

  get_acc(){
    let distance = dist(mouseX, mouseY, this.pos.x, this.pos.y);
    this.acc = p5.Vector.sub(createVector(mouseX, mouseY), this.pos).div(distance);
    this.acc.limit(acc_max);
  }

  update(){
    this.get_acc();
    if(!(dist(mouseX, mouseY, this.pos.x, this.pos.y) < 3))
      this.move();
    noStroke();
    fill(255);
    ellipse(0, 0, 50, 50);
  }



}
