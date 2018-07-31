class Card{
  constructor(_figure, _color, _pos = createVector(width/10, height/100+height/1.2)){
    this.figure = _figure;//floor(random(0,15));
    this.color = this.colorPicker(_color);
    this.pos = _pos;
    this.Rw = 50;
    this.Rh = 80;
    this.colorId = _color;
  }

  show(){

    fill(this.color);
    rect(this.pos.x, this.pos.y, this.Rw, this.Rh);
    fill(255);
    ellipse(this.pos.x+25, this.pos.y+40, 45, 45);
    this.figurePicker();

  }

  figurePicker(){
    if(this.figure < 10){
      textSize(50);
      stroke(0);
      fill(this.color);
      text(this.figure, this.pos.x+12, this.pos.y+59);
    } else{
      if(this.figure == 10){
        textSize(35);
        stroke(0);
        fill(this.color);
        text('+2', this.pos.x+2, this.pos.y+55);
      }
      else if(this.figure == 11){
        fill(this.color);
        ellipse(this.pos.x+25, this.pos.y+40, 30, 30);
        textSize(35);
        stroke(0);
        fill(255);
        text('/', this.pos.x+20, this.pos.y+53);
      }
      else if(this.figure == 12){
        textSize(30);
        stroke(0);
        fill(this.color);
        text('<-', this.pos.x+10, this.pos.y+40);
        text('->', this.pos.x+12, this.pos.y+60);
      }
      else if(this.figure == 13){
        this.fourColors();
        this.color = [0, 0, 0];
      }
      else if(this.figure == 14){
        this.fourColors();
        textSize(30);
        stroke(0);
        fill(245);
        text('+4', this.pos.x+8, this.pos.y+53);
        this.color = [0, 0, 0];
      }
    }
  }

  colorPicker(_color){
    //let col = floor(random(0, 4));
    if(_color == 0){
      return [255, 0, 0];
    }
    else if(_color == 1){
      return [0, 255, 0];
    }
    else if(_color == 2){
      return [0, 0, 255];
    }
    else if(_color == 3){
      return [255, 255, 0];
    }
  }

  fourColors(){
    fill(255, 0, 0);
    rect(this.pos.x+10, this.pos.y+25, 15, 15);
    fill(0, 0, 255);
    rect(this.pos.x+25, this.pos.y+25, 15, 15);
    fill(0, 255, 0);
    rect(this.pos.x+10, this.pos.y+40, 15, 15);
    fill(255, 255, 0);
    rect(this.pos.x+25, this.pos.y+40, 15, 15);
  }

  collision(){
    if(mouseX < this.pos.x + this.Rw && mouseX > this.pos.x && mouseY > this.pos.y && mouseY < this.pos.y + this.Rh) return true;
    else return false;
  }

}
