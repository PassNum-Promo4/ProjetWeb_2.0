/*
  Author : Gavarini Kevin
*/

// Declaration of the variables containing the questions, in the following format: ["question", "good answer", "wrong answer", "wrong answer", "wrong answer"]
var g10q1 = ["Quelle est la signification de CSS?", "Cascading Style Sheet", "Creative Style Sheet", "Constant Style Sheet", "Obi-wan Kenobi"];
var g10q2 = ["Laquelle de ces propositions a la bonne syntaxe?", "body {color:black;}", "{body:color=black;}", "body:color=black;", "{body;color=black;}"];
var g10q3 = ["Comment insérer un commentaire en CSS?", "/*Commentaire*/", "//Commentaire", "//Commentaire//", "'Commentaire"];
var g10q4 = ["Quelle propriété est utilisée pour changer la couleur de fond?", "background-color", "color", "bg-color", "background"];
var g10q5 = ["Comment ajouter une couleur de fond sur tout les éléments h1?", "h1 {background-color:#FFFFFF;}", "h1.all {background-color:#FFFFFF;}", "all.h1 {background-color:#FFFFFF;}", "42"];
var g10q6 = ["Quelle propriété est utilisée pour changer la couleur d'un texte?", "color", "text-color", "fgcolor", "color-text"];
var g10q7 = ["Quelle propriété contrôle la taille d'un texte?", "font-size", "text-size", "font-style", "text-style"];
var g10q8 = ["Comment retirer le soulignage d'un lien hypertexte?", "a {text-decoration:none;}", "a {decoration:no-underline;}", "a {underline:none;}", "a {text-decoration:no-underline;}"];
var g10q9 = ["Comment sélectionner un élément avec un id \"demo\"?", "#demo", ".demo", "demo", "-demo"];
var g10q10 = ["Comment sélectionner tous les éléments p à l'intérieur d'un div?", "div p", "div>p", "div.p", "div + p"];
var g10q11 = ["Pour grouper des sélecteurs, on les sépare avec...", "une virgule", "un point", "un espace", "une chèvre"];


var g10result = [""];
var g10correctAnswer = "";




// Rassembling the questions in an array to facilitate manipulation
var g10questionGlobal = [g10q1, g10q2, g10q3, g10q4, g10q5, g10q6, g10q7, g10q8, g10q9, g10q10];

function g10getRandomQA(){
//return an array (String)

var g10i_Global = 0;
var g10i = 0;
var g10lengthArray = g10questionGlobal.length;

document.querySelector('.progress-bar').classList.remove("paused");
  var g10ProgressBar=document.querySelector('.progress-bar');
  document.querySelector('.progress').innerHTML="";
  var progress=document.querySelector('.progress');
  progress.appendChild(g10ProgressBar);
  if (g10questionGlobal.length<1) {
    g10gameOver();
  }else{
    g10i_Global = Math.floor(Math.random() * g10lengthArray);

    g10result = g10questionGlobal[g10i_Global];
    g10questionGlobal.splice(g10i_Global, 1);
    
    g10fillForm();
  }

return g10result;
}


function g10fillForm(){
  let g10i = 1;

  let g10container = document.createElement("div");
  g10container.id = 'g10questionBlock';
  g10container.classList.add('container');

  let g10containAnswer = document.createElement("div");
  g10containAnswer.id = 'g10answerBlock';
  g10containAnswer.classList.add('container');

  let g10row = document.createElement("div");
  g10row.classList.add('row');
  g10containAnswer.appendChild(g10row);

  let g10col = document.createElement("div");
  g10col.classList.add('col-12');
  g10row.appendChild(g10col);

  let g10createQuestion = document.createElement("h2");
  let g10temp = g10result.length;

  g10createQuestion.textContent = g10result[0];
  g10container.appendChild(g10createQuestion);
  g10result.splice(g10result[0], 1);
  g10correctAnswer = g10result[0];


  document.querySelector('#g10start').style.display='none';


  while (g10i<g10temp) {
    let g10createAnswer = document.createElement("button");
    let g10fillAnswer = document.createElement("p");
    let g10spliceAnswer = Math.floor(Math.random() * g10result.length);

    g10fillAnswer.textContent = g10result[g10spliceAnswer];
    if (g10result[g10spliceAnswer] == g10correctAnswer) {
      g10createAnswer.id = 'g10true';
    }else{
      g10createAnswer.id = 'g10false';
    }
    g10fillAnswer.classList.add('btn');

    g10result.splice(g10spliceAnswer, 1);
    g10createAnswer.addEventListener('click',g10buttonBehavior);
    g10createAnswer.appendChild(g10fillAnswer);
    g10col.appendChild(g10createAnswer);
    g10form.appendChild(g10container);
    g10form.appendChild(g10containAnswer);
    g10i ++;
  }
}

function g10score(){
  addPoints(1);

}

function g10buttonBehavior(event){
  event.preventDefault();

  if (this.id == 'g10false') {
    this.classList.add("bg__false-answer");
  }
  document.querySelector('#g10true').classList.add('bg__true-answer');
  g10score();
  document.querySelector('.progress-bar').classList.add("paused");
  setTimeout(function(){g10endQuestion()}, 1000);
}

function g10endQuestion(){
  let g10elem = document.querySelector("#g10answerBlock");
  g10elem.parentNode.removeChild(g10elem);
  let g10elem2 = document.querySelector("#g10questionBlock");
  g10elem2.parentNode.removeChild(g10elem2);

g10getRandomQA();
}

//keep in mind : array.splice (index, 1);


  function g10gameOver(){
    document.querySelector('#g10QetT').style.display="none";
    document.querySelector('#g10start').style.display='block';
    document.querySelector('#g10start').value="Next Game";
    document.querySelector('#g10start').addEventListener("click",loadNextMiniGame);
    
    let g10elem = document.querySelector("#g10answerBlock");
    g10elem.parentNode.removeChild(g10elem);
    let g10elem2 = document.querySelector("#g10questionBlock");
    g10elem2.parentNode.removeChild(g10elem2);

  }