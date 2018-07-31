function Snake(s){
  this.x = width/2;
  this.y = height/2;
  this.size = s;
  this.speed = [s, 0];
  this.total = 0;
  this.tail = [];
  var sColor = [0, 255, 0];

  this.show = function(){
    fill(sColor[0], sColor[1], sColor[2]);
    stroke(0);
    for(let i = 0; i < this.tail.length; i++){
        fill(sColor[0], sColor[1], sColor[2]);
        rect(this.tail[i].x, this.tail[i].y, this.size, this.size);
        fill(0);
        noStroke();
        if(this.speed[0] < 0 || this.speed[1] > 0) ellipse(this.tail[i].x+this.size, this.tail[i].y+this.size, 5, 5);
        else ellipse(this.tail[i].x, this.tail[i].y+this.size, 5, 5);
        stroke(0);
    }
    fill(sColor[0]+90, sColor[1]-55, sColor[2]+30);
    rect(this.x, this.y, this.size, this.size);
    fill(0);
    noStroke();
    if(this.speed[0] < 0) ellipse(this.x+this.size, this.y+this.size, 5, 5);
    else if(this.speed[1] > 0) ellipse(this.x+this.size, this.y, 5, 5);
    else ellipse(this.x, this.y+this.size, 5, 5);
    stroke(0);
  }

  this.eat = function(ob){
    if(dist(this.x, this.y, ob.x, ob.y) < 1){
      this.total++;
      return true;
    }
    else return false;


  }

  this.move = function(){
    if(this.total === this.tail.length){
      for(let i = 0; i < this.tail.length-1; i++){
        this.tail[i] = this.tail[i+1];
      }
    }
    this.tail[this.total-1] = createVector(this.x, this.y);

    this.x += this.speed[0];
    this.y += this.speed[1];
    this.checkBorders();
  }

  this.checkBorders = function(){
    if(this.x + this.size > width-s) this.x = s;
    if(this.x < s) this.x = width-s-this.size;
    if(this.y + this.size > height-s) this.y = s;
    if(this.y < s) this.y = height-s-this.size;
  }

  this.death = function(){
    for (let i = 0; i < this.tail.length; i++){
      let pos = this.tail[i];
      let d = dist(this.x, this.y, pos.x, pos.y);
      if(d < 1){
        this.total = 0;
        this.tail = [];
        gameSpeed = 10;
        sColor = [0, 255, 0];
      }
    }

    this.powerFunc = function(key){
      if(key == 49){
        sColor = [0, 255, 0];
      }
      else if(key == 50){
        sColor = [255, 55, 0];
      }
      else if(key == 51){
        sColor = [0, 55, 255];
      }
    }

}



}
