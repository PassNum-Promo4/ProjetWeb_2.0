/*
  Author : Torval Martial
*/
// Array Question/Awnser //

var g21myQuestion1 = ["Qui a développé le language de style CSS ? ", "World Wide Web Consortium", "Consortium", "Akira toriyama", "Media Grid Standards Organization"];
var g21myQuestion2 = ["Quel balise html permet de lier un fichier CSS à votre fichier HTML ?", "<Link>", "<Fixed>", "<body>", "<oda>"];
var g21myQuestion3 = ["Quel balise permet de selectionner une classe de votre fichier HTML ?", ".class", "-class", "class", "#class"];
var g21myQuestion4 = ["Quel balise permet de selectionner un ID de votre fichier HTML ?", "#id", "-id", "id", ".id"];
var g21myQuestion5 = ["Quel sont les deux propriétés css qui permettent d'affecter des marges aux différents éléments d'une page web ?", "margin/padding", "edge/filling", "flex/packing", "space/fill"];
var g21myQuestion6 = ["Comment sélectionner toutes les balises p de votre page HTML ?", "p", "all_p", ".p ", "#p "];
var g21myQuestion7 = ["Comment sélectionner toutes les balises de votre page HTML ?", "*", "all", "%", "@"];
var g21myQuestion8 = ["Comment sélectionner l'enfant direct d'un élément ? ", "Parent > Enfant", "Parent - Enfant", "Enfant > Parent", "Parent first enfant"];
var g21myQuestion9 = ["Comment sélectionner tout les éléments p qui sont des enfants direct d'une balise html ? ", "p > element", "p:first", "p:first-child", "p"];
var g21myQuestion10 = ["Lequel de ces quatres réponses est un Framework CSS ? ", "Miligram", "JQuery", "Lavarel", "Subaru"];
var g21totalQuestions = [g21myQuestion1, g21myQuestion2, g21myQuestion3, g21myQuestion4, g21myQuestion5, g21myQuestion6, g21myQuestion7, g21myQuestion8, g21myQuestion9, g21myQuestion10];

// Creating of 4 var(1 Question, 4 Awnser) //

var g21Questions = "";
var g21Answer1 = "";
var g21Answer2 = "";
var g21Answer3 = "";
var g21Answer4 = "";
var g21CurrentQuestion;
var g21True;
var g21False;

// Creating of one var which will contain the number of round //

var g21roundNumber = 0;

// Creating of two var for the Timer

var g21TotalCountdown = 60; //Timer of game at 60 seconds
var g21QuestionCountdown = 6; // Timer for awnser at the questions

// Crating of one var who serve to "delete" the question who was used

var g21QuestionNotUse = "";
var g21AnswerNotUse = "";


// Creating of one var for result

var g21result;

//When user will click on this button, this will activate all fonctions undermentioned


function g21Start() {

  g21RandomQuestionAnswer();
  g21timer()
  start.classList.add("d-none");
}

function g21RandomQuestionAnswer() {
  var g21randomQ = Math.floor(Math.random() * g21totalQuestions.length - 1);
  if (g21randomQ < 0) {
    g21randomQ = 0;
  }
  document.querySelector("#g21Questions").innerHTML = g21totalQuestions[g21randomQ][0];
  g21totalQuestions[g21randomQ].splice(0, 1);


  for (i = 0; i < 4; i++) {
    var g21randomA = Math.floor(Math.random() * g21totalQuestions[g21randomQ].length - 1);
    if (g21randomA < 0) {
      g21randomA = 0;
    }
    if (i == g21randomA) {
      g21Answer1 = document.createElement('button');
      g21Answer1.id = 'g21Answer1';
      g21Answer1.classList.add('col-12', 'border', 'border-dark', 'rounded', 'p-3', 'm-3', "bg-warning");
      g21Answer1.addEventListener("click", g21True);
      g21Answer1.textContent = g21totalQuestions[g21randomQ][0];
      document.querySelector("#g21Answers").appendChild(g21Answer1);
      g21totalQuestions[g21randomQ].splice(0, 1);

    } else{
      g21Answer2 = document.createElement('button');
      g21Answer2.id = 'g21Answer2';
      g21Answer2.classList.add('col-12', 'border', 'border-dark', 'rounded', 'p-3', 'm-3', "bg-warning");
      g21Answer2.addEventListener("click", g21False);
      g21Answer2.textContent = g21totalQuestions[g21randomQ][g21randomA];
      document.querySelector("#g21Answers").appendChild(g21Answer2);
      g21totalQuestions[g21randomQ].splice(g21randomA, 1);
    }
  }
  g21totalQuestions.splice(g21randomQ, 1);
  loadNextMiniGame();
}

function g21reset() {
  document.querySelector("#g21Answers").innerHTML = "";
  document.querySelector("#g21Questions").innerHTML = "";
}



// Function who change the color by if the answer is true or false

function g21True() {
  g21Answer1.classList.add('p-1', 'border', 'bg-success');
  addPoints(1)
  g21reset();
  g21RandomQuestionAnswer();
}

function g21False() {
  g21Answer2.classList.add('p-1', 'border', 'bg-danger');
  window.setTimeout('g21RandomQuestionAnswer()', 100);;
    g21reset();

}

function g21timer() {
 let g21timeLeft = 6
g21timeLeft = document.querySelector("#g21Countdown").innerHTML = "Compte à rebours : 6"
}
