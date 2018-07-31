function Player(x, y){
    this.x = x;
    this.y = y;
    this.speed = 3;
    this.at = 1;
    this.w = 15;
    this.h = 25;
    // this.sword = new Sword();

    this.show = function(){
      fill(255);
      stroke(0);
      rect(this.x, this.y, this.w*2, this.h*2);
    }

    this.correct = function(){
      let offset = 5;
      if(this.x + this.w < 0) this.x = -this.w; //Left Border
      if(this.x + this.w> width) this.x = width-this.w; //Right Border
      if(this.y + this.h < -this.h+offset*2) this.y = -2*this.h+offset*2;
      if(this.y + this.h > height/3 - this.h - offset) this.y = height/3 - 2*this.h - offset;
    }

    this.move = function(){
        if( keyIsDown(LEFT_ARROW) ) this.x -= this.speed;
        if( keyIsDown(RIGHT_ARROW) ) this.x += this.speed;
        if( keyIsDown(UP_ARROW) ) this.y -= this.speed;
        if( keyIsDown(DOWN_ARROW) ) this.y += this.speed;
        this.correct();
    }



    this.attack = function(key){
      if(key == 32){
        console.log('attacking');
      }
    }

}
