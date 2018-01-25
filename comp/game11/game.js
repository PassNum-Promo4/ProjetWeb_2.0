/*
  Author : Baptiste Hovanisian
*/


var g11inter = null;
var g11party = 0;
var g11correct = 0;
var g11alQ = 0;
var g11alTab = [];
var g11q = document.getElementById('g11question');
var g11rep = document.getElementsByName('choices');
var g11progressionBar = document.getElementById('progressBar');
var g11tabQ1 = ["Qu'est ce que MySQL ?", "Un système de gestion de BDD", "Un anti-virus", "Un editeur de texte", "Un langage informatique"];
var g11tabQ2 = ["Qu'est-ce que phpMyAdmin ?", "Une interface pour MySQL", "Un logiciel de gestion de droit", "Un site pour apprendre le langage PHP", "Un outil pour sites responsives"];
var g11tabQ3 = ["Quel requête SQL permet de créer une base de donnée ?", "CREATE DATABASE nom_base", "CREATE DATA nom_base", "DATABASE create nom_base", "nom_base CREATE DATABASE"];
var g11tabQ4 = ["Quel requête SQL permet de supprimer une base de donnée ?", "DROP DATABASE nom_base", "DELETE DATABASE nom_base", "DATABASE delete nom_base", "ERASE DATABASE nom_base"];
var g11tabQ5 = ["Que veut dire INT ?", "Entier", "Caractère", "Intégrer", "Chaine"];
var g11tabQ6 = ["Que doit-on ajouter pour s'assurer que chaque utilisateur obtient un ID unique ?", "PRIMARY KEY et AUTO_INCREMENT", "NaN", "Null", "VARCHAR"];
var g11tabQ7 = ["Comment insérer des données dans une table ?", "INSERT INTO table", "INSERT IN table", "ADD IN table", "INSERT IN TO table"];
var g11tabQ8 = ["Comment supprime t'on des éléments d'une table ?", "DELETE FROM nom_table", "DROP FROM nom_table", "SUPPR FROM nom_table", "ERASE FROM nom_table"];
var g11tabQ9 = ["A quoi consiste une jointure ?", "Joindre plusieurs tables ensemble", "Permettre de séparer un tableau", "Supprimer des données", "Créer une ligne"];
var g11tabQ10 = ["Que permet de faire la clause WHERE ?", "Préciser des critères de sélection.", "Déplacer une donnée", "Inserer une donnée", "Rechercher une donnée"];
var g11tabRecap = [g11tabQ1, g11tabQ2, g11tabQ3, g11tabQ4, g11tabQ5, g11tabQ6, g11tabQ7, g11tabQ8, g11tabQ9, g11tabQ10];


g11start();


function g11start() {
  setTimer(10, g11resetTimer);
  g11getRandomQA();


}


function g11getAlTab(tab) {
  var g11resQ = "";
  g11alQ = Math.floor(Math.random() * tab.length);
  g11resQ = tab[g11alQ];
  g11tabRecap.splice(g11alQ, 1);
  return g11resQ;
}


function g11getRandomQA() {
  document.querySelector('.progress-bar').classList.remove("paused");
  var g18ProgressBar=document.querySelector('.progress-bar');// put progressbar in var
  document.querySelector('.progress').innerHTML="";// clear progressbar
  var progress=document.querySelector('.progress');// get div that containt progressbar
  progress.appendChild(g18ProgressBar);// push in html progressbar
  g11party++;
  g11alTab = g11getAlTab(g11tabRecap);
  var g11alCh1 = Math.floor(Math.random() * 4);
  var g11alCh2 = Math.floor(Math.random() * 4);
  var g11alCh3 = Math.floor(Math.random() * 4);
  var g11alCh4 = Math.floor(Math.random() * 4);


  while (g11alCh1 == g11alCh2 || g11alCh1 == g11alCh3 || g11alCh1 == g11alCh4 || g11alCh2 == g11alCh3 || g11alCh2 == g11alCh4 || g11alCh3 == g11alCh4) {
    var i = 0;
    g11alCh1 = Math.floor(Math.random() * 4);
    g11alCh2 = Math.floor(Math.random() * 4);
    g11alCh3 = Math.floor(Math.random() * 4);
    g11alCh4 = Math.floor(Math.random() * 4);
    i++;
  }


  g11q.innerHTML = g11alTab[0];

  g11rep[g11alCh1].id = "goodRep";
  g11rep[g11alCh2].id = "badRep";
  g11rep[g11alCh3].id = "badRep2";
  g11rep[g11alCh4].id = "badRep3";

  g11resetClass();
  document.querySelector("#goodRep").innerHTML = g11alTab[1];
  document.querySelector("#badRep").innerHTML = g11alTab[2];
  document.querySelector("#badRep2").innerHTML = g11alTab[3];
  document.querySelector("#badRep3").innerHTML = g11alTab[4];


  document.querySelector('#goodRep').addEventListener("click", g11getRep);
  document.querySelector('#badRep').addEventListener("click", g11getRep);
  document.querySelector('#badRep2').addEventListener("click", g11getRep);
  document.querySelector('#badRep3').addEventListener("click", g11getRep);

}


