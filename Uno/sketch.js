var player = [];
var table;
var deck = [];
var actualPlayer = 0;
var signal = 1;
//Criar classe do Jogador
//Criar funcao de clicar em cartas
//Criar funcao de checar mesa
//http://jogosdecartas.hut.com.br/uno/


function setup() {
  createCanvas(400, 600);
  createP('Feito por Silva, Tiago');
  player.push(new Player());
  player.push(new Player());
  player.push(new Player());
  drawB = new Botao(5, 460, 'Draw', 22);
  passB = new Botao(337, 460, 'Pass', 22);
  createDeck();
  startGame();

}


function draw() {
  background(200);

  showCards();

  if(frameCount % 3 == 0){ //Let players play their card
    for(let k = player[actualPlayer].hand.length-1; k >= 0; k--){
        if(player[actualPlayer].playCard(table, k)) break;
    }
  }
  delay(0.65); //Delay to not conflict players turns
}

function mousePressed(){
  if( drawB.collision() ){
    drawCard(actualPlayer);
  }
  if( passB.collision() ){
    passTurn();
  }
}

function passTurn(){
  actualPlayer += 1*signal;
  if(actualPlayer >= player.length) actualPlayer = 0;
  if(actualPlayer < 0) actualPlayer = player.length-1;
}

function delay(_i){
  for(let w = 0; w < _i * 100000000; w++);
}
//function PopCard(){}

function showCards(){
  showPlayersCards();
  table.show();
  drawB.show();
  passB.show();
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
