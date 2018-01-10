/*
  Author : JANUEL ETIENNE
*/
var g12QnA1 = new Array('Q1 : Quelle fonction permet d\'obtenir l\'indice d\'un élement donné dans un tableau ?','array.indexOf','array.indexBy','array.indexFor','array.indexWhere');
var g12QnA2 = new Array('Q2 : Comment créer un tableau vide ?','new Array(\'\')','new Tab(\'\')','new Array[]','new Array[\'\']');
var g12QnA3 = new Array('Q3 : Quelle est la syntaxe pour écrire un commentaire sur plusieurs lignes ?','/* ... */','*/ ... /*','// ... //','<!-- ... -->');
var g12QnA4 = new Array('Q4 : superRecette = (\'Pain\',\'Fromage\',\'Beurre\',\'Saucisson\') Quel est l\'élément à l\'indice 1 ?','Fromage','Pain','Beurre','Saucisson');
var g12QnA5 = new Array('Q5 : Quelle est la bonne syntaxe ?','document.querySelector(\'#id\')','element.querySelector(\'#id\')','document.querySelector(#id)','body.querySelector(#id)');
var g12QnA6 = new Array('Q6 : Comment définir une fonction ?','function maFonction(){}','newFunction maFonction(){}','maFonction(){}','function.maFonction(){}');
var g12QnA7 = new Array('Q7 : Comment créer une balise html p ?','document.createElement(\'p\')','element.createElement(\'p\')','element.createElement(p)','document.createElement(p)');
var g12QnA8 = new Array('Q8 : Comment lier un fichier JS dans une page HTML ?','<script type="text/javascript" src="script.js"></script> ','<script type="javascript" src="script.js"></script>','<script type="text/javascript" href="script.js"></script>','<script rel="text/javascript" href="script.js"></script>');
var g12QnA9 = new Array('Q9 : Quelle est la syntaxe permettant d\'insérer du texte dans une balise HTML ?','textContent','innerText','innerHTML','textHTML');
var g12QnA10 = new Array('Q10 : superRecette = (\'Pain\',\'Fromage\',\'Beurre\',\'Saucisson\'), Que renvoie superRecette.length','4','3','5','0');

var g12AllQnA = new Array(g12QnA1,g12QnA2,g12QnA3,g12QnA4,g12QnA5,g12QnA6,g12QnA7,g12QnA8,g12QnA9,g12QnA10);
var g12QnA = '';
var g12doNotUseA = new Array('')
var g12doNotUseQnA = new Array('')
var g12roundDone = 0;
var g12QnATimer;
var g12QnATimeLeft = 9;
var g12CurrentQnA;
var g12Score = 0;
var g12AnswerKeeper = new Array('');
var g12QuestionKeeper = new Array('');
var g12A1div;
var g12A2div;
var g12A3div;
var g12A4div;



g12startGame();

function g12startGame() { //When user press Start, it launch the game
  g12showHUD();
  g12resetGame();
  g12getRandomQnA();
  g12QnATimerCountdown();
  g12roundDone = 0;
}

function g12showHUD() {
  document.querySelector('#g12container').innerHTML = ''; //Clearing the container
  var g12hudTimer = document.createElement('span');
  g12hudTimer.classList.add('ml-5','p-1','text-light','border','border-info','rounded','bg-info');
  g12hudTimer.id = 'g12QnATimer';
  g12hudTimer.textContent = g12QnATimeLeft + 's';
  document.querySelector('#g12container').appendChild((g12hudTimer));

  var g12hudScore = document.createElement('span');
  g12hudScore.classList.add('ml-5','p-1','text-light','border','border-info','rounded','bg-info');
  g12hudScore.id = 'g12Score';
  g12hudScore.textContent = '0'
  document.querySelector('#g12container').appendChild((g12hudScore));

  var g12hudResult = document.createElement('span');
  g12hudResult.classList.add('ml-5');
  g12hudResult.id = 'g12Result';
  document.querySelector('#g12container').appendChild((g12hudResult));

  var g12QnAcontainer = document.createElement('div');
  g12QnAcontainer.classList.add('container-fluid','p-0','mt-5');
  g12QnAcontainer.id = 'g12QnAcontainer';
  document.querySelector('#g12container').appendChild((g12QnAcontainer));

  var g12Q = document.createElement('div');
  g12Q.classList.add('mb-2','ml-2','font-weight-bold');
  g12Q.id = 'g12Q';
  document.querySelector('#g12QnAcontainer').appendChild((g12Q));

  var g12A = document.createElement('div');
  g12A.id = 'g12A';
  document.querySelector('#g12QnAcontainer').appendChild((g12A));
}

