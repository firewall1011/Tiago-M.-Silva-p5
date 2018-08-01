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
      actualPlayer++;
      if(actualPlayer >= player.length) actualPlayer = 0;
    }
  }

  isPlayable(tableC, i){
    if( this.hand[i].collision() && mouseIsPressed ){
      if(this.hand[i].figure <= 9){
        if(this.hand[i].figure == tableC.figure || this.hand[i].colorId == tableC.colorId){
          return true;
        }
      }
      /*else if(this.hand[i].figure = 10){}
      else if(this.hand[i].figure = 11){}
      else if(this.hand[i].figure = 12){}
      else if(this.hand[i].figure = 13){}
      else if(this.hand[i].figure = 14){}*/
    }
    return false;
  }


}
