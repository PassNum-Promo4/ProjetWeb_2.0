/*
  Author : JANUEL ETIENNE
*/

resetGameTitle("JavaScript");
setTimer(9,g12falseAnswer);

var g12QnA1 = new Array('Q1 : Quelle fonction permet d\'obtenir l\'indice d\'un élement donné dans un tableau ?','array.indexOf','array.indexBy','array.indexFor','array.indexWhere');
var g12QnA2 = new Array('Q2 : Comment créer un tableau vide ?','new Array(\'\')','new Tab(\'\')','new Array[]','new Array[\'\']');
var g12QnA3 = new Array('Q3 : Quelle est la syntaxe pour écrire un commentaire sur plusieurs lignes ?','/* ... */','*/ ... /*','// ... //','<!-- ... -->');
var g12QnA4 = new Array('Q4 : superRecette = (\'Pain\',\'Fromage\',\'Beurre\',\'Saucisson\') Quel est l\'élément à l\'indice 1 ?','Fromage','Pain','Beurre','Saucisson');
var g12QnA5 = new Array('Q5 : Quelle est la bonne syntaxe ?','document.querySelector(\'#id\')','element.querySelector(\'#id\')','document.querySelector(#id)','body.querySelector(#id)');
var g12QnA6 = new Array('Q6 : Comment définir une fonction ?','function maFonction(){}','newFunction maFonction(){}','maFonction(){}','function.maFonction(){}');
var g12QnA7 = new Array('Q7 : Comment créer un élément \'p\' ?','document.createElement(\'p\')','element.createElement(\'p\')','element.createElement(p)','document.createElement(p)');
var g12QnA8 = new Array('Q8 : Comment lier un fichier JS dans une page HTML ?','Avec la balise <script>','Avec la fonction \'import\'','Avec la balise <link>','Avec la balise <src>');
var g12QnA9 = new Array('Q9 : Quelle est la syntaxe permettant d\'insérer du texte dans une balise HTML ?','textContent','innerText','innerHTML','textHTML');
var g12QnA10 = new Array('Q10 : superRecette = (\'Pain\',\'Fromage\',\'Beurre\',\'Saucisson\'), Que renvoie superRecette.length','4','3','5','0');

var g12AllQnA = new Array(g12QnA1,g12QnA2,g12QnA3,g12QnA4,g12QnA5,g12QnA6,g12QnA7,g12QnA8,g12QnA9,g12QnA10);
var g12QnA = '';
var g12doNotUseA = new Array('');
var g12doNotUseQnA = new Array('');
var g12QnABank = new Array('');
var g12roundDone = 0;
var g12A1button;
var g12A1paragraph;
var g12A2button;
var g12A2paragraph;
var g12A3button;
var g12A3paragraph;
var g12A4button;
var g12A4paragraph;

g12startGame();

function g12startGame() { //When user press Start, it launch the game
  g12resetGame();
  g12getRandomQnA();
  g12roundDone = 0;
}

function g12resetGame() { //Before starting game, resetting the questions area
  g12doNotUseA = [];
  document.querySelector('#g12A1').innerHTML = '';
  document.querySelector('#g12A2').innerHTML = '';
  document.querySelector('#g12A3').innerHTML = '';
  document.querySelector('#g12A4').innerHTML = '';
}

function g12getRandomQnA() { //Pick a random QnA in the QnA tab
  while (g12roundDone < 10) {
    var i = Math.floor(Math.random()*g12AllQnA.length);
    if (g12doNotUseQnA.indexOf(i) === -1) {
      g12doNotUseQnA[g12roundDone] = i;
      g12QnA = g12AllQnA[i];
      g12CurrentQnA = document.createElement('span');
      g12CurrentQnA.textContent = ' Q' + (i + 1);
      g12createQnA();
      return g12QnA;
    }
  }
}

