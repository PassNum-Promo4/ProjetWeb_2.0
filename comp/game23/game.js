/*
  Author : Alex Vieira
*/


var g23Board1 = [" Quelle commande est utilisée pour effacer l'écran du terminal?", "clear", "chsh", "man ping", "free -m"];
var g23Board2 = [" Quelle commande est utilisée pour afficher les 10 premières lignes d'un fichier?", "head *fichier*", "top *fichier*", "clear *fichier*", "ps *fichier*"];
var g23Board3 = [" Quelle commande est utilisée pour afficher la date et l'heure actuelles?", "date", "cal", "uptime", "finger"];
var g23Board4 = [" Ouvre le manuel de commande spécifié (remplacez la variable de la commande par le nom de la commande que vous voulez connaître).", "man commande", "head commande", "clear commande", "ps commande"];
var g23Board5 = [" Affiche les emplacements possibles d'un programme (remplacez le programme par le nom du programme).", "whereis programme", "head programme", "clear programme", "ps programme", ];
var g23Board6 = [" Voir le calendrier pour 2018", "cal 2018", "head 2018", "ps 2018", "whereis 2018", ];
var g23Board7 = [" Affiche les fichiers cachés", "ls -a ", "cd – ", "ls -l ", "ls -F"];
var g23Board8 = [" Copiez les deux fichiers en même temps", "cp file1 file2", "ln -s file1 lnk1", "ln file1 lnk1", "file file1"];
var g23Board9 = [" Décompressez un fichier zip", "ls file1.zip", "unzip file1.zip ", "ls -l file1.zip", "ls -F file1.zip"];
var g23Board10 = [" Supprime la première ligne du fichier result.txt", "sed -e ‘1d’ result.txt", "ln -s ‘1d’ result.txt", "file-e ‘1d’ result.txt ", "ln-e ‘1d’ result.txt"];

var g23AllQnA = [g23Board1, g23Board2, g23Board3, g23Board4, g23Board5, g23Board6, g23Board7, g23Board8, g23Board9, g23Board10];


var g23blackboard = [];
var g23blackboardblock = [];


var g23roundDone = 0;
var g23GameTimer;
var g23GameTimeLeft = 60;
var g23QnATimer;
var g23QnATimeLeft = 6;


function g23startGame() {
  btn.style.display = "none"; //may be useful in the future
  g23getRandomQnA();
  g23stopwatch();
  g23stopwatchdown();
}

function g23stopwatch() {
  g23GameTimer = window.setTimeout('g23UpdateGameTimer()', 1000);

}

function g23stopwatchdown() {
  g23QnATimer = window.setTimeout('g23stopwatchplus()', 1000);
}

function g23UpdateGameTimer() {
  document.querySelector('#g23GameTimer').textContent = 'Time for each question : ' + g23GameTimeLeft;
  if (g23GameTimeLeft <= 0) {
    g23resetGame();
  } else {
    g23GameTimeLeft--;
    g23stopwatch();
  }
}


function g23stopwatchplus() {
  document.querySelector('#g23QnATimer').textContent = 'Time for question : ' + g23QnATimeLeft;
  if (g23QnATimeLeft <= 0) {
    g23CurrentQnA.textContent = 'X';
    document.querySelector('#g23Result').appendChild(g23CurrentQnA);
    g23nextQ();
  } else {
    g23QnATimeLeft--;
    g23stopwatchdown();
  }
}





function g23resetGame() {
  g23blackboard = [];
  document.querySelector('#g23question').innerHTML = '';
  document.querySelector('#g23options').innerHTML = '';
}

function g23getRandomQnA() {
  while (g23roundDone < 10) {
    var i = Math.floor(Math.random() * g23AllQnA.length);
    if (g23blackboardblock.indexOf(i) === -1) {
      g23blackboardblock[g23roundDone] = i;
      g23QnA = g23AllQnA[i];
      g23createDic();
      g23CurrentQnA = document.createElement('span');
      return g23QnA;
    }
  }
}



function g23createDic() { //insertion

  g23A1div = document.createElement('div');
  g23A1div.id = 'g23A1';
  g23A1div.classList.add('text-light', 'bg-dark', 'rounded', 'm-1', 'p-3');
  g23A1div.textContent = g23QnA[1];

  g23A2div = document.createElement('div');
  g23A2div.id = 'g23A2';
  g23A2div.classList.add('text-light', 'bg-dark', 'rounded', 'm-1', 'p-3');
  g23A2div.textContent = g23QnA[2];

  g23A3div = document.createElement('div');
  g23A3div.id = 'g23A3';
  g23A3div.classList.add('text-light', 'bg-dark', 'rounded', 'm-1', 'p-3')
  g23A3div.textContent = g23QnA[3];

  g23A4div = document.createElement('div');
  g23A4div.id = 'g23A4';
  g23A4div.classList.add('text-light', 'bg-dark', 'rounded', 'm-1', 'p-3')
  g23A4div.textContent = g23QnA[4];

  g23pushQnA();
}

function g23pushQnA() {
  document.querySelector('#g23question').textContent = g23QnA[0];

  var j = 0;
  while (j < 4) {
    var i = Math.floor(Math.random() * 4) + 1;
    if (g23blackboard.indexOf(i) === -1) {
      g23blackboard[j] = i;
      switch (i) {
        case 1:
          document.querySelector('#g23options').appendChild((g23A1div));
          break;
        case 2:
          document.querySelector('#g23options').appendChild((g23A2div));
          break;
        case 3:
          document.querySelector('#g23options').appendChild((g23A3div));
          break;
        case 4:
          document.querySelector('#g23options').appendChild((g23A4div));
          break;
      }
      j++
    }
  }
  g23waitForClick();
}

function g23waitForClick() {
  document.querySelector('#g23A1').addEventListener('click', g23trueAnswer);
  document.querySelector('#g23A2').addEventListener('click', g23falseAnswer);
  document.querySelector('#g23A3').addEventListener('click', g23falseAnswer);
  document.querySelector('#g23A4').addEventListener('click', g23falseAnswer);
}

function g23waitForClick() {
  document.querySelector('#g23A1').addEventListener('click', g23trueAnswer);

}

function g23falseAnswer() {
  g23CurrentQnA.textContent = ' X';
  document.querySelector('#g23Result').appendChild(g23CurrentQnA);
  g23nextQ();
}

function g23trueAnswer() {
  g23CurrentQnA.textContent = ' ✓';
  document.querySelector('#g23Result').appendChild(g23CurrentQnA);
  g23nextQ();

}

function g23nextQ() { //Next question 
  if (g23roundDone != 9) {
    g23roundDone++;
    g23resetGame();
    g23getRandomQnA();
    window.clearTimeout(g23QnATimer);
    g23QnATimeLeft = 6;
    g23stopwatchplus();
  } else {
    g23resetGame();
    window.clearTimeout(g23QnATimer);
    window.clearTimeout(g23GameTimer);

  }
}



g23startGame();// automatic start
