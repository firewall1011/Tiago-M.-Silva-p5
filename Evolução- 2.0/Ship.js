class Ship{
  constructor(_moveSet, _first){
    this.pos = createVector(width/30, height/2);
    this.points = 0;
    this.death = false;
    this.moveset = _moveSet;
    this.size = 20;
    this.first = _first;
    this.k = 0;
  }

  show(){
    stroke(255);
    fill(100);
    rect(this.pos.x, this.pos.y, this.size, this.size);
  }

  move(){
    if(!this.death){
      if(this.first){
        let dir = floor(random(8));
        this.moveDir(dir);
        this.moveset.push(dir);
        this.point_counter();
        this.outBorders();
        return;
      }
      else{
        if(this.k < this.moveset.length){
          this.moveDir(this.moveset[this.k]);
          this.k++;
          this.point_counter();
          this.outBorders();
        }
        else{
          this.first = true;
        }
      }
    }
  }

  crossOver(_best){
    //Fundir o minimo de passos possíveis
    let Num = min_max(_best.moveset.length, this.moveset.length);
    let n = 0;
    for(let i = 0; i < Num; i++){
      n = floor((this.moveset[i] + _best.moveset[i]) / 2);
      this.moveset[i] = constrain(n, 0, 7);
    }
    this.moveset.slice(0, Num);
    this.reset();
  }

  mutate(){
    for(let i = 0; i < this.moveset.length; i++){
      this.moveset[i] = floor(this.moveset[i] + random(0, 7)) % 8;
    }
  }

  point_counter(){
    this.points = dist(this.pos.x, this.pos.y, objective.x, objective.y);
    this.points += floor(this.moveset.length/1000);
  }

  outBorders(){
    if(this.collision(0, 0, 0, height) || this.collision(0, 0, width, 0) || this.collision(0, height, width, 0)){
      this.death = true;
    }
  }

  collision(objx, objy, objsx, objsy){
    return (this.x > objx + objsx || this.x + this.size < objx || this.y + this.size < objy || this.y > objy + objsy);
  }



  moveDir(dir){
    let speed;
    switch(dir){
      case 0:
        //North
        speed = createVector(0, -1);
      break;

      case 1:
        //North-east
        speed = createVector(1, -1);
      break;

      case 2:
        //East
        speed = createVector(1, 0);
      break;

      case 3:
        //South-east
        speed = createVector(1, 1);
      break;

      case 4:
        //South
        speed = createVector(0, 1);
      break;

      case 5:
        //South-west
        speed = createVector(-1, 1);
      break;

      case 6:
        //West
        speed = createVector(-1, 0);
      break;

      case 7:
        //North-west
        speed = createVector(-1, -1);
      break;
    }
    this.pos.add(speed);
  }

  reset(){
    //Reseting Data
    this.k = 0;
    this.points = 0;
    this.pos = createVector(this.size*2, height/2);
    this.death = false;
    this.first = false;
  }


}
