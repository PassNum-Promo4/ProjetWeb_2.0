//author: Lionel SUVELOR


/* 2 major problems: _ some random questions "come back" even if they were already answered (check the associated function & see randel function)
_ start button does no want to be completly responsive after sm/xs breakpoint (maybe cuz btn-lg class)

_ check the functions definition and use cuz bracket says some are called before been defined, but it still works
_ correct the questions mouseover pointer as it  not fits its role (seems like text has to be entered)
*/

//QUIZ QUESTIONS
var g20Q1 = ['Sous quel nom JavaScript a été standardisé en 1997?', 'ECMAScript', 'JAVA', 'CoffeeScript', 'Johnny five'];
var g20Q2 = ['Quelle déclaration est vraie? ', 'Le code Java doit être compilé tandis que le code JavaScript est composé entièrement de texte (interprété)', 'Java et JS sont deux langages différents, issus du même créateur', 'Java est une île, Javascript est sa langue', 'Java et JS sont le même langage, mais JavaScript est utilisé pour le code s\'exécutant dans une page Web'];
var g20Q3 = ['Quelle est la forme de notation correcte des commentaires en JavaScript? ', '/*      */', '<!--     -->', '(*     *)', '!*     *! '];
var g20Q4 = ['Que signifie DOM?', 'Document Object Model', 'Dancing On the Moon', 'Data Organisation Manager', 'Digital Object Monitor'];
var g20Q5 = ['Que signifie l\'opérateur de comparaison "=="?', 'Comparer l\'égalité en valeur', 'Comparer l\'égalité en valeur et en type', 'Assigner une valeur à une variable', 'Comparer l\'égalité en type'];
var g20Q6 = ['Quelle méthode n\'existe pas dans le DOM?', 'document.getElementsByAttribute', 'document.getElementsByClassName', 'document.getElementsByTagName', 'document.getElementById'];
var g20Q7 = ['Comment renvoyer la longueur de la variable myVar?', 'myVar.length', 'length(myVar)', 'myVar.width', 'String.myVar.lenght'];
var g20Q8 = ['Comment déclarer le tableau « tab », de longueur 21 (indices) ?', 'var tab=array(20)', 'var tab(21)', 'tab=new Array(21)', 'var tab[20]'];
var g20Q9 = ['Qu\'est-ce que JQUERY par rapport à JavaScript?', 'Une bibliothèque libre et multi-plateformes', 'Une fonction puissante de requêtes', 'Un add-on pour les requêtes', 'Une demande en ami envoyée par JavaScript'];
var g20Q10 = ['Comment insérer un caractère spécial dans une chaine de caractères?', '\\', '/', '§', '$'];


//SETTING SOME DESIGN & CSS PROPERTIES
var g20bgPG = document.getElementById("playground").style.backgroundColor = "black";
var g20bgH = document.getElementById("jumbo").style.backgroundColor = "black";
var g20h1JT = document.getElementById("jumbo").style.fontFamily = "monospace";
var g20h1JT = document.getElementById("jumbo").style.fontSize = "3 rem";



var g20fontFam1 = document.getElementById("g20time").style.fontFamily = "monospace";
var g20fontFam3 = document.getElementById("g20scoreFinal").style.fontFamily = "monospace";
var g20borderSize1 = document.getElementById("g20time").style.borderStyle = "solid";
var g20borderBlack2 = document.getElementById("g20time").style.borderColor = "black";
var g20borderWidth1 = document.getElementById("g20time").style.borderWidth = "5px";
var g20borderSize2 = document.getElementById("g20scoreFinal").style.borderStyle = "solid";
var g20borderBlack2 = document.getElementById("g20scoreFinal").style.borderColor = "black";
var g20borderWidth2 = document.getElementById("g20scoreFinal").style.borderWidth = "5px";
var g20fontFam2 = document.getElementById("Q20Q").style.fontFamily = "monospace";
var g20fontSiz1 = document.getElementById("Q20Q").style.fontSize = "1.5rem";
var g20fontSiz2 = document.getElementById("Q20A1-4").style.fontSize = "1.2rem";

//header to "pass" in JS
/*var g20header = document.createElement("header");
      g20Title = document.createElement("h1");
h1.textContent = "JS QUIZ";
header.appendChild(h1);
document.body.appendChild(header);*/

//img1


//title


//img 2


