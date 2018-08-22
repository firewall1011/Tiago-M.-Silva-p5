class Objective{
  constructor(_pos, _size, _color){
    this.pos = _pos;
    this.size = _size;
    this.color = _color;
  }

  show(){
    noStroke();
    fill(this.color);
    rect(this.pos.x, this.pos.y, this.size.x, this.size.y);
  }

  collision(objx, objy, objsx, objsy){
    return !(this.pos.x > objx + objsx || this.pos.x + this.size.x < objx || this.pos.y + this.size.y < objy || this.pos.y > objy + objsy);
  }

}
