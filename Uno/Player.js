class Player{
  constructor(){
    this.hand = [];
  }

  addCard(card){
    this.hand.push(card);
  }

  playCard(tableC, i){
    if(this.isPlayable(tableC, i)){
      table.figure = this.hand[i].figure;
      table.color = this.hand[i].color;
      table.colorId = this.hand[i].colorId;
      this.hand.splice(i, 1);
      //Passar a vez:
      /*actualPlayer += 1*signal;
      if(actualPlayer >= player.length) actualPlayer = 0;
      if(actualPlayer < 0) actualPlayer = player.length-1;
      */
      passTurn();
      return true;
    }
    return false;
  }

  isPlayable(tableC, i){
    if( this.hand[i].collision() && mouseIsPressed ){
      if(this.hand[i].figure == tableC.figure || this.hand[i].colorId == tableC.colorId){
        if(this.hand[i].figure <= 9);
        else if(this.hand[i].figure == 10){
          let pp = actualPlayer + signal;
          if (pp >= player.length) pp = 0;
          if (pp < 0) pp = player.length-1;
          for(let z = 0; z < 2; z++) drawCard(pp);
        }
        else if(this.hand[i].figure == 11){
          passTurn();
        }
        else if(this.hand[i].figure == 12){
          signal *= -1;
        }
        return true;
      }
      /*else if(this.hand[i].figure == 13){}
      else if(this.hand[i].figure == 14){}*/
    }
    return false;
  }


}
