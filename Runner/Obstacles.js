class Obstacle{
  constructor(sprite){
    this.x = width;
    this.y = ground+40;
    this.w = random(10, 30);
    this.h = random(45, new Player().jumpHeight/4);
    this.sprite = sprite;
  }

  move(){
    this.x -= obsSpeed;
  }

  draw(){
    // noStroke();
    // fill(0);
    // rect(this.x, this.y, this.w, -this.h);
    image(this.sprite, this.x, this.y, this.w, -this.h);
  }

  dead(){
    if(this.x <= 0) return true; //Saiu do mapa
    else return false;
  }

  collision(p){
    return (this.x <= p.x+p.size && p.y+p.size >= this.y-this.h && this.x+this.w >= p.x); //True eh colisao
  }

  auto(){
    this.move();
    this.draw();
  }
}
