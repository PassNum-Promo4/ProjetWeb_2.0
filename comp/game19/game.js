/*Author: Florian Sanchez*/


var g19q1 = [
  "Comment créer une base de données ?",
  "CREATE DATABASE",
  "USE DATABASE",
  "INSERT INTO DATABASE",
  "SELECT DATABASE",
];

var g19q2 = [
  "Comment créer une table ?",
  "CREATE TABLE Ecole",
  "USE TABLE Ecole",
  "CREATE Ecole",
  "CREATE TABLE 'Ecole'",
];

var g19q3 = [
  "Comment insérer une ligne dans une Table ?",
  "INSERT INTO",
  "USE INTO",
  "LOAD INTO",
  "SELECT INTO",
];

var g19q4 = [
  "Quel est la bonne requete ?",
  "SELECT COUNT",
  "COUNT",
  "SUM",
  "SELECT and COUNT",
];

var g19q5 = [
  "Quel est la requete pour avoir l'age moyen ?",
  "SELECT AVG(age)",
  "COUNT AVG(age)",
  "LOAD AVG(age)",
  "SUM AVG(age)",
];

var g19q6 = [
  "Comment insérer les données fichier.txt dans une table ?",
  "LOAD DATA LOCAL INFILE",
  "INSERT INTO DATA LOCAL INFILE",
  "INSERT DATA LOCAL INFILE",
  "SELECT DATA LOCAL INFILE",
];

var g19q7 = [
  "Comment obtenir l'intersection des résultats de 2 tables ?",
  "SELECT * FROM..",
  "LOAD * FROM..",
  "USE * FROM..",
  "COUNT * FROM..",
];

var g19q8 = [
  "Comment ajouter une colonne dans une table ?",
  "ALTER TABLE",
  "INSERT TABLE",
  "ADD TABLE",
  "LOAD TABLE",
];

var g19q9 = [
  "Comment lire les données d'une table avec plusieurs conditions ?",
  "SELECT nom_colonnes ..",
  "ALTER nom_colonnes ..",
  "USE nom_colonnes ..",
  "COUNT nom_colonnes ..",
];

var g19q10 = [
  "Comment unir les résultats de 2 tableaux sans afficher les doublons ?",
  "SELECT * FROM..",
  "USE * FROM..",
  "LOAD * FROM..",
  "COUNT * FROM..",
];

var g19qtab = [g19q1, g19q2, g19q3, g19q4, g19q5, g19q6, g19q7, g19q8, g19q9, g19q10];
var g19time = 11;
var g19updateTime;
var g19delay;
var g19butrep;
setTimer(g19time, g19mydelay);
resetGameTitle("Quiz BDD");

/*function g19timer(){
  g19time = g19time-1; //je décremente la valeur du temps
  document.querySelector('#g19time').value="Temps restant : "+g19time; //je reinjecte dans mon form le temps qui passe
  g19updateTime=setTimeout(function(){g19timer()}, 1000); //Toutes les secondes je rappel la fonction

  if (g19time<1) {
    g19time=11;
    g19mydelay();
  }
}*/

function g19mydelay() {
  document.querySelector('.progress-bar').classList.add("paused");
  document.getElementById('g19true').classList.add("bg__true-answer");
  document.querySelectorAll('.g19false')[0].classList.add("bg__false-answer");
  document.querySelectorAll('.g19false')[1].classList.add("bg__false-answer");
  document.querySelectorAll('.g19false')[2].classList.add("bg__false-answer");
  document.querySelectorAll('.g19false')[0].disabled = true;
  document.querySelectorAll('.g19false')[1].disabled = true;
  document.querySelectorAll('.g19false')[2].disabled = true;
  document.querySelector('#g19true').disabled = true;
  document.querySelectorAll('.g19false')[0].classList.remove("btn_hover");
  document.querySelectorAll('.g19false')[1].classList.remove("btn_hover");
  document.querySelectorAll('.g19false')[2].classList.remove("btn_hover");
  document.querySelector('#g19true').classList.remove("btn_hover");
  g19delay = setTimeout(g19randomQuestion, 2000);

}

function g19gameOver() {
  document.querySelector('.g19question').innerHTML = ""; //Je clean la zone question et reponses
  document.querySelector('.g19reponses').innerHTML = "";
  loadNextMiniGame();
}

function g19addScore() {
  addPoints(1);
}

function g19randomQuestion() {
  if (g19qtab.length < 1) {
    g19gameOver();
  } else {
    document.querySelector('.progress-bar').classList.remove('paused');
    var g19ProgressBar = document.querySelector('.progress-bar');// put progressbar in var
    document.querySelector('.progress').innerHTML = "";// clear progressbar
    var progress = document.querySelector('.progress');// get div that containt progressbar
    progress.appendChild(g19ProgressBar);// push in html progressbar



    g19time = 11; //je reset le timer a 11 a chaque generation de question
    document.querySelector('#g19question').innerHTML = ""; //Je clean la zone question et reponses
    document.querySelector('#g19reponses1').innerHTML = "";
    document.querySelector('#g19reponses2').innerHTML = "";
    document.querySelector('#g19reponses3').innerHTML = "";
    document.querySelector('#g19reponses4').innerHTML = "";

    var g19randomq = Math.floor(Math.random() * g19qtab.length); //je genere un nombre aleatoire entre 0 et le nombre d'element du tabQ
    var g19question = document.querySelector('#g19question');
    var g19pq = document.createElement('p');
    g19pq.id = "g19pq";
    g19pq.classList.add("h3");
    g19pq.textContent = g19qtab[g19randomq][0];
    g19question.appendChild(g19pq); // je reinjecte la question dans la div container HTML
    g19qtab[g19randomq].shift(); // je vire la question du tableau aleatoire generer plus tot

    var g19reponses = document.querySelector('.g19reponses');
    var g19tabRep = []; // je creer un tableau qui contient les reponses

    for (var g19i = 0; g19i < g19qtab[g19randomq].length; g19i++) { //je parcours mon tableau qui contient les reponses
      var g19butrep = document.createElement('button');//je creer un button a chaque tour de boucles
      var g19prep = document.createElement('p');
      g19prep.textContent = g19qtab[g19randomq][g19i]; //je lui affecte la valeur de l'indice actuel
      g19butrep.appendChild(g19prep);

      if (g19i === 0) {     //je test si l'indice = 0 et lui affecte une classe true pour l'indice 0 sinon false
        g19butrep.id = "g19true";
        g19butrep.addEventListener('click', g19addScore);    // appel de la fonction score a chaque click sur la bonne reponse
      } else {
        g19butrep.classList.add("g19false");
      }
      g19butrep.classList.add("btn_hover", "bg-color__body", "p-4", "btn", "btn-lg", "col-12", "mt-2", "text-dark", "round");
      g19tabRep.push(g19butrep);   //je reinjecte mon button dans mon tableau de REP
      g19butrep.addEventListener('click', g19mydelay); // appel de la fonction randomquestion a chaque click sur un button
    }
    g19tabRep.sort(function (a, b) { return 0.5 - Math.random() }); //Je melange le tableau de reponses

    g19reponses1.appendChild(g19tabRep[0]);
    g19reponses2.appendChild(g19tabRep[1]);
    g19reponses3.appendChild(g19tabRep[2]);
    g19reponses4.appendChild(g19tabRep[3]);  //je reinjecte dans mon HTML les button

    g19qtab.splice(g19randomq, 1); // je retire le tableau de la question qui a etait posé
  }
}

g19randomQuestion();
