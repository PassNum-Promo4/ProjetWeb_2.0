/*
author: Lionel SUVELOR
*/

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
var g20Q8 = ['Comment déclarer le tableau « tab », de longueur 21 (indices) ?', 'var tab = array(20)', 'var tab(21)', 'tab = new Array(21)', 'var tab[20]'];
var g20Q9 = ['Qu\'est-ce que JQUERY par rapport à JavaScript?', 'Une bibliothèque libre et multi-plateformes', 'Une fonction puissante de requêtes', 'Un add-on pour les requêtes', 'Une demande en ami envoyée par JavaScript'];
var g20Q10 = ['Comment insérer un caractère spécial dans une chaine de caractères?', '\\', '/', '§', '$'];


//A LIL BIT OF STYLE
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
var g20scoreDisp = document.getElementById("g20gameScore");
g20scoreDisp.style.fontFamily = "monospace";
g20scoreDisp.style.border = "5px solid black";
//extractin g20questionsArea & stylin it up
var g20questionArea = document.getElementById("g20Q");
g20questionArea.style.font = "bold 1.5rem monospace";
//extractin g20answerArea & stylin it up
var g20answerArea = document.getElementById("g20A1-4");
g20answerArea.style.font = "300 1.2rem monospace";
g20answerArea.style.color = "black";
g20answerArea.style.cursor = "pointer";
// extracting g20StartBtn & stylin' it up
var g20StartBtn = document.getElementById("g20StartBtn");
g20StartBtn.style.cursor = "pointer";
g20StartBtn.style.fontFamily = "monospace";




//GENERAL QUIZ
var g20Qtab = [g20Q1, g20Q2, g20Q3, g20Q4, g20Q5, g20Q6, g20Q7, g20Q8, g20Q9, g20Q10];
var g20Q = '';
var g20QdoNotUseA = [''];
var g20doNotUseQnA = [''];
var g20Q1div = '';
var g20A1div = '';
var g20A2div = '';
var g20A3div = '';
var g20A4div = '';
var g20roundN = 0;
var g20QTimer;
var g20QTimeLeft = 9;
var g20rst = 0;


//TIMER

function g20GameContdown() {
    g20QTimer = window.setTimeout('g20UpdateGameTimer()', 1000);
}

function g20UpdateGameTimer() {
    document.querySelector('#g20time').textContent = 'Time: ' + g20QTimeLeft + 's';
    if (g20QTimeLeft <= 0) {
        g20falseAnswer();
        /* g20QTimeLeft = 9;    // see if i can delete it now
         g20roundN = g20roundN + 1;
         console.log('Stop');
         g20resetGame();
         g20GameContdown();
         g20getRandom();*/
    } else if (g20roundN === 10) {
        //g20resetGame();
        //g20rst = 0;
        g20verdict();
        g20endBtn();

    } else {
        g20QTimeLeft--;
        g20GameContdown();
    }
}


// GAME STARTER - OUT OF FUNCTIONS
document.querySelector('#g20StartBtn').addEventListener('click', g20startGame);


// GAME STARTER BUTTON PRESSED = ALLOWS GAME TO BEGIN 
function g20startGame() {
    g20resetGame();
    g20getRandom();
    g20GameContdown();
    g20roundN = 0;
    g20StartBtn.style.display = "none";
}



//SCORING
function g20score() {

    g20rst = g20rst + 1;
    document.querySelector('#g20gameScore').textContent = 'Score: ' + g20rst + '/10';
}



//CLEARING THE GAME AREA
function g20resetGame() {

    g20QdoNotUseA = [];
    document.querySelector('#g20Q').innerHTML = '';
    document.querySelector('#g20A1-4').innerHTML = '';
}

//GET RANDOM QUESTION --> SEE HOW TO DELETE THE QUESTION AFTER POSED IN ORDER TO NOT POSE THIS TWICE OR MORE (HERE IT DOES NOT WORK)

function g20getRandom() {

    while (g20roundN < 10) {
        var i = Math.floor(Math.random() * g20Qtab.length);
        if (g20doNotUseQnA.indexOf(i) === -1) {
            g20doNotUseQnA[g20roundN] = i;
            g20Q = g20Qtab[i];
            g20createArea();
            return g20Q;
        }
    }
}

