class Card{
  constructor(_figure, _color, _pos = createVector(width/10, height/100+height/1.2)){
    this.figure = _figure;//floor(random(0,15));
    this.color = this.colorPicker(_color);
    this.pos = _pos;
    this.Rw = 50;
    this.Rh = 80;
    this.colorId = _color;
    this.scale = 1;
  }

  show(){

    fill(this.color);
    if(this.scale == 1.5){
      rect(this.pos.x, this.pos.y - this.Rh * this.scale, this.Rw * this.scale, this.Rh * this.scale);
      fill(255);
      ellipse(this.pos.x+(25 * this.scale), this.pos.y + ((40 - this.Rh) * this.scale)  , 45 * this.scale, 45 * this.scale);
      this.figurePicker();
    }else{
      rect(this.pos.x, this.pos.y, this.Rw, this.Rh);
      fill(255);
      ellipse(this.pos.x+25, this.pos.y+40, 45, 45);
      this.figurePicker();
    }

  }

  figurePicker(){
    if(this.figure < 10){
      textSize(50 * this.scale);
      stroke(0);
      fill(this.color);
      if(this.scale == 1.5) text(this.figure, this.pos.x+(12*this.scale), this.pos.y+59*this.scale - this.Rh*this.scale);
      else text(this.figure, this.pos.x+12, this.pos.y+59);
    } else{
      if(this.figure == 10){
        textSize(35 * this.scale);
        stroke(0);
        fill(this.color);
        if(this.scale == 1.5) text('+2', this.pos.x+2*this.scale, this.pos.y+55*this.scale - this.Rh*this.scale);
        else text('+2', this.pos.x+2, this.pos.y+55);
      }
      else if(this.figure == 11){
        textSize(35*this.scale);
        if(this.scale == 1.5){
          fill(this.color);
          ellipse(this.pos.x+(25*this.scale), this.pos.y+((40-this.Rh)*this.scale), 30*this.scale, 30*this.scale);
          stroke(0);
          fill(255);
          text('/', this.pos.x+20*this.scale, this.pos.y+53*this.scale - this.Rh*this.scale);
        }
        else{
          fill(this.color);
          ellipse(this.pos.x+25, this.pos.y+40, 30, 30);
          stroke(0);
          fill(255);
          text('/', this.pos.x+20, this.pos.y+53);
        }
      }
      else if(this.figure == 12){
        textSize(30*this.scale);
        stroke(0);
        fill(this.color);
        if(this.scale == 1.5){
          text('<-', this.pos.x+10*this.scale, this.pos.y+((40-this.Rh)*this.scale));
          text('->', this.pos.x+12*this.scale, this.pos.y+((60-this.Rh)*this.scale));
        }
        else{
          text('<-', this.pos.x+10, this.pos.y+40);
          text('->', this.pos.x+12, this.pos.y+60);
        }

      }
      else if(this.figure == 13){
        this.fourColors();
        this.color = [0, 0, 0];
      }
      else if(this.figure == 14){
        this.fourColors();
        textSize(30*this.scale);
        stroke(0);
        fill(245);
        if(this.scale == 1.5) text('+4', this.pos.x+8*this.scale, this.pos.y+((53-this.Rh)*this.scale));
        else text('+4', this.pos.x+8, this.pos.y+53);
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
    if(this.scale == 1.5){
      fill(255, 0, 0);
      rect(this.pos.x+10*this.scale, this.pos.y+(25-this.Rh)*this.scale, 15*this.scale, 15*this.scale);
      fill(0, 0, 255);
      rect(this.pos.x+25*this.scale, this.pos.y+(25-this.Rh)*this.scale, 15*this.scale, 15*this.scale);
      fill(0, 255, 0);
      rect(this.pos.x+10*this.scale, this.pos.y+(40-this.Rh)*this.scale, 15*this.scale, 15*this.scale);
      fill(255, 255, 0);
      rect(this.pos.x+25*this.scale, this.pos.y+(40-this.Rh)*this.scale, 15*this.scale, 15*this.scale);
    }
    else{
      fill(255, 0, 0);
      rect(this.pos.x+10, this.pos.y+25, 15, 15);
      fill(0, 0, 255);
      rect(this.pos.x+25, this.pos.y+25, 15, 15);
      fill(0, 255, 0);
      rect(this.pos.x+10, this.pos.y+40, 15, 15);
      fill(255, 255, 0);
      rect(this.pos.x+25, this.pos.y+40, 15, 15);
    }
  }

  collision(){
    if(mouseX < this.pos.x + this.Rw && mouseX > this.pos.x && mouseY > this.pos.y && mouseY < this.pos.y + this.Rh) return true;
    else return false;
  }

  expand(){
    if(this.collision()){
      this.scale = 1.5;
    }
    else{
      this.scale = 1;
    }
  }

}
