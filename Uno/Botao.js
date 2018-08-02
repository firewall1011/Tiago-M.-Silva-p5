class Botao{
  constructor(_x, _y, str, tsize){
    this.x = _x;
    this.y = _y;
    this.tsize = tsize;
    this.str = str;
  }

  show(){
    fill(255);
    stroke(0);
    rect(this.x, this.y, 57, 22);
    fill(0);
    textSize(this.tsize);
    text(this.str, this.x+2, this.y+20);
  }

  collision(){
    if(mouseX < this.x + 57 && mouseX > this.x && mouseY > this.y && mouseY < this.y + 22) return true;
    else return false;
  }

}
