/*
Author: Lionel SUVELOR
*/



// INITIAL CODE AND STYLE JUST SADLY BLOWN AWAY, CONTACT ME IF YOU REMINISCIN THE BEAUTIFUL PRIOR VERSION - FOR A LIL BUNCH OF BUCKS I WOULD BE HAPPY TO GIVE IT TO YOU


// MAIN G20 PLAYGROUND CONTAINER
var g20container = document.querySelector('#g20container');
//QUIZ QUESTIONS
var g20q1 = ['Sous quel nom JavaScript a été standardisé en 1997?', 'ECMAScript', 'JAVA', 'CoffeeScript', 'Johnny five'];
var g20q2 = ['Quelle déclaration est vraie? ', 'Le code Java est compilé, le JavaScript interprété', 'Ils sont du même créateur', 'Java est une île, Javascript est sa langue', 'Java et JavaScript sont un seul et même langage'];
var g20q3 = ['Quelle est la forme de notation correcte des commentaires en JavaScript? ', '/* [comment] */', '<!-- [comment] -->', '(* [comment]  *)', '!*  [comment] *! '];
var g20q4 = ['Quel est l\'intérêt majeur des boucles ?', 'Répéter une instruction', 'Avoir les cheveux ondulés', 'Incrémenter une variable à l\'infini', 'Spammer sans se fatiguer'];
var g20q5 = ['Que signifie l\'opérateur de comparaison "=="?', 'Comparer l\'égalité en valeur', 'Comparer l\'égalité en valeur et en type', 'Assigner une valeur à une variable', 'Comparer l\'égalité en type'];
var g20q6 = ['Quelle méthode n\'existe pas dans le DOM?', 'document.getElementsByAttribute', 'document.getElementsByClassName', 'document.getElementsByTagName', 'document.getElementById'];
var g20q7 = ['Comment renvoyer la longueur de la variable myVar?', 'myVar.length', 'length(myVar)', 'myVar.width', 'String.myVar.lenght'];
var g20q8 = ['Comment déclarer le tableau « tab », de longueur 21 (indices) ?', 'var tab = array(20)', 'var tab(21)', 'tab = new Array(21)', 'var tab[20]'];
var g20q9 = ['Qu\'est-ce que JQUERY par rapport à JavaScript?', 'Une bibliothèque libre et multi-plateformes', 'Une fonction puissante de requêtes', 'Un add-on pour les requêtes', 'Une demande en ami envoyée par JavaScript'];
var g20q10 = ['Comment insérer un caractère spécial dans une chaine de caractères?', '\\', '/', '§', '$'];
//GENERAL QUESTIONS TAB
var g20qtab = [g20q1, g20q2, g20q3, g20q4, g20q5, g20q6, g20q7, g20q8, g20q9, g20q10];
// QUESTION TIME
var g20Time = 9;

// FUNCTION SETTING THE PROGRESS BAR DURATION THEN CALLS g20RESULT,
setTimer(g20Time, g20resultQ);

// SETTIN PERSONALIZED TITLE FOR EACH GAME
resetGameTitle("JS QUIZ - Lionel's Version");


// SHOWIN ANSWERS AFTER CLICKING OR TIME OUT
function g20resultQ() {
    // SELECT PROGRESS BAR DIV & PAUSE IT
    document.querySelector('.progress-bar').classList.add("paused");
    // PUTTING RED BG ON FALSE ANSWER
    this.classList.add("bg__false-answer");
    // REMOVE THIS BG IF GOOD ANSWER
    document.querySelector('#g20true').classList.remove("bg__false-answer");
    // PUT GREEN BG ON GOOD ANSWER
    document.querySelector('#g20true').classList.add("bg__true-answer");
    // REMOVE NONSENSE CLICKING OR CHEATING PURPOSE BY ADDING MORE THAN 1 POINT
    document.querySelector('#g20true').removeEventListener("click", g20score);
    // SETTING A 2000 MS DELAY BEFORE NEW QUESTION  CALL
    setTimeout(function () {
        g20randomQ()
    }, 2000);

    var g20disabled = [];
    for (var i = 0; i < 4; i++) {
        g20disabled.push(document.querySelectorAll('.g20myAnswers')[i]);
    }

    for (var i = 0; i < g20disabled.length; i++) {
        // REMOVIN THE CLICKABLE ASPECT
        g20disabled[i].removeEventListener("click", g20resultQ);
        // REMOVIN THE HOVER EFFECT TO SEE THE REAL BG COLOR
        g20disabled[i].classList.remove("btn_hover");
    }

}


// +1 FOR EACH CORRECT ANSWER
function g20score() {
    addPoints(1);
}


