class Ship{
  constructor(_x, _y, _speed){
    this.x = _x;
    this.y = _y;
    this.speed = _speed;
    this.points = 0;
    this.death = false;
  }

  run(){
    this.move();
    this.show();
    if(this.score()) return true;
    return false;
  }

  move(){
    this.x += this.speed[0];
    this.y += this.speed[1];
    if(this.y < 0 || this.y + 10 > height || this.x < 0){
      this.speed = [0, 0];
      this.death = true;
      this.points += 1000;
      return true;
    }
    return false;
  }

  show(){
    stroke(168);
    fill(0);
    rect(this.x, this.y, 10, 10);
  }

  score(){
    let steps = 0;
    steps++;
    if(this.win()){
      this.points -= 100;
      return true;
    }
    if(!this.death){
      this.points = (width-20) - (this.x+10);
      this.points += steps/frameRate();
    }

    return false;
  }

  win(){
    return (this.x + 10 >= width-20)
  }




}