function g12QnATimerCountdown() { //Wait 1 second and call the function g12updateTimer
  g12QnATimer = window.setTimeout('g12UpdateQnATimer()',1000);
}

function g12UpdateQnATimer() { //Testing if countodown is done and pushing the time into HTML
  document.querySelector('#g12QnATimer').textContent = g12QnATimeLeft + 's';
  if (g12QnATimeLeft <= 0) { //If Countdown came to 0
    g12CurrentQnA.classList.add('m-1','p-1','border','border-warning','rounded','bg-warning','text-light');
    document.querySelector('#g12Result').appendChild(g12CurrentQnA);
    g12AnswerKeeper[g12roundDone] = document.createElement('div');
    g12AnswerKeeper[g12roundDone].textContent = g12A1div.textContent;
    g12AnswerKeeper[g12roundDone].classList.add('btn','btn-lg','btn-primary','btn-block','border-warning','bg-warning');
    g12nextQ();
  } else { //Keep substracting
    g12QnATimeLeft--;
    g12QnATimerCountdown();
  }
}

function g12resetGame() { //Before starting game, resetting the questions area
  g12doNotUseA = [];
  document.querySelector('#g12Q').innerHTML = '';
  document.querySelector('#g12A').innerHTML = '';
}

function g12getRandomQnA() { //Pick a random QnA in the QnA tab
  while (g12roundDone < 10) {
    var i = Math.floor(Math.random()*g12AllQnA.length);
    if (g12doNotUseQnA.indexOf(i) === -1) {
      g12doNotUseQnA[g12roundDone] = i;
      g12QnA = g12AllQnA[i];
      g12createArea();
      g12CurrentQnA = document.createElement('span');
      g12CurrentQnA.textContent = ' Q' + (i + 1);
      return g12QnA;
    }
  }
}

function g12createArea() { //Creating the div for QnA positionning

  g12A1div = document.createElement('button');
  g12A1div.classList.add('btn','btn-lg','btn-primary','btn-block');
  g12A1div.textContent = g12QnA[1];

  g12A2div = document.createElement('button');
  g12A2div.classList.add('btn','btn-lg','btn-primary','btn-block');
  g12A2div.textContent = g12QnA[2];

  g12A3div = document.createElement('button');
  g12A3div.classList.add('btn','btn-lg','btn-primary','btn-block');
  g12A3div.textContent = g12QnA[3];

  g12A4div = document.createElement('button');
  g12A4div.classList.add('btn','btn-lg','btn-primary','btn-block');
  g12A4div.textContent = g12QnA[4];

  g12pushQnA();
}

function g12pushQnA() { //Pushing QnA in the area
  g12Q.textContent = g12QnA[0];

  var j = 0;
  while (j < 4) {
    var i = Math.floor(Math.random() * 4) + 1;
    if (g12doNotUseA.indexOf(i) === -1) {
      g12doNotUseA[j] = i;
      switch (i) {
        case 1:
          document.querySelector('#g12A').appendChild((g12A1div));
          break;
        case 2:
          document.querySelector('#g12A').appendChild((g12A2div));
          break;
        case 3:
          document.querySelector('#g12A').appendChild((g12A3div));
          break;
        case 4:
          document.querySelector('#g12A').appendChild((g12A4div));
          break;
      }
      j++
    }
}
  g12waitForClick();
}

