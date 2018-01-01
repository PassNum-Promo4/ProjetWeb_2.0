/*
  Author : JANUEL ETIENNE
*/

var g12QnA1 = new Array('Question1','Reponse1','Reponse2','Reponse3','Reponse4');
var g12QnA2 = new Array('Question2','Reponse1','Reponse2','Reponse3','Reponse4');
var g12QnA3 = new Array('Question3','Reponse1','Reponse2','Reponse3','Reponse4');
var g12QnA4 = new Array('Question4','Reponse1','Reponse2','Reponse3','Reponse4');
var g12QnA5 = new Array('Question5','Reponse1','Reponse2','Reponse3','Reponse4');
var g12QnA6 = new Array('Question6','Reponse1','Reponse2','Reponse3','Reponse4');
var g12QnA7 = new Array('Question7','Reponse1','Reponse2','Reponse3','Reponse4');
var g12QnA8 = new Array('Question8','Reponse1','Reponse2','Reponse3','Reponse4');
var g12QnA9 = new Array('Question9','Reponse1','Reponse2','Reponse3','Reponse4');
var g12QnA10 = new Array('Question10','Reponse1','Reponse2','Reponse3','Reponse4');

var g12AllQnA = new Array(g12QnA1,g12QnA2,g12QnA3,g12QnA4,g12QnA5,g12QnA6,g12QnA7,g12QnA8,g12QnA9,g12QnA10);

var g12QnA = '';

var g12doNotUseA = new Array('')
var g12doNotUseQnA = new Array('')

var g12Q1div = '';
var g12A1div = '';
var g12A2div = '';
var g12A3div = '';
var g12A4div = '';

var g12roundDone = 0;

var g12GameTimer;
var g12GameTimeLeft = 60; //Init the timer at 60 seconds
var g12QnATimer;
var g12QnATimeLeft = 6;

var g12CurrentQnA;

function g12GameTimerCountdown() { //Wait 1 second and call the function g12updateTimer
  g12GameTimer = window.setTimeout('g12UpdateGameTimer()',1000);
}

function g12UpdateGameTimer() { //Testing if countdown is done and pushing the time into HTML
  document.querySelector('#g12GameTimer').textContent = 'Temps Partie : ' + g12GameTimeLeft;
  if (g12GameTimeLeft <= 0) { //If Countdown come to 0
    g12resetGame();
  } else { //Keep substracting
    g12GameTimeLeft--;
    g12GameTimerCountdown();
  }
}

function g12QnATimerCountdown() { //Wait 1 second and call the function g12updateTimer
  g12QnATimer = window.setTimeout('g12UpdateQnATimer()',1000);
}

function g12UpdateQnATimer() { //Testing if countodown is done and pushing the time into HTML
  document.querySelector('#g12QnATimer').textContent = 'Temps Question : ' + g12QnATimeLeft;
  if (g12QnATimeLeft <= 0) { //If Countdown came to 0
    g12CurrentQnA.classList.add('p-1','border','rounded','bg-warning');
    document.querySelector('#g12Result').appendChild(g12CurrentQnA);
    g12nextQ();
  } else { //Keep substracting
    g12QnATimeLeft--;
    g12QnATimerCountdown();
  }
}

function g12startGame() { //When user press Start, it launch the game
  g12resetGame();
  g12getRandomQnA();
  g12GameTimerCountdown();
  g12QnATimerCountdown();
  g12roundDone = 0;
}

function g12resetGame() { //Before starting game, resetting the questions area
  g12doNotUseA = [];
  document.querySelector('#g12Q').innerHTML = '';
  document.querySelector('#g12A1-4').innerHTML = '';
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

  g12A1div = document.createElement('div');
  g12A1div.id = 'g12A1';
  g12A1div.classList.add('text-light','bg-primary','border','border-primary','rounded','m-1','p-3');
  g12A1div.textContent = g12QnA[1];

  g12A2div = document.createElement('div');
  g12A2div.id = 'g12A2';
  g12A2div.classList.add('text-light','bg-primary','border','border-primary','rounded','m-1','p-3');
  g12A2div.textContent = g12QnA[2];

  g12A3div = document.createElement('div');
  g12A3div.id = 'g12A3';
  g12A3div.classList.add('text-light','bg-primary','border','border-primary','rounded','m-1','p-3')
  g12A3div.textContent = g12QnA[3];

  g12A4div = document.createElement('div');
  g12A4div.id = 'g12A4';
  g12A4div.classList.add('text-light','bg-primary','border','border-primary','rounded','m-1','p-3')
  g12A4div.textContent = g12QnA[4];

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
          document.querySelector('#g12A1-4').appendChild((g12A1div));
          break;
        case 2:
          document.querySelector('#g12A1-4').appendChild((g12A2div));
          break;
        case 3:
          document.querySelector('#g12A1-4').appendChild((g12A3div));
          break;
        case 4:
          document.querySelector('#g12A1-4').appendChild((g12A4div));
          break;
      }
      j++
    }
}
  g12waitForClick();
}

function g12waitForClick() {
  document.querySelector('#g12A1').addEventListener('click', g12trueAnswer);
  document.querySelector('#g12A2').addEventListener('click', g12falseAnswer);
  document.querySelector('#g12A3').addEventListener('click', g12falseAnswer);
  document.querySelector('#g12A4').addEventListener('click', g12falseAnswer);
}

function g12falseAnswer() {
  g12CurrentQnA.classList.add('p-1','border','rounded','bg-danger');
  document.querySelector('#g12Result').appendChild(g12CurrentQnA);
  g12nextQ();
}

function g12trueAnswer() {
  g12CurrentQnA.classList.add('p-1','border','rounded','bg-success');
  document.querySelector('#g12Result').appendChild(g12CurrentQnA);
  g12nextQ();
  //addPoints(1);
}

function g12nextQ() {
  if (g12roundDone != 9) {
    g12roundDone++;
    g12resetGame();
    g12getRandomQnA();
    window.clearTimeout(g12QnATimer);
    g12QnATimeLeft = 6;
    g12UpdateQnATimer();
    console.log(g12roundDone);
  } else {
    g12resetGame();
    window.clearTimeout(g12QnATimer);
    window.clearTimeout(g12GameTimer);
    console.log('End Of Game')
    //loadNextMiniGame();
  }
}
