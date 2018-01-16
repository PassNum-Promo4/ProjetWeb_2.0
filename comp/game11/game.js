/*
  Author : Baptiste Hovanisian
*/

var g11counter = 10;
var g11intervalId = null;
var g11inter = null;
var g11party = 0;
var g11correct = 0;
var g11alQ = 0;
var g11alTab = [];
var g11q = document.getElementById('g11question');
var g11rep = document.getElementsByName('choices');
var g11tabQ1 = ["Qu'est ce que MySQL ?", "Un système de gestion de bases de données relationnelles", "Un anti-virus", "Un editeur de texte", "Un langage informatique"];
var g11tabQ2 = ["Qu'est-ce que phpMyAdmin ?", "Une célèbre interface pour gérer une base de données MySQL sur un serveur PHP", "Un logiciel de gestion de droit administrateur", "Un célébre site pour apprendre le langage PHP", "Un outil pour vérifier si les sites sont bien responsives"];
var g11tabQ3 = ["Quel requête SQL permet de créer une base de donnée ?", "CREATE DATABASE nom_base", "CREATE DATA nom_base", "DATABASE create nom_base", "nom_base CREATE DATABASE"];
var g11tabQ4 = ["Quel requête SQL permet de supprimer une base de donnée ?", "DROP DATABASE nom_base", "DELETE DATABASE nom_base", "DATABASE delete nom_base", "ERASE DATABASE nom_base"];
var g11tabQ5 = ["Que veut dire INT ?", "Entier", "Caractère", "Intégrer", "Chaine"];
var g11tabQ6 = ["Que doit-on ajouter pour s'assurer que chaque utilisateur obtient un ID unique ?", "PRIMARY KEY et AUTO_INCREMENT", "NaN", "Null", "VARCHAR"];
var g11tabQ7 = ["Comment insérer des données dans une table ?", "INSERT INTO table", "INSERT IN table", "ADD IN table", "INSERT IN TO table"];
var g11tabQ8 = ["Comment supprime t'on des éléments d'une table ?", "DELETE FROM nom_table", "DROP FROM nom_table", "SUPPR FROM nom_table", "ERASE FROM nom_table"];
var g11tabQ9 = ["A quoi consiste une jointure ?", "Joindre plusieurs tables ensemble", "Permettre de séparer un tableau", "Supprimer des données", "Créer une ligne"];
var g11tabQ10 = ["Que permet de faire la clause WHERE ?", "Préciser des critères de sélection.", "Déplacer une donnée", "Inserer une donnée", "Rechercher une donnée"];
var g11tabRecap = [g11tabQ1, g11tabQ2, g11tabQ3, g11tabQ4, g11tabQ5, g11tabQ6, g11tabQ7, g11tabQ8, g11tabQ9, g11tabQ10 ];


g11start();


function g11start() {
  document.getElementById("g11main").style.display = "initial";
  intervalId = setInterval(g11bip, 1000);
  document.getElementById('startQuiz').style.display = "none";
  g11getRandomQA();

}



function g11bip()
{
  document.getElementById("g11bip").innerHTML = g11counter + " secondes restantes";
  g11counter--;
  g11resetTimer();
}


function g11action()
{
  clearInterval(intervalId);
}


function g11getAlTab(tab) {
  var g11resQ = "";
  g11alQ = Math.floor(Math.random() * tab.length);
  g11resQ = tab[g11alQ];
  g11tabRecap.splice(g11alQ, 1);
  return g11resQ;
}


function g11getRandomQA() {
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


  document.querySelector('#g11progress').innerHTML = "Question "+g11party+" sur 10."

}


function g11getRep(){

if(this.id == "goodRep"){
  g11correct++;
  addPoints(1);
  document.querySelector("#goodRep").classList.add("btn-success");
  document.querySelector('#g11result').innerHTML = g11correct + " bonne(s) réponse sur 10.";
  document.querySelector('#goodRep').removeEventListener("click", g11getRep);
  document.querySelector('#badRep').removeEventListener("click", g11getRep);
  document.querySelector('#badRep2').removeEventListener("click", g11getRep);
  document.querySelector('#badRep3').removeEventListener("click", g11getRep);


} else if(this.id == "badRep") {
  document.querySelector("#badRep").classList.add("btn-danger");
  document.querySelector("#goodRep").classList.add("btn-success");
  document.querySelector('#goodRep').removeEventListener("click", g11getRep);
  document.querySelector('#badRep').removeEventListener("click", g11getRep);
  document.querySelector('#badRep2').removeEventListener("click", g11getRep);
  document.querySelector('#badRep3').removeEventListener("click", g11getRep);

} else if(this.id == "badRep2") {
  document.querySelector("#badRep2").classList.add("btn-danger");
  document.querySelector("#goodRep").classList.add("btn-success");
  document.querySelector('#goodRep').removeEventListener("click", g11getRep);
  document.querySelector('#badRep').removeEventListener("click", g11getRep);
  document.querySelector('#badRep2').removeEventListener("click", g11getRep);
  document.querySelector('#badRep3').removeEventListener("click", g11getRep);

} else if(this.id == "badRep3") {
  document.querySelector("#badRep3").classList.add("btn-danger");
  document.querySelector("#goodRep").classList.add("btn-success");
  document.querySelector('#goodRep').removeEventListener("click", g11getRep);
  document.querySelector('#badRep').removeEventListener("click", g11getRep);
  document.querySelector('#badRep2').removeEventListener("click", g11getRep);
  document.querySelector('#badRep3').removeEventListener("click", g11getRep);

}

  g11counter = 10;
  g11inter = setTimeout(g11getRandomQA, 1500);

  if(g11party == 10) {
    clearTimeout(g11inter);
    setTimeout(g11action, 1000);
    clearInterval(intervalId);
    loadNextMiniGame();
  }

}


function g11resetClass(){
  document.querySelector("#goodRep").classList.remove("btn-success");
  document.querySelector("#badRep").classList.remove("btn-success");
  document.querySelector("#badRep2").classList.remove("btn-success");
  document.querySelector("#badRep3").classList.remove("btn-success");
  document.querySelector("#goodRep").classList.remove("btn-danger");
  document.querySelector("#badRep").classList.remove("btn-danger");
  document.querySelector("#badRep2").classList.remove("btn-danger");
  document.querySelector("#badRep3").classList.remove("btn-danger");
}


function g11resetTimer(){
  if (g11counter == -1) {
    document.querySelector("#goodRep").classList.add("btn-success");
    document.querySelector('#goodRep').removeEventListener("click", g11getRep);
    setTimeout(g11getRandomQA, 1000);
    g11counter = 10;
  } else if (g11party == 10 && g11counter == 0) {
      clearTimeout(g11inter);
      clearInterval(intervalId);
      setTimeout(g11action, 2000);
      loadNextMiniGame();
  }
}

function g11score(){
  addPoints(1);
}
