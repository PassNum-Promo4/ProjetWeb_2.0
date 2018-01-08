/*
  Author : Fayçal Dali
*/

// Variables Declaration:
var g7Tab1 = new Array ("Quel est le doctype d'un document HTML5 ? ","<!DOCTYPE html>"," <!DOCTYPE html5>"," <!DOCTYPE html PUBLIC -/W3C/DTD HTML5.0 Strict/EN>","<?DOCTYPE5");
var g7Tab2 = new Array ("Quelle est la syntaxe pour déclarer l'encodage des caractères du document en UTF-8 ?","<meta charset=utf-8>","<meta encoding=text/html; charset=utf-8>","<meta charset=text/html; UTF-8>","<meta charset=UTF-8>");
var g7Tab3 = new Array ("Quelle est actuellement la dernière version de HTML ?","  HTML 5"," HTML 8 ","HTML 3","HTML 9");
var g7Tab4 = new Array ("Que signifie HTML ?","Hyper Text Markup Language","High Text Markup Language","Hyper Text Making Language","Hyper Text Meet Love");
var g7Tab5 = new Array ("Qui le le fondateur du HTML ? ","Tim Berners-Lee","Steve Jobs","Mark Zuckerberg","Jack Dorsey");
var g7Tab6 = new Array ("Le rôle du HTML est de...?","Ordonner du contenu","Mettre en forme du texte","Créer des sites e-commerce","Faire fonctionner le navigateur");
var g7Tab7 = new Array ("Pour définir un titre dans une page HTML, on utilise...?","Un élément h1, h2, ... h6","L'élément title","L'élément head","L'élément header");
var g7Tab8 = new Array ("Pour créer un lien vers la page d'accueil de Wikipédia, on écrira...?","<a href='http://wikipedia.org'>Wikipédia</a>","<a href='http://wikipedia.org'>","<a target='http://wikipedia.org'>Wikipédia</a>","wikipedia");
var g7Tab9 = new Array ("Lorsque vous utilisez l'élément a, vous devez obligatoirement préciser...?","Un attribut href","Deux attributs href et target","Un attribut target","Un attribut alt");
var g7Tab10 = new Array ("Laquelle de ces syntaxes est correcte pour écrire un commentaire en HTML ?","<!--Commentaire-->","<--Commentaire-->","<!--Commentaire--!>","<--Commentaire--!>");

var g7TabAll = new Array (g7Tab1,g7Tab2,g7Tab3,g7Tab4,g7Tab5,g7Tab6,g7Tab7,g7Tab8,g7Tab9,g7Tab10);
var g7Reset = new Array();
var g7Wait1Sec = "";
var g7CountdownGame = 90;
var g7CountdownQuestion = 9;
var g7Points = 0;
var g7Round = 0;

// function Start Game onclick:
function g7StartGame() {
  g7GameTime();
  g7Wait1ForCountdownGame();
  g7QuestionTime();
  g7Wait1ForCountdownQuest();

}
// function Game time:
function g7GameTime() { // Testing if countodown is done for reset game and pushing the time into HTML
  document.querySelector('#GameTimer').textContent = 'Temps Partie : ' + g7CountdownGame;
  if (g7CountdownGame <= 0) { //If Countdown come to 0
    g7resetGame();
  } else { //Keep substracting
    g7CountdownGame--;
    g7Wait1ForCountdownGame();
  }
}

function g7Wait1ForCountdownGame() { //Wait 1 second and call the function g7QuestionTime()
  g7Wait1Sec = window.setTimeout('g7GameTime()',1000);
}
// function reset
function g7resetGame() { //reset the questions and answers
  g7Reset = new Array();
  document.querySelector('#Quest').textContent = '';
  document.querySelector('#Answer1-4').textContent = '';
}

// function Question Time:
function g7QuestionTime() { // Testing if countodown is done and pushing the time into HTML
    document.querySelector('#QuestTimer').textContent = 'Temps Question : ' + g7CountdownQuestion;
    if (g7CountdownQuestion <= 0) { //If Countdown came to 0 call g7nextQuest function
      g7nextQuest();
    } else { //Keep substracting
      g7CountdownQuestion--;
      g7Wait1ForCountdownQuest();
    }
  }

  function g7Wait1ForCountdownQuest() { //Wait 1 second and call the function g7QuestionTime()
    g5Wait1Sec = window.setTimeout('g7QuestionTime()',1000);
  }
