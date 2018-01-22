/*
  Author : Amanda Medeiros
*/

var g13q1 = [
    "À quoi sert le CSS ?", // Index [0] - Question
    "Styliser une page web", // Index [1] - Correct answer
    "Garder des données", // Index[2] - Wrong answer
    "Afficher un site sur Internet", // Index[3] - Wrong answer
    "Rendre interactive une page web" // Index[4] - Wrong answer
];
var g13q2 = [
    "Quel code permet d’appliquer le même style aux balises <h1> et <p> ?",
    "h1, p {}",
    "h1 (p){}",
    "h1.p {}",
    "h1{p}"
];
var g13q3 = [
    "En CSS, comment sélectionnez-vous l’image suivante par son identifiant ? <img id = superimage src = image.png>",
    "#superimage {}",
    "superimage {}",
    "img { }",
    ".superimage {}"
];
var g13q4 = [
    "Quel est l'avantage du modèle Flexbox par rapport au modèle block ?",
    "Son caractère responsive",
    "Changer le code HTML",
    "Pouvoir ajouter un formulaire",
    "Afficher des animations"
];
var g13q5 = [
    "Quelle propriété peut être utilisé pour changer le type police?",
    "font-family",
    "font",
    "font-color",
    "font-syze"
];
var g13q6 = [
    "Qu’est ce que la pseudo-classe :hover permet de changer ?",
    "L’aspect d’un élément",
    "Le téléchargement d’un élément",
    "La balise &lt;body&gt;",
    "La balise &lt;p&gt;"
];
var g13q7 = [
    "Quelle est la fonction du pseudo-element :before ?",
    "Insérer de contenu avant un élément",
    "Insérer de contenu après un élément",
    "Cacher de contenu avant un élément",
    "Cacher de contenu après un élément"
];
var g13q8 = [
    "La propriété visibility peut avoir quelles valeurs ?",
    "Visible, hidden et collapse",
    "Visible, hidden et sticky",
    "Visible, invisible et hidden",
    "Hidden, fixed, sticky"
];
var g13q9 = [
    "La propriété padding spécifie l’espace entre…",
    "Le bord d’un élément et son contenu",
    "Les bordes de deux éléments",
    "Deux balises &lt;p&gt;",
    "Les balises &lt;body&gt; et &lt;head&gt;"
];
var g13q10 = [
    "Dans un flex container, quelle est l’orientation des éléments par défaut ?",
    "Horizontale",
    "Perpendiculaire",
    "Verticale",
    "Diagonale"
];


// Table with all questions
var g13_AllQ = [g13q1, g13q2, g13q3, g13q4, g13q5, g13q6, g13q7, g13q8, g13q9, g13q10];

var g13score = 0;

var g13index = 0;

var g13round = 0;

var g13counter = 10;

var g13ansrand;

var g13timer;

var g13currentTabQ = [];

var g13intervalId = null;

var g13A1 = document.querySelector("#answer1");
var g13A2 = document.querySelector("#answer2");
var g13A3 = document.querySelector("#answer3");
var g13A4 = document.querySelector("#answer4");

var g13divQuestion = document.querySelector("#question");

// function to start the game
g13startgame();

function g13startgame() {
    g13getRandomQA();
    g13intervalId = setInterval(g13reset, 1000);
}

//reset timer
function g13reset() {
    //document.getElementById("g13chrono").innerHTML = g13counter + " secondes";
    g13counter--;
    g13resetTimer();
}

// end of the game
/*
function g13endGame() {
    //clearInterval(g13intervalId);
    document.querySelector(".display").innerHTML = "";
    g13divAnswer.innerHTML = "GAME OVER";
    g13divQuestion.innerHTML = "";

}
*/
// function that stops the timer in the end of the game and load the next game
function g13resetTimer() {
    if (g13counter < 0) {
        g13counter = 10;
        setTimeout(g13getRandomQA, 1500);
    }
}

// function with a ordered table as parameter, returning a random table - used to have random answers
function g13RA(tab) {
    var g13randTable = [];
    g13randTable.push(tab[0]); // add inside the random table the element of the original table
    var g13tirage = [];
    for (var i = 0; i < 4; i++) {
        var g13valUnique = g13sendUniqueValue(g13tirage);
        g13tirage.push(g13valUnique);
        g13randTable.push(tab[g13valUnique]);
    }
    return g13randTable;
}