/*
function g20getRandom(g20Qtab) {    // GET RANDOM QUESTION AND DELETE IT AFTER ANSWERED FUNCTION
    var g20r = Math.round (Math.random() * (g20Qtab.length - 1));
    var g20rec = g20Qtab[g20r]; // VARIABLE STORIN THE QUESTION VALUE
    g20pushQ()
    g20Qtab.splice (g20r, 1); // WITHDRAWS THE QUESTION FROM THE QUESTIONS ARRAY
    return g20rec;
}
*/
/*
Tableau = new Array();
for (var i = 0; i < 10; i++) {
    Tableau[i] = (i + 1);
}
while (Tableau.length) {
    trace(randel(Tableau));
}
*/
//experimenting functions to get the problem solved !
//PROBLEM SOLVED


function g20nextQ() {

    if (g20roundN !== 10) {
        g20roundN++;
        g20resetGame();
        g20getRandom();
        window.clearTimeout(g20QTimer);
        g20QTimeLeft = 9;
        g20UpdateGameTimer();

    } else {

        g20verdict();
        g20endBtn();
        window.clearTimeout(g20QTimer);
        g20A1divrst = 0;
        g20resetGame();

    }
}


//"PLAYGROUND" QUESTION CREATION
function g20createArea() {
    g20Q1div = document.createElement('div');
    g20Q1div.id = 'g20Q1';

    //PLAYGROUND ANSWERS CREATION
    g20A1div = document.createElement('div'); // can easily be a button element, change it if needed sir
    g20A1div.id = 'g20A1';
    g20A1div.classList.add('bg-muted', 'border', 'border-secondary', 'rounded', 'm-1', 'p-3', 'col-6', 'form-control', 'font-weight-bold');
    g20A1div.textContent = g20Q[1];

    g20A2div = document.createElement('div');
    g20A2div.id = 'g20A2';
    g20A2div.classList.add('bg-muted', 'border', 'border-secondary', 'rounded', 'm-1', 'p-3', 'col-6', 'form-control', 'font-weight-bold');
    g20A2div.textContent = g20Q[2];

    g20A3div = document.createElement('div');
    g20A3div.id = 'g20A3';
    g20A3div.classList.add('bg-muted', 'border', 'border-secondary', 'rounded', 'm-1', 'p-3', 'col-6', 'form-control', 'font-weight-bold')
    g20A3div.textContent = g20Q[3];

    g20A4div = document.createElement('div');
    g20A4div.id = 'g20A4';
    g20A4div.classList.add('bg-muted', 'border', 'border-secondary', 'rounded', 'm-1', 'p-3', 'col-6', 'form-control', 'font-weight-bold')
    g20A4div.textContent = g20Q[4];

    g20pushQ();
}

function g20pushQ() {
    document.querySelector('#g20Q').textContent = g20Q[0];
    var j = 0;
    while (j < 4) {
        var i = Math.floor(Math.random() * 4) + 1;
        if (i !== g20QdoNotUseA[0] && i !== g20QdoNotUseA[1] && i !== g20QdoNotUseA[2] && i !== g20QdoNotUseA[3]) {
            g20QdoNotUseA[j] = i;
            switch (i) {
                case 1:
                    document.querySelector('#g20A1-4').appendChild((g20A1div));
                    break;
                case 2:
                    document.querySelector('#g20A1-4').appendChild((g20A2div));
                    break;
                case 3:
                    document.querySelector('#g20A1-4').appendChild((g20A3div));
                    break;
                case 4:
                    document.querySelector('#g20A1-4').appendChild((g20A4div));
                    break;
            }
            j++;
        }
    }
    g20answerPick();
}



function g20answerPick() { //GIVES INFORMATION ABOUT THE PICKED ANSWER => RIGHT OR WRONG
    document.querySelector('#g20A1').addEventListener('click', g20trueAnswer);
    document.querySelector('#g20A2').addEventListener('click', g20falseAnswer);
    document.querySelector('#g20A3').addEventListener('click', g20falseAnswer);
    document.querySelector('#g20A4').addEventListener('click', g20falseAnswer);
}