function g11getRep() {

  if (this.id == "goodRep") {
    g11correct++;
    addPoints(1); 
    g11resetHover();
    document.querySelector("#goodRep").classList.add("bg__true-answer");
    document.querySelector('#goodRep').removeEventListener("click", g11getRep);
    document.querySelector('#badRep').removeEventListener("click", g11getRep);
    document.querySelector('#badRep2').removeEventListener("click", g11getRep);
    document.querySelector('#badRep3').removeEventListener("click", g11getRep);


  } else if (this.id == "badRep") {
    g11resetHover();
    document.querySelector("#badRep").classList.add("bg__false-answer");
    document.querySelector("#goodRep").classList.add("bg__true-answer");
    document.querySelector('#goodRep').removeEventListener("click", g11getRep);
    document.querySelector('#badRep').removeEventListener("click", g11getRep);
    document.querySelector('#badRep2').removeEventListener("click", g11getRep);
    document.querySelector('#badRep3').removeEventListener("click", g11getRep);

  } else if (this.id == "badRep2") {
    g11resetHover();
    document.querySelector("#badRep2").classList.add("bg__false-answer");
    document.querySelector("#goodRep").classList.add("bg__true-answer");
    document.querySelector('#goodRep').removeEventListener("click", g11getRep);
    document.querySelector('#badRep').removeEventListener("click", g11getRep);
    document.querySelector('#badRep2').removeEventListener("click", g11getRep);
    document.querySelector('#badRep3').removeEventListener("click", g11getRep);

  } else if (this.id == "badRep3") {
    g11resetHover();
    document.querySelector("#badRep3").classList.add("bg__false-answer");
    document.querySelector("#goodRep").classList.add("bg__true-answer");
    document.querySelector('#goodRep').removeEventListener("click", g11getRep);
    document.querySelector('#badRep').removeEventListener("click", g11getRep);
    document.querySelector('#badRep2').removeEventListener("click", g11getRep);
    document.querySelector('#badRep3').removeEventListener("click", g11getRep);

  }

  g11progressionBar.style
  g11inter = setTimeout(g11getRandomQA, 1500);
  document.querySelector('.progress-bar').classList.add("paused");

  if (g11party == 10) {
    clearTimeout(g11inter);
    setTimeout(loadNextMiniGame, 1000);

  }

}


function g11resetClass() {
  document.querySelector("#goodRep").classList.remove("bg__true-answer");
  document.querySelector("#badRep").classList.remove("bg__true-answer");
  document.querySelector("#badRep2").classList.remove("bg__true-answer");
  document.querySelector("#badRep3").classList.remove("bg__true-answer");
  document.querySelector("#goodRep").classList.remove("bg__false-answer");
  document.querySelector("#badRep").classList.remove("bg__false-answer");
  document.querySelector("#badRep2").classList.remove("bg__false-answer");
  document.querySelector("#badRep3").classList.remove("bg__false-answer");
}

function g11resetHover() {
  document.querySelector("#goodRep").classList.remove("btn_hover");
  document.querySelector("#badRep").classList.remove("btn_hover");
  document.querySelector("#badRep2").classList.remove("btn_hover");
  document.querySelector("#badRep3").classList.remove("btn_hover");
}

function g11resetTimer() {
    document.querySelector("#goodRep").classList.add("bg__true-answer");
    document.querySelector('#goodRep').removeEventListener("click", g11getRep);
    setTimeout(g11getRandomQA, 1000);
  if (g11party == 10) {
    clearTimeout(g11inter);
    loadNextMiniGame();
  }
}