//send a value thats is not already present in the
function g13sendUniqueValue(tab) {
    var g13randnum = Math.floor(Math.random() * 4) + 1;
    while (g13exists(g13randnum, tab)) {
        g13randnum = Math.floor(Math.random() * 4) + 1;
    }
    return g13randnum;
}

//verify if there is one value in the table of values
function g13exists(valeur, tab) {
    for (i = 0; i < tab.length; i++) {
        if (tab[i] == valeur) {
            return true;
        }
    }
    return false;
}

//random question and answers without repeating it
function g13getRandomQA() {
    //output reinit
    g13A1.parentElement.classList.remove("bg-danger");
    g13A1.parentElement.classList.remove("bg-success");
    g13A2.parentElement.classList.remove("bg-danger");
    g13A2.parentElement.classList.remove("bg-success");
    g13A3.parentElement.classList.remove("bg-danger");
    g13A3.parentElement.classList.remove("bg-success");
    g13A4.parentElement.classList.remove("bg-danger");
    g13A4.parentElement.classList.remove("bg-success");

    if (g13round == 10) {
        //g13endGame();
        clearTimeout(g13intervalId);
        setTimeout(loadNextMiniGame, 2000);

    } else {
        g13currentTabQ = g13RandQ(g13_AllQ); // contains the current table with question and answers
        var g13ElemQ = document.createElement('h3');
        g13ElemQ.textContent = g13currentTabQ[0]; // contains the text of the question
        g13divQuestion.innerHTML = ''; // empties the div having the id = question
        g13divQuestion.appendChild(g13ElemQ); // adds the text of the question to the div having id = question
        //g13divAnswer.innerHTML = ''; 
        g13ansrand = g13RA(g13currentTabQ);

        // for (var i = 1; i < 5; i++) { // show the answers
        //var g13ElemA = document.createElement('input');
        //g13ElemA.value = g13ansrand[i];
        //g13ElemA.type = 'button';
        //g13ElemA.style = 'width:1000px'; // needed to show the entire answer

        g13A1.innerHTML = g13ansrand[1];
        g13A2.innerHTML = g13ansrand[2];
        g13A3.innerHTML = g13ansrand[3];
        g13A4.innerHTML = g13ansrand[4];

        g13A1.parentElement.addEventListener('click', g13result);
        g13A2.parentElement.addEventListener('click', g13result);
        g13A3.parentElement.addEventListener('click', g13result);
        g13A4.parentElement.addEventListener('click', g13result);
        //g13divAnswer.appendChild(g13ElemA);


        g13round++;

    }
    g13resetTimer();
    return g13round;
}

// creates a random table without repetition - used to have random questions
function g13RandQ(tab) {
    var g13Questions = "";
    var g13q = Math.floor(Math.random() * tab.length);
    g13Questions = tab[g13q];
    g13_AllQ.splice(g13q, 1);

    return g13Questions;
}

// increment the score, call the next question on click
function g13result() {
    var g13indexFound = g13ansrand.indexOf(g13currentTabQ[1]);
        var g13id = "answer" + g13indexFound;
        var g13p = document.getElementById(g13id);
        g13p.parentElement.classList.add("bg-success");
/*
    switch (g13indexFound) {
        case 1:
            g13A1.parentElement.classList.add("bg-success");
            break;
        case 2:
            g13A2.parentElement.classList.add("bg-success");
            break;
        case 3:
            g13A3.parentElement.classList.add("bg-success");
            break;
        case 4:
            g13A4.parentElement.classList.add("bg-success");
            break;
    }
*/
    if (this.children[0].innerHTML == g13currentTabQ[1]) {
        g13score = g13score + 1;
        g13counter = 10;
        //addpoints(1);
    } else {
        // afficher l'erreur
        this.classList.add("bg-danger");
        g13score = g13score;
        g13counter = 10;
    }

    //document.getElementById('score').innerHTML = "Score : " + g13score + " " + "/ 10 questions correctes";
    // go to next question
    setTimeout(g13getRandomQA, 1500);

    //g13reset();
}
