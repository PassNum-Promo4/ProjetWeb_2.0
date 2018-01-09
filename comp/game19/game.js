/*Author: Florian Sanchez*/


var g19q1=[
  "Comment créer une base de données ?",
  "CREATE DATABASE Central_Marseille;",
  "USE DATABASE Central_Marseille;",
  "INSERT INTO DATABASE Central_Marseille;",
  "CREATE Central_Marseille;",
];

var g19q2=[
  "Comment créer une table ?",
  "CREATE TABLE Ecole",
  "USE TABLE Ecole",
  "CREATE Ecole",
  "CREATE TABLE 'Ecole'",
];

var g19q3=[
  "Comment insérer une ligne dans une Table",
  "INSERT INTO Ecole",
  "USE INTO Ecole",
  "LOAD INTO Ecole",
  "SELECT INTO Ecole",
];

var g19q4=[
  "Quel est la bonne requete ?",
  "SELECT COUNT(id_etudiant) from Etudiant;",
  "COUNT(id_etudiant) from Etudiant;",
  "COUNT(id_etudiant) about Etudiant;",
  "SELECT and COUNT(id_etudiant) from Etudiant;",
];

var g19q5=[
  "Quel est la requete pour avoir l'age moyen",
  "SELECT AVG(age) from Etudiant;",
  "COUNT AVG(age) from Etudiant;",
  "LOAD AVG(age) from Etudiant;",
  "COUNT AVG(age) by Etudiant;",
];

var g19q6=[
  "Comment insérer les données service_user.txt dans la table Service_has_user",
  "LOAD DATA LOCAL INFILE 'service_user.txt' INTO TABLE Service_has_user",
  "INSERT INTO DATA LOCAL INFILE 'service_user.txt' FROM TABLE Service_has_user",
  "INSERT DATA LOCAL INFILE 'service_user.txt' INTO TABLE Service_has_user",
  "SELECT DATA LOCAL INFILE 'service_user.txt' FROM TABLE Service_has_user",
];

var g19q7=[
  "Comment obtenir l'intersection des résultats de 2 tables ?",
  "SELECT * FROM table1 INTERSECT SELECT * FROM table2",
  "LOAD * FROM table1 INTERSECT SELECT * INTO table2",
  "USE * FROM table1 INTERSECT SELECT * FROM table2",
  "COUNT * FROM table1 INTERSECT SELECT * INTO table2",
];

var g19q8=[
  "Comment ajouter une colonne dans une table ?",
  "ALTER TABLE nom_table ADD nom_colonne type_donnees",
  "INSERT TABLE nom_table ADD nom_colonne type_donnees",
  "ADD TABLE nom_table ADD nom_colonne type_donnees",
  "LOAD TABLE nom_table ADD nom_colonne type_donnees",
];

var g19q9=[
  "Comment lire les données d'une table avec plusieurs conditions ?",
  "SELECT nom_colonnes FROM nom_table WHERE condition1 AND condition2",
  "SELECT nom_colonnes FROM nom_table WHEN condition1 AND condition2",
  "USE nom_colonnes FROM nom_table WHERE condition1 AND condition2",
  "SELECT nom_colonnes FROM nom_table AND condition1 AND condition2",
];

var g19q10=[
  "Comment unir les résultats de 2 tableaux sans afficher les doublons ?",
  "SELECT * FROM table1 UNION SELECT * FROM table2",
  "USE * FROM table1 UNION SELECT * FROM table2",
  "LOAD * FROM table1 UNION SELECT * FROM table2",
  "COUNT * FROM table1 UNION SELECT * FROM table2",
];

var g19qtab=[g19q1,g19q2,g19q3,g19q4,g19q5,g19q6,g19q7,g19q8,g19q9,g19q10];
var g19time=11;
var g19updateTime;
var g19score=0;

function g19timer(){
  g19time = g19time-1; //je décremente la valeur du temps
  document.querySelector('#g19time').value="Temps restant : "+g19time; //je reinjecte dans mon form le temps qui passe
  g19updateTime=setTimeout(function(){g19timer()}, 1000); //Toutes les secondes je rappel la fonction

  if (g19time<1) {
    g19time=11;
    g19randomQuestion();
  }
}


function g19gameOver(){
  document.querySelector('.g19question').innerHTML= ""; //Je clean la zone question et reponses
  document.querySelector('.g19reponses').innerHTML= "";
  clearTimeout(g19updateTime);
  loadNextMiniGame();
}

function g19points(){
  g19score= g19score + 1;     //j'incremente le score
  document.querySelector('#g19score').value="score : "+g19score; //j'affiche le score
  addPoints(g19score);
}


function g19randomQuestion(){
  if (g19qtab.length<1) {
    g19gameOver();
  } else {
    g19time=11; //je reset le timer a 11 a chaque generation de question
    document.querySelector('.g19question').innerHTML= ""; //Je clean la zone question et reponses
    document.querySelector('.g19reponses').innerHTML= "";
    document.querySelector('#g19button_start').disabled=true; //je desactive le button START une fois cliqué

    var g19_form=document.querySelector('.g19_form'); //je selectionne la div container HTML de cla classe g19container
    var g19randomq = Math.floor(Math.random()*g19qtab.length); //je genere un nombre aleatoire entre 0 et le nombre d'element du tabQ
    var g19question = document.querySelector('.g19question');// je recupere la div avec la classe 'g19questions'
    var g19reponses = document.querySelector('.g19reponses'); // je recupere la div avec la classe 'g19reponses'

    g19question.textContent = g19qtab[g19randomq][0]; // je lui affecte la question d'un des tableau aleatoires
    g19_form.appendChild(g19question); // je reinjecte la question dans la div container HTML
    g19qtab[g19randomq].shift(); // je vire la question du tableau aleatoire generer plus tot
    var g19tabRep=[]; // je creer un tableau qui contient les reponses

    for (var g19i = 0; g19i < g19qtab[g19randomq].length; g19i++) { //je parcours mon tableau qui contient les reponses
      var g19butrep = document.createElement('button');  //je creer un button a chaque tour de boucles
      g19butrep.textContent = g19qtab[g19randomq][g19i]; //je lui affecte la valeur de l'indice actuel

      if (g19i === 0) {     //je test si l'indice et lui affecte une classe true pour l'indice 0 sinon false
      g19butrep.id="g19true";
      g19butrep.addEventListener('click',g19points);
      g19butrep.classList.add("button","btn","btn-white","m-1"); // appel de la fonction score a chaque click sur la bonne reponse
    } else {
      g19butrep.classList.add("button","btn","btn-white","g19false","m-1");
    }
    g19tabRep.push(g19butrep);   //je reinjecte mon button dans mon tableau de REP
    g19butrep.addEventListener('click',g19randomQuestion); // appel de la fonction score a chaque click sur un button
  }

  g19tabRep.sort(function(a, b){return 0.5 - Math.random()}); //Je melange le tableau de reponses

  for (var g19i = 0; g19i < g19tabRep.length; g19i++) {  //je parcours mon tableau de button mélangés
    g19reponses.appendChild(g19tabRep[g19i]);  //je reinjecte dans mon HTML les button
  }

  g19qtab.splice(g19randomq,1); // je retire le tableau de la question qui a etait posé
}
}