function g20showAns() {

    //PREVENT USER NONSENSE CLICKING OR CHEATING BY REMOVIN THE "EVENT LISTERNER"
    g20A1div.removeEventListener('click', g20trueAnswer);
    g20A2div.removeEventListener('click', g20falseAnswer);
    g20A3div.removeEventListener('click', g20falseAnswer);
    g20A4div.removeEventListener('click', g20falseAnswer);
    window.clearTimeout(g20QTimer); // FREEZIN THE MAIN TIMER
    //SPOTLIGHTIN GOOD AND BAD ANSEWERS
    document.getElementById("g20A1").classList.add("alert-info", "font-weight-bold", "btn-lg", "col-8", "text-dark");
    document.getElementById("g20A2").classList.add("btn-danger", "text-dark");
    document.getElementById("g20A3").classList.add("btn-danger", "text-dark");
    document.getElementById("g20A4").classList.add("btn-danger", "text-dark");
    g20revealTimer = window.setTimeout('g20nextQ()', 1500);

}


function g20trueAnswer() {
    g20showAns();
    g20score();
    addPoints(1);

}


function g20falseAnswer() {
    g20showAns();
}



/* TREAT THE CASE IF USER NO ANSWERS -> REAVEAL THE SOLUTION ANYWAY// NOT WORKS - see with addeventlisteners
function g20noAnswer() {
    if (g20QTimeLeft == 0) {
        console.log('no response');
        g20showAns();
    }
}
PROBLEM SOLVED*/





//create a span with results in the g20Qdiv (id);
function g20verdict() {

    g20resetGame();
    var g20finalRst = document.createElement('span');
    g20finalRst.id = 'g20finalDisp';
    g20finalRst.style.font = "bold 1.5rem monospace";
    //g20finalRst.classList.add('col-12', 'd-flex', 'justify-content-center', 'row', 'text-center', 'p-1', 'alert-info', 'mx-auto', 'font-weight-bold', 'text-dark', 'mt-5'); // DOES NOT WORK IN MONOSPACE - WHYYYYYY?

    g20finalRst.classList.add('col-12', 'd-flex', 'justify-content-center', 'mt-5', 'text-center', 'text-light', 'row'); // WORKS IN 'MONOSPACE' 

    document.querySelector('#g20jumbo').appendChild(g20finalRst);
    document.querySelector('#g20major').innerHTML = '';
    if (g20rst <= 4) { //g20resetGame();

        alert('GAME OVER');
        g20finalRst.textContent = 'Score: ' + g20rst + '/10. \n\n\t C\'EST INADMISSIBLE !!!';

        //g20rst = 0;

    } else if (g20rst <= 7) { //g20resetGame();

        alert('GAME OVER');
        g20finalRst.textContent = 'Score: ' + g20rst + '/10 \n\n\t  BIEN, MAIS DES ERREURS ONT ÉTÉ COMMISES ';

        //g20rst = 0;

    } else if (g20rst <= 9) { //g20resetGame();

        alert('GAME OVER');
        g20finalRst.textContent = 'Score: ' + g20rst + '/10 \n\n\t  BON TRAVAIL ';

        //g20rst = 0;

    } else if (g20rst == 10) { //g20resetGame();

        alert('GAME OVER');
        g20finalRst.textContent = 'Score: ' + g20rst + '/10 \n\n\t  PERFECT';

    }

}


function g20endBtn() {
    var g20newBtnArea = document.getElementById("g20top");
    g20newBtnArea.style.paddingBottom = "300px";


    var g20goToNext = document.createElement('button'); //create a btn
    g20goToNext.id = 'g20finalBtn'; // give it an id
    g20goToNext.textContent = 'NEXT QUIZZ'; // set the text of the btn
    g20goToNext.style.cursor = "pointer";
    g20goToNext.style.fontFamily = "monospace";
    g20goToNext.classList.add('btn-block', 'btn-default', 'col-3', 'col-s-3', 'col-xs-3', 'mx-auto', 'm-2', 'mb-5', 'font-weight-bold', 'text-black', 'active', 'rounded'); // add classes to the btn
    g20goToNext.classList.remove('jumbotron'); // remove some classes, doesnt work
    g20goToNext.onclick = loadNextMiniGame; // replace by loadNextMiniGame - g20startGame
    document.querySelector('#g20top').appendChild(g20goToNext); // make the btn "appear" pls pick a better place as it is too down


}
