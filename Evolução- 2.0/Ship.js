class Ship{
  constructor(_color = 100){
    this.pos = createVector(width/30, height/2);
    this.points = 0;
    this.death = false;
    this.size = 20;
    this.md = []; //Move direction
    this.mdo = [];
    this.color = _color;
  }

  show(){
    stroke(255);
    fill(this.color);
    rect(this.pos.x, this.pos.y, this.size, this.size);
  }

  initialize_md(){
    this.md.push(floor(random(0, 100/7)));
    this.mdo.push(floor(random(0, 100/7)));
    for(let i = 0; i < 7; i++){
      this.md.push(floor(random(this.md[i], 100)));
      this.mdo.push(floor(random(this.md[i], 100)));
    }
  }

  move(){
    if(!this.death){
      let dir = floor(random(0, 101));
      //let dir = random(0, 1001)%101;
      this.moveDir(dir);
      this.point_counter(fruit);
      this.outBorders();
      this.win(fruit);
      return;
    }
  }

  crossOver(_best){
    for(let i = 0; i < this.md.length; i++){
      this.md[i] = (this.md[i]+_best.md[i]) / 2;
      this.mutate(i);
    }
    this.reset();
  }

  mutate(i){
    let mutation = floor(random(-5, 5));
    //let mutation = random(0, 1001)%6;
    this.md[i] += mutation;
  }

  point_counter(wobjective){
    this.points = dist(this.pos.x, this.pos.y, wobjective.pos.x, wobjective.pos.y);
  }

  outBorders(){
    if(this.collision(0, 0, 0, height) || this.collision(0, 0, width, 0) || this.collision(0, height, width, 0) || this.collision(width, 0, 0, height)){
      this.die();
    }
  }

  win(wobjective){
    if(this.collision(wobjective.pos.x, wobjective.pos.y, wobjective.size.x, wobjective.size.y)){
      this.death = true;
      this.points -= deathP*5;
    }
  }

  hitObs(obs){
    if(this.collision(obs.pos.x, obs.pos.y, obs.size.x, obs.size.y)){
      this.die();
    }
  }

  nearObject(obstacles){
    for(let i = 0; i < obstacles.size; i++){
      if(this.pos.x)
    }
  }

  collision(objx, objy, objsx, objsy){
    return !(this.pos.x > objx + objsx || this.pos.x + this.size < objx || this.pos.y + this.size < objy || this.pos.y > objy + objsy);
  }



  moveDir(dir){
    let speed;
    //switch(dir){
      if(dir > 0 && dir <= this.md[0])
        //North
        speed = createVector(0, -1);

      else if(dir <= this.md[1])
        //North-east
        speed = createVector(1, -1);

        else if(dir <= this.md[2])
        //East
        speed = createVector(1, 0);

        else if(dir <= this.md[3])
        //South-east
        speed = createVector(1, 1);

      else if(dir <= this.md[4])
        //South
        speed = createVector(0, 1);

      else if(dir <= this.md[5])
        //South-west
        speed = createVector(-1, 1);

      else if(dir <= this.md[6])
        //West
        speed = createVector(-1, 0);

      else if(dir <= this.md[7] && dir < 101)
        //North-west
        speed = createVector(-1, -1);
    //}
    else speed = createVector(0, 0);
    speed.mult(speedf);
    this.pos.add(speed);
  }

  reset(){
    //Reseting Data
    this.points = 0;
    this.pos = createVector(width/30, height/2);
    this.death = false;
  }

  die(){
    this.death = true;
    this.points += deathP;
  }


}
