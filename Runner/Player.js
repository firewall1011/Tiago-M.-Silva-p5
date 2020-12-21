class Player{
  constructor(sprite){
    this.size = 40;
    this.x = 100;
    this.jumpHeight = height/1.5;
    this.y = ground;
    this.onGround = true;
    this.isJumping = false;
    this.isMoving = false;
    this.sprite = sprite;
  }

  jump(){
    if(this.isJumping && player.y >= player.jumpHeight){
      this.y -= 2.25;
      this.x += 0.25;
    }
    else this.isJumping = false;

  }

  display(){
    //print("Displaying");
    /*
    fill(0);
    rect(this.x, this.y, this.size, this.size);*/
    imageMode(CORNER);
    image(this.sprite, this.x, this.y, this.size, this.size);
  }

  gravity(){
    if(this.y < ground && !this.isJumping){
      this.y += gravitySpeed;
      this.onGround = false;
    }
    else this.onGround = true;
  }

  move(){
    if(this.x > 100 && !this.isJumping){
      this.x -= 0.3;
      this.isMoving = true;
    }
    else this.isMoving = false;
  }

  auto(){
    this.gravity();
    this.jump();
    this.move();
    this.display();
  }

  reconstruct(){
    this.x = 100;
    this.y = ground;
    this.onGround = true;
    this.isJumping = false;
    this.isMoving = false;
  }

}
