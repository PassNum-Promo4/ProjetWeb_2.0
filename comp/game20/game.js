//author: Lionel SUVELOR

// g20startGame();  iF START BUTTON IS REMOVED - A FIRST 9S BEGAN WITHOUT FIRST QUESTION - WATCHOUT

/* 2 major problems:
_ start button does no want to be completly responsive after sm/xs breakpoint (maybe cuz btn-lg class)
_ keep the global score up to date, see the corresponding function addPoints()

_ check the functions definition and use cuz bracket says some are called before been defined, but it still works
_ correct the questions mouseover pointer as it  not fits its role (seems like text has to be entered)
_ black bg doesn't "go" to the bottom of the page, see why
*/

//QUIZ QUESTIONS
var g20Q1 = ['Sous quel nom JavaScript a été standardisé en 1997?', 'ECMAScript', 'JAVA', 'CoffeeScript', 'Johnny five'];
var g20Q2 = ['Quelle déclaration est vraie? ', 'Le code Java doit être compilé tandis que le code JavaScript est composé entièrement de texte (interprété)', 'Java et JS sont deux langages différents, issus du même créateur', 'Java est une île, Javascript est sa langue', 'Java et JS sont le même langage, mais JavaScript est utilisé pour le code s\'exécutant dans une page Web'];
var g20Q3 = ['Quelle est la forme de notation correcte des commentaires en JavaScript? ', '/*      */', '<!--     -->', '(*     *)', '!*     *! '];
var g20Q4 = ['Quel est l\'intérêt majeur des boucles ?', 'Répéter un certain nombre de fois une même instruction', 'Avoir les cheveux ondulés', 'Incrémenter une variable à l\'infini', 'Spammer sans se fatiguer'];
var g20Q5 = ['Que signifie l\'opérateur de comparaison "=="?', 'Comparer l\'égalité en valeur', 'Comparer l\'égalité en valeur et en type', 'Assigner une valeur à une variable', 'Comparer l\'égalité en type'];
var g20Q6 = ['Quelle méthode n\'existe pas dans le DOM?', 'document.getElementsByAttribute', 'document.getElementsByClassName', 'document.getElementsByTagName', 'document.getElementById'];
var g20Q7 = ['Comment renvoyer la longueur de la variable myVar?', 'myVar.length', 'length(myVar)', 'myVar.width', 'String.myVar.lenght'];
var g20Q8 = ['Comment déclarer le tableau « tab », de longueur 21 (indices) ?', 'var tab=array(20)', 'var tab(21)', 'tab=new Array(21)', 'var tab[20]'];
var g20Q9 = ['Qu\'est-ce que JQUERY par rapport à JavaScript?', 'Une bibliothèque libre et multi-plateformes', 'Une fonction puissante de requêtes', 'Un add-on pour les requêtes', 'Une demande en ami envoyée par JavaScript'];
var g20Q10 = ['Comment insérer un caractère spécial dans une chaine de caractères?', '\\', '/', '§', '$'];


//SETTING SOME DESIGN & CSS PROPERTIES
//extractin main playground and stylin it up
var g20main = document.getElementById("g20playground");
g20main.style.backgroundColor = "black";
//extractin g20jumbotron and stylin it up  
var g20jumbotron = document.getElementById("g20jumbo");
g20jumbotron.style.backgroundColor = "black";
g20jumbotron.style.font = "bolder 3rem monospace";
//extractin g20timer and stylin it up  
var g20timer = document.getElementById("g20time");
g20timer.style.fontFamily = "monospace";
g20timer.style.border = "5px solid black";
//extractin g20scoreDisp and stylin it up  
var g20scoreDisp = document.getElementById("g20scoreFinal");
g20scoreDisp.style.fontFamily = "monospace";
g20scoreDisp.style.border = "5px solid black";
//extractin g20questionsArea & stylin it up
var g20questionArea = document.getElementById("Q20Q");
g20questionArea.style.font = "bold 1.5rem monospace";
//extractin g20answerArea & stylin it up
var g20answerArea = document.getElementById("Q20A1-4");
g20answerArea.style.font = "300 1.2rem monospace";
g20answerArea.style.color = "black";




//GENERAL QUIZ
var g20QAll = [g20Q1, g20Q2, g20Q3, g20Q4, g20Q5, g20Q6, g20Q7, g20Q8, g20Q9, g20Q10];
var g20Q = '';
var g20QdoNotUseA = [''];
var g20doNotUseQnA = [''];
var g20Q1div = '';
var g20A1div = '';
var g20A2div = '';
var g20A3div = '';
var g20A4div = '';
var g20roundDone = 0;
var g20GameTime;
var g20GameTimeLeft = 9;
var g20rst = 0;


//TIMER
function g20GameTimedown() {
    g20GameTime = window.setTimeout('g20UpdateGameTimer()', 1000);
}

function g20UpdateGameTimer() {
    document.querySelector('#g20time').textContent = 'Time: ' + g20GameTimeLeft + 's';
    if (g20GameTimeLeft <= 0) {
        g20GameTimeLeft = 9;
        g20roundDone = g20roundDone + 1;
        console.log('Stop');
        g20resetGame();
        g20GameTimedown();
        g20getRandom();
    } else if (g20roundDone === 10) {
        g20GameTimeLeft = 9;
        g20resetGame();
        alert('Terminé! Score ' + g20rst + '/10');
        g20rst = 0;
        addPoints(g20rst); // change it to increment the global score 1 by 1 
        loadNextMiniGame();
        console.log('Stop');
    } else {
        console.log('TimeLeft : ' + g20GameTimeLeft);
        g20GameTimeLeft--;
        g20GameTimedown();
    }
}