//GENERAL QUIZ
var g20QAll = [g20Q1, g20Q2, g20Q3, g20Q4, g20Q5, g20Q6, g20Q7, g20Q8, g20Q9, g20Q10];
var g20Q = '';
var g20QdoNotUseA = [''];
var g20QdoNotUseQ = [''];
var g20Q1div = '';
var g20A1div = '';
var g20A2div = '';
var g20A3div = '';
var g20A4div = '';
var g20roundDone = 0;
var g20GameTime;
var g20GameTimeLeft = 9;
var g20rlt = 0;


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
        alert('Terminé! Score ' + g20rlt + '/10');
        g20rlt = 0;
        addPoints(g20rlt);
        loadNextMiniGame();
        console.log('Stop');

    } else {
        console.log('TimeLeft : ' + g20GameTimeLeft);
        g20GameTimeLeft--;
        g20GameTimedown();
    }
}


// GAME STARTER = ALLOWS GAME TO BEGIN WHEN STRAT BUTTON IS PRESSED
function g20startGame() {
    console.log('function : g20startGame()');
    g20resetGame();
    g20getRandom();
    g20GameTimedown();
    g20roundDone = 0;
}

function g20resetGame() {
    console.log('function : g20resetGame()');
    g20QdoNotUseA = [];
    document.querySelector('#Q20Q').innerHTML = '';
    document.querySelector('#Q20A1-4').innerHTML = '';
}

//GET RANDOM QUESTION --> SEE HOW TO DELETE THE QUESTION AFTER POSED IN ORDER TO NOT POSE THIS TWICE OR MORE (HERE IT DOES NOT WORK)
function g20getRandom() {
    console.log('function : g20getRandom()');
    while (g20roundDone < 10) {
        console.log(g20roundDone);
        var i = Math.floor(Math.random() * g20QAll.length);
        if (g20QdoNotUseA.indexOf(i) === -1) {
            g20QdoNotUseQ[g20roundDone] = i;
            g20Q = g20QAll[i];
            g20createArea();
            return g20Q;
            g20roundDone++;
        }
    }
}



/*
function randel (g20QAll) {    // GET RANDOM QUESTION AND DELETE IT AFTER ANSWERED FUNCTION
    var r = Math.round (Math.random() * (g20QAll.length - 1));
    var rec = g20QAll[r]; // VARIABLE STORIN THE QUESTION VALUE
    g20QAll.splice (r, 1); // FUNCTION SPLICE WITHDRAWS THE QUESTION FROM THE QUESTIONS ARRAY
    return rec;
}

Tableau = new Array();
for (var i=0; i<10; i++)
{
    Tableau[i] = (i+1);
}

while (Tableau.length)
{
    trace (randel(Tableau));
} */


//"PLAYGROUND" QUESTION CREATION
function g20createArea() {
    console.log('function : g20createArea()');
    g20Q1div = document.createElement('div');
    g20Q1div.id = 'Q20Q1';

//PLAYGROUND ANSWERS CREATION
    g20A1div = document.createElement('div');
    g20A1div.id = 'Q20A1';
    g20A1div.classList.add('bg-light', 'border', 'border-secondary', 'rounded', 'm-1', 'p-3', 'col-6', 'form-control');
    g20A1div.textContent = g20Q[1];

    g20A2div = document.createElement('div');
    g20A2div.id = 'Q20A2';
    g20A2div.classList.add('bg-muted', 'border', 'border-secondary', 'rounded', 'm-1', 'p-3', 'col-6', 'form-control');
    g20A2div.textContent = g20Q[2];

    g20A3div = document.createElement('div');
    g20A3div.id = 'Q20A3';
    g20A3div.classList.add('bg-muted', 'border', 'border-secondary', 'rounded', 'm-1', 'p-3', 'col-6', 'form-control')
    g20A3div.textContent = g20Q[3];

    g20A4div = document.createElement('div');
    g20A4div.id = 'Q20A4';
    g20A4div.classList.add('bg-muted', 'border', 'border-secondary', 'rounded', 'm-1', 'p-3', 'col-6', 'form-control')
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

function g20ForClick() {
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
        alert('Terminé, score: ' + g20rlt + '/10')
        g20A1divrlt = 0;
        g20resetGame();
        addPoints(g20rlt);
        loadNextMiniGame();
  }
}

function g20score() {
      g20rlt = g20rlt + 1;
      document.querySelector('#g20scoreFinal').textContent = 'Score: ' + g20rlt + '/10';
}