function g12waitForClick() {
  g12A1div.addEventListener('click', g12trueAnswer);
  g12A2div.addEventListener('click', g12falseAnswer);
  g12A3div.addEventListener('click', g12falseAnswer);
  g12A4div.addEventListener('click', g12falseAnswer);
}

function g12falseAnswer(div) {
  g12revealQnA()
  g12CurrentQnA.classList.add('m-1','p-1','border','border-danger','rounded','bg-danger','text-light');
  document.querySelector('#g12Result').appendChild(g12CurrentQnA);
  g12AnswerKeeper[g12roundDone] = document.createElement('div');
  g12AnswerKeeper[g12roundDone].textContent = g12A1div.textContent;
  g12AnswerKeeper[g12roundDone].classList.add('btn','btn-lg','btn-primary','btn-block','border-danger','bg-danger');
}

function g12trueAnswer() {
  g12revealQnA()
  g12CurrentQnA.classList.add('m-1','p-1','border','border-success','rounded','bg-success','text-light');
  document.querySelector('#g12Result').appendChild(g12CurrentQnA);
  g12AnswerKeeper[g12roundDone] = document.createElement('div');
  g12AnswerKeeper[g12roundDone].textContent = g12A1div.textContent;
  g12AnswerKeeper[g12roundDone].classList.add('btn','btn-lg','btn-primary','btn-block','border-success','bg-success');
  g12Score++;
  addPoints(1);
}

function g12revealQnA() {
  //Removing the event listener to prevent user clicking
  g12A1div.removeEventListener('click', g12trueAnswer);
  g12A2div.removeEventListener('click', g12falseAnswer);
  g12A3div.removeEventListener('click', g12falseAnswer);
  g12A4div.removeEventListener('click', g12falseAnswer);
  clearTimeout(g12QnATimer);//Stop the main timer
  //Revealing the soluce
  g12A1div.classList.add('border-success','bg-success');
  g12A2div.classList.add('border-danger','bg-danger');
  g12A3div.classList.add('border-danger','bg-danger');
  g12A4div.classList.add('border-danger','bg-danger');

  g12revealTimer = window.setTimeout('g12nextQ()',500);//Wait 2 seconds and go to the next question
}

function g12nextQ() {
  document.querySelector('#g12Score').textContent = g12Score;
  g12A1div.classList.remove('border-success','bg-success');
  g12A2div.classList.remove('border-danger','bg-danger');
  g12A3div.classList.remove('border-danger','bg-danger');
  g12A4div.classList.remove('border-danger','bg-danger');

  g12QuestionKeeper[g12roundDone] = document.createElement('span');
  g12QuestionKeeper[g12roundDone].textContent = g12Q.textContent;

  if (g12roundDone != 9) {
    g12roundDone++;
    g12resetGame();
    g12getRandomQnA();
    window.clearTimeout(g12QnATimer);
    g12QnATimeLeft = 9;
    g12UpdateQnATimer();
    console.log(g12roundDone);
  } else {
    clearTimeout(g12QnATimer);
    g12resetGame();
    window.setTimeout('g12printGameHistory()',100)
    console.log('End Of Game')
  }
}

function g12printGameHistory() {
  var i = 0;
  while (i < 10) {
    document.querySelector('#g12container').appendChild(g12QuestionKeeper[i]);
    document.querySelector('#g12container').appendChild(g12AnswerKeeper[i]);
    i++;
  }
  var g12nextMiniGame = document.createElement('button');
  g12nextMiniGame.textContent = 'Prochain Quizz';
  g12nextMiniGame.classList.add('btn','btn-primary','mt-2','ml-5');
  g12nextMiniGame.onclick = loadNextMiniGame;
  document.querySelector('#g12container').appendChild(g12nextMiniGame);
}