// GAME STARTER = ALLOWS GAME TO BEGIN WHEN START BUTTON IS PRESSED
function g20startGame() {
    console.log('function : g20startGame()');
    g20resetGame();
    g20getRandom();
    g20GameTimedown();
    g20roundDone = 0;
}


//CLEARING THE GAME AREA
function g20resetGame() {
    console.log('function : g20resetGame()');
    g20QdoNotUseA = [];
    document.querySelector('#Q20Q').innerHTML = '';
    document.querySelector('#Q20A1-4').innerHTML = '';
}

//GET RANDOM QUESTION --> SEE HOW TO DELETE THE QUESTION AFTER POSED IN ORDER TO NOT POSE THIS TWICE OR MORE (HERE IT DOES NOT WORK)

function g20getRandom() { //Pick a random QnA in the QnA tab
  while (g20roundDone < 10) {
    var i = Math.floor(Math.random()*g20QAll.length);
    if (g20doNotUseQnA.indexOf(i) === -1) {
      g20doNotUseQnA[g20roundDone] = i;
      g20Q = g20QAll[i];
      g20createArea();
      return g20Q;
    }
  }
}

/*
function g20getRandom(g20QAll) {    // GET RANDOM QUESTION AND DELETE IT AFTER ANSWERED FUNCTION
    var g20r = Math.round (Math.random() * (g20QAll.length - 1));
    var g20rec = g20QAll[g20r]; // VARIABLE STORIN THE QUESTION VALUE
    g20pushQ()
    g20QAll.splice (g20r, 1); // WITHDRAWS THE QUESTION FROM THE QUESTIONS ARRAY
    return g20rec;
}
*/
/*
Tableau = new Array();
for (var i=0; i<10; i++)
{
    Tableau[i] = (i+1);
}

while (Tableau.length)
{
    trace (randel(Tableau));
} 
*/
//experimenting functions to get the problem solved !
//PROBLEM SOLVED

//"PLAYGROUND" QUESTION CREATION
function g20createArea() {
    console.log('function : g20createArea()');
    g20Q1div = document.createElement('div');
    g20Q1div.id = 'Q20Q1';

//PLAYGROUND ANSWERS CREATION
    g20A1div = document.createElement('div');      // can easily be a button element, change it if needed sir
    g20A1div.id = 'Q20A1';
    g20A1div.classList.add('bg-muted', 'border', 'border-secondary', 'rounded', 'm-1', 'p-3', 'col-6', 'form-control','font-weight-bold');
    g20A1div.textContent = g20Q[1]; 

    g20A2div = document.createElement('div');
    g20A2div.id = 'Q20A2';
    g20A2div.classList.add('bg-muted', 'border', 'border-secondary', 'rounded', 'm-1', 'p-3', 'col-6', 'form-control','font-weight-bold');
    g20A2div.textContent = g20Q[2];

    g20A3div = document.createElement('div');
    g20A3div.id = 'Q20A3';
    g20A3div.classList.add('bg-muted', 'border', 'border-secondary', 'rounded', 'm-1', 'p-3', 'col-6', 'form-control','font-weight-bold')
    g20A3div.textContent = g20Q[3];

    g20A4div = document.createElement('div');
    g20A4div.id = 'Q20A4';
    g20A4div.classList.add('bg-muted', 'border', 'border-secondary', 'rounded', 'm-1', 'p-3', 'col-6', 'form-control','font-weight-bold')
    g20A4div.textContent = g20Q[4];

  g20pushQ();
}

function g20pushQ() {
    console.log('function : g20pushQ()');
    document.querySelector('#Q20Q').textContent = g20Q[0];

  var j = 0;
  while (j < 4) {
        var i = Math.floor(Math.random() * 4) + 1;
        if (i !== g20QdoNotUseA[0] && i !== g20QdoNotUseA[1] && i !== g20QdoNotUseA[2] && i !== g20QdoNotUseA[3]) {
            g20QdoNotUseA[j] = i;
            console.log(g20QdoNotUseA);
            switch (i) {
            case 1:
                document.querySelector('#Q20A1-4').appendChild((g20A1div));
                break;
            case 2:
                document.querySelector('#Q20A1-4').appendChild((g20A2div));
                break;
            case 3:
                document.querySelector('#Q20A1-4').appendChild((g20A3div));
                break;
            case 4:
                document.querySelector('#Q20A1-4').appendChild((g20A4div));
                break;
            }
            j++;
        }
    }
    g20ForClick();
}

function g20ForClick() {        //GIVES INFORMATION ABOUT THE PICKED ANSWER => RIGHT OR WRONG
    console.log('function : g20ForClick()');
    document.querySelector('#Q20A1').addEventListener('click', g20trueAnswer);
    document.querySelector('#Q20A2').addEventListener('click', g20falseAnswer);
    document.querySelector('#Q20A3').addEventListener('click', g20falseAnswer);
    document.querySelector('#Q20A4').addEventListener('click', g20falseAnswer);
}

function g20falseAnswer() {
    g20nextQ();
    console.log('false');
}

function g20trueAnswer() {
    g20nextQ();
    console.log('true');
    g20score();
}

function g20nextQ() {
    if (g20roundDone !== 10) {
        g20roundDone++;
        g20GameTimeLeft = 9;
        g20resetGame();
        g20getRandom();

  } else {
        alert('Terminé, score: ' + g20rst + '/10')
        g20A1divrst = 0;
        g20resetGame();
        addPoints(g20rst);
        loadNextMiniGame();
  }
}

function g20score() {
      g20rst = g20rst + 1;
      document.querySelector('#g20scoreFinal').textContent = 'Score: ' + g20rst + '/10';
}
