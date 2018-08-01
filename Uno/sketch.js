var player = [];
var table;
var deck = [];
var actualPlayer = 0;
//Criar classe do Jogador
//Criar funcao de clicar em cartas
//Criar funcao de checar mesa
//http://jogosdecartas.hut.com.br/uno/


function setup() {
  createCanvas(400, 600);
  createP('');
  player.push(new Player());
  player.push(new Player());
  teste = new Card(9, 2, createVector(width/10, height/100+height/1.2));
  createDeck();
  startGame();

}

function draw() {
  background(200);

  showCards();
  if(frameCount % 5 == 0){
    for(let k = player[actualPlayer].hand.length-1; k >= 0; k--){
        player[actualPlayer].playCard(table, k);
    }
  }
}

//function PopCard(){}


/*function playCard(id){
  table = player[actualPlayer].hand[id];
  table.pos = createVector(width/2-table.Rw/2, height/2-table.Rh/2);
  player[actualPlayer].hand.splice(id, 1);
}*/

function showCards(){
  showPlayersCards();
  table.show();
}

function showPlayersCards(){
  let i = 1;
   while(i <= player[actualPlayer].hand.length){
    player[actualPlayer].hand[i-1].pos = createVector(width/1.3 * i/player[actualPlayer].hand.length, height/100+height/1.2);
    player[actualPlayer].hand[i-1].show();
    i++;
  }
}

function startGame(){
  //Entrega cartas a todos jogadores
  for(let i = 0; i < player.length; i++){
    for(let j = 0; j < 7; j++){
      drawCard(i);
    }
  }
  //Coloca a primeira carta na mesa
  let randomCard;
  randomCard = floor(random(deck.length));
  table = deck[randomCard];
  table.pos = createVector(width/2-table.Rw/2, height/2-table.Rh/2);
  deck.splice(randomCard, 1);
}

function drawCard(i){
    let randomCard;
    randomCard = floor(random(deck.length));
    player[i].addCard(deck[randomCard]);
    deck.splice(randomCard, 1);
}

function createDeck(){
  for(let j = 0; j < 2; j++){
    for(let i = 0; i < 13; i++){
      deck.push(new Card(i, 0));
      deck.push(new Card(i, 1));
      deck.push(new Card(i, 2));
      deck.push(new Card(i, 3));
    }
  }
  for(let i = 13; i < 15; i++){
    deck.push(new Card(i, 0));
    deck.push(new Card(i, 1));
    deck.push(new Card(i, 2));
    deck.push(new Card(i, 3));
  }
}