// AS ITS NAME SAYS
function g20gameOver() {
    // CLEARIN PAGE
    document.querySelector('#g20R1').innerHTML = "";
    document.querySelector('#g20R2').innerHTML = "";
    document.querySelector('#g20R3').innerHTML = "";
    document.querySelector('#g20R4').innerHTML = "";
    // HIDIN OUT THE PROGRESS BAR
    document.querySelector('#g20QetT').style.display = "none";
    // CHANGIN THE INITIAL "start button" BY
    document.querySelector('#g20form__submit').value = "Next QUIZ";
    document.querySelector('#g20form__submit').classList.add ("btn", "col-3", "col-sm-5", "mx-auto", "border");

    document.querySelector('#g20form__submit').disabled = false;
    // THIS MIGHTY BUTTON RETURN
    document.querySelector('#g20form__submit').style.display = "block";
    // GIVIN IT THE loadNextMiniGame() POWER
    document.querySelector('#g20form__submit').addEventListener("click", loadNextMiniGame);
}


// RANDOM QNA GENERATION
function g20randomQ() {
    // PROGRESS BAR RESET
    document.querySelector('.progress-bar').classList.remove("paused");
    // SELECT IT
    var g20ProgressBar = document.querySelector('.progress-bar');
    // CLEARIN IT
    document.querySelector('.progress').innerHTML = "";
    // SELECT PROGRESS BAR DIV
    var progress = document.querySelector('.progress');
    // PUSHIN IT
    progress.appendChild(g20ProgressBar);
    // ARE SOME QUESTIONS LEFT?
    if (g20qtab.length < 1) {
        g20gameOver();
    } else {


        // CLEARIN THE ZONE
        document.querySelector('#g20R1').innerHTML = "";
        document.querySelector('#g20R2').innerHTML = "";
        document.querySelector('#g20R3').innerHTML = "";
        document.querySelector('#g20R4').innerHTML = "";
        // DEACTIVATIN START BUTTON
        document.querySelector('#g20form__submit').disabled = true;
        // HIDIN IT
        document.querySelector('#g20form__submit').style.display = "none";
        // GET A RANDOM NUMBER IN THE WHOLE TAB LENGTH
        var g20rdQ = Math.floor(Math.random() * g20qtab.length);
        // STORIN A VAR AND LINKIN IT TO QUESTION ZONE DIV
        var g20Q = document.querySelector(".g20Qzone");
        var g20Qcontainer = document.querySelector('#g20Qcontainer');
        // FILLIN QUESTION
        g20Q.textContent = g20qtab[g20rdQ][0];
        // MAKE THE QUESTION APPEARS
        g20Qcontainer.appendChild(g20Q);
        // QUESTIONS FROM ANSWERS SEPARATING
        g20qtab[g20rdQ].shift();

        // SELECTIN THE ANSWERS BUTTONS DIV
        var g20R1 = document.querySelector('#g20R1');
        var g20R2 = document.querySelector('#g20R2');
        var g20R3 = document.querySelector('#g20R3');
        var g20R4 = document.querySelector('#g20R4');

        // TAB CREATION TO PUT ANSWER BUTTONS IN IT
        var g20tabRep = [];

        // CREATIN ANSWERS BUTTONS AND ADDING EVENT LISTENERS TO EM
        for (var g20i = 0; g20i < g20qtab[g20rdQ].length; g20i++) {
            var g20reponse = document.createElement("button");
            var g20repText = document.createElement("p");
            g20repText.textContent = g20qtab[g20rdQ][g20i];
            g20reponse.appendChild(g20repText);
            // GOOD ANSWER INDEX IS NOW 0 CUZZ QUESTION WAS SUPPRESSED FROM THA TAB
            if (g20i == 0) {
                g20reponse.id = "g20true";
                g20reponse.addEventListener('click', g20score);
            } else {
                g20reponse.className = "g20false";
            }
            // BUTTON STYLIN
            g20reponse.classList.add("btn_hover", "bg-color__body", "p-4", "btn", "btn-lg", "col-12", "mt-2", "text-dark", "round", "g20myAnswers")

            g20reponse.addEventListener('click', g20resultQ);

            g20tabRep.push(g20reponse);
        }


        // SHUFFLING QUESTION TABS TO GET ONE RANDOMLY
        g20tabRep.sort(function (a, b) {
            return 0.5 - Math.random()
        });
        //PUSHING BUTTONS ON THEIR AREA
        g20R1.appendChild(g20tabRep[0]);
        g20R2.appendChild(g20tabRep[1]);
        g20R3.appendChild(g20tabRep[2]);
        g20R4.appendChild(g20tabRep[3]);

        // DELETING QUESTION FROM THE GENERAL TAB TO WONT GET IT AGAIN
        g20qtab.splice(g20rdQ, 1);
    }
}


// STARTIN THE GAME AT THE PAGE LOADING
g20randomQ();
