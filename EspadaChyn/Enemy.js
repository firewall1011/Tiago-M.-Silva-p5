function Enemy(){
    this.x = random(width);
    this.y = random(height/3);
    this.speed = 1.75*random(0.5,1);
    this.at = 1;
    this.w = random(15, 20);
    this.h = random(25, 35);
    this.hit = false;
    // var shape = int(random(0, 2));

    this.show = function(){
      fill(100);
      stroke(255, 0, 100);
      rect(this.x, this.y, this.w*2, this.h*2);
      // if(!shape) rect(this.x, this.y, w*2, h*2);
      // else ellipse(this.x, this.y, h*2, w*2);
    }

    this.correct = function(){
      let offset = 5;
      if(this.x + this.w < 0) this.x = -this.w; //Left Border
      if(this.x + this.w> width) this.x = width-this.w; //Right Border
      if(this.y + this.h < -this.h+offset*2) this.y = -2*this.h+offset*2;
      if(this.y + this.h > height/3 - this.h - offset) this.y = height/3 - 2*this.h - offset;
    }

    this.move = function(player){
      //Checking the x axis
      if(this.x - 2*this.w > player.x) this.x -= this.speed;
        else if(this.x + 2*this.w < player.x) this.x += this.speed;
          else this.x = this.x;
      //Checking the y axis
      if(this.y > player.y ) this.y -= this.speed;
        else if(this.y < player.y) this.y += this.speed;
          else this.y = this.y;
      //Movement Noise
      // this.x += 0.65*randomGaussian();
      this.correct();
    }

    this.collide = function(obj){
      this.hit = collideRectRect(this.x, this.y, this.w, this.h, obj.x, obj.y, obj.w, obj.h);
      console.log(this.hit);
    }


}