function g12createQnA() {
  g12A1button = document.createElement('button');
  g12A1button.type = 'button';
  g12A1button.id = 'g12AC1';
  g12A1button.classList.add('bg-color__body', 'p-4', 'btn', 'btn-lg', 'col-12', 'mt-2', 'text-dark', 'round', 'btn_hover');

  g12A1paragraph = document.createElement('p');
  g12A1paragraph.textContent = g12QnA[1];

  g12A1button.appendChild(g12A1paragraph);
  g12QnABank[0] = g12A1button;


  g12A2button = document.createElement('button');
  g12A2button.type = 'button';
  g12A2button.id = 'g12AC2';
  g12A2button.classList.add('bg-color__body', 'p-4', 'btn', 'btn-lg', 'col-12', 'mt-2', 'text-dark', 'round', 'btn_hover');

  g12A2paragraph = document.createElement('p');
  g12A2paragraph.textContent = g12QnA[2];

  g12A2button.appendChild(g12A2paragraph);
  g12QnABank[1] = g12A2button;


  g12A3button = document.createElement('button');
  g12A3button.type = 'button';
  g12A3button.id = 'g12AC3';
  g12A3button.classList.add('bg-color__body', 'p-4', 'btn', 'btn-lg', 'col-12', 'mt-2', 'text-dark', 'round', 'btn_hover');

  g12A3paragraph = document.createElement('p');
  g12A3paragraph.textContent = g12QnA[3];

  g12A3button.appendChild(g12A3paragraph);
  g12QnABank[2] = g12A3button;


  g12A4button = document.createElement('button');
  g12A4button.type = 'button';
  g12A4button.id = 'g12AC4';
  g12A4button.classList.add('bg-color__body', 'p-4', 'btn', 'btn-lg', 'col-12', 'mt-2', 'text-dark', 'round', 'btn_hover');

  g12A4paragraph = document.createElement('p');
  g12A4paragraph.textContent = g12QnA[4];

  g12A4button.appendChild(g12A4paragraph);
  g12QnABank[3] = g12A4button;

  g12pushQnA();
}

function g12pushQnA() { //Pushing QnA in the area
  document.querySelector('#g12Q').textContent = g12QnA[0];

  var j = 0;
  while (j < 4) {
    var i = Math.floor(Math.random() * 4) + 1;
    if (g12doNotUseA.indexOf(i) === -1) {
      g12doNotUseA[j] = i;
      switch (i) {
        case 1:
          document.querySelector('#g12A1').appendChild(g12QnABank[j]);
          break;
        case 2:
          document.querySelector('#g12A2').appendChild(g12QnABank[j]);
          break;
        case 3:
          document.querySelector('#g12A3').appendChild(g12QnABank[j]);
          break;
        case 4:
          document.querySelector('#g12A4').appendChild(g12QnABank[j]);
          break;
      }
      j++
    }
}
  g12waitForClick();
}

function g12waitForClick() {
  document.querySelector('#g12AC1').addEventListener('click', g12trueAnswer);
  document.querySelector('#g12AC2').addEventListener('click', g12falseAnswer);
  document.querySelector('#g12AC3').addEventListener('click', g12falseAnswer);
  document.querySelector('#g12AC4').addEventListener('click', g12falseAnswer);
}

function g12falseAnswer(div) {
  g12revealQnA();
}

function g12trueAnswer() {
  g12revealQnA();
  addPoints(1);
}

function g12revealQnA() {
  document.querySelector('#progressBar').classList.add("paused");
  //Removing the event listener to prevent user clicking
  document.querySelector('#g12AC1').removeEventListener('click', g12trueAnswer);
  document.querySelector('#g12AC2').removeEventListener('click', g12falseAnswer);
  document.querySelector('#g12AC3').removeEventListener('click', g12falseAnswer);
  document.querySelector('#g12AC4').removeEventListener('click', g12falseAnswer);
  
  document.querySelector('button').classList.remove('btn_hover');

  document.querySelector('#g12AC1').classList.add('bg__true-answer');
  document.querySelector('#g12AC2').classList.add('bg__false-answer');
  document.querySelector('#g12AC3').classList.add('bg__false-answer');
  document.querySelector('#g12AC4').classList.add('bg__false-answer');

  g12revealTimer = window.setTimeout('g12nextQ()',2000);//Wait 2 seconds and go to the next question
}

function g12nextQ() {
  document.querySelector('#progressBar').classList.remove("paused");

  var g12ProgressBar = document.querySelector('#progressBar');
  document.querySelector('.progress').innerHTML="";
  var g12Progress = document.querySelector('.progress');
  g12Progress.appendChild(g12ProgressBar);

  document.querySelector('#g12AC1').classList.remove('bg__true-answer');
  document.querySelector('#g12AC2').classList.remove('bg__false-answer');
  document.querySelector('#g12AC3').classList.remove('bg__false-answer');
  document.querySelector('#g12AC4').classList.remove('bg__false-answer');

  if (g12roundDone != 9) {
    g12roundDone++;
    g12resetGame();
    g12getRandomQnA();
  } else {
    loadNextMiniGame();
  }
}
