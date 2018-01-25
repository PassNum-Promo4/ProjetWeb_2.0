//
// /* Author :bilel AMRAOUI */
//

var g2container = document.querySelector('#g2container');
var g2q1 = [
  'comment rendre la règle h1 {font-style:italic;} prioritaire par rapport à toutes ?', //question
  'h1 {font-style:italic !important; }', //bonne reponce
  'h1 override{font-style:italic; }', //mauvaise reponce
  'h1 no_override {font-style:italic; }', //mauvaise reponce
  'h1#high {font-style:italic; }' //mauvaise reponce
];

var g2q2 = [
  'Que se passe-t-il pour le texte placé entre ces balises <canvas> Texte </canvas> ?',
  'ignoré si le navigateur ne supporte pas les balises',
  'toujour affiché',
  'affiché',
  'jamais affiché '
];

var g2q3 = [
  'Quelle nouvelle balise de section permet de regrouper un contenu tangentiel au contenu principal du document ?',
  '<aside>',
  '<section id="sidebar">',
  '<sidebar>',
  '<details>'
];

var g2q4 = [
  'La nouvelle balise <time> permet de baliser une date structurée. Quelle serait sa syntaxe pour le 1er avril 2012 à 13h37 ?',
  '<time datetime="2012-04-01T13:37:00Z"></time>',
  '<time value="2012-04-0113:37"></time>',
  '<time datetime="01/04/2012"></time>',
  '<time date=01/04/2012></time>'
];

var g2q5 = [
  'À partir de quelle version d Internet Explorer peut-on utiliser nativement les éléments de section HTML5 (sans hack ou script complémentaire) ?',
  'Internet Explorer 9',
  'Internet Explorer 8',
  'Internet Explorer 10',
  'Internet Explorer 7'
];

var g2q6 = [
  'Quelle est la méthode pour associer une légende complète à une illustration ?',
  '<figure><img src="image.jpg"></figure>',
  '<figuresrc="image.jpg"legend>',
  '<figure><legend>Lalégende</legend>',
  '<figure><legend>Lalégende</legend>'
];

var g2q7 = [
  'Comment représenter une barre de progression à 50% d avancement ?',
  '<progress value="50" max="100">50%</progress>',
  '<input type="progress" value="0.5">50%>',
  '<input type="progress" value="50">',
  '<input value="50" max="100" title="50%">'
];

var g2q8 = [
  'Comment associer une liste de choix/suggestions à un champ d entrée texte ?',
  '<input list="fruits"><datalist id="fruits"></datalist>',
  '<input list="fruits">',
  '<input datalist="fruits">',
  '<input datalist="fruits">'
];

var g2q9 = [
  'Quel attribut permet d afficher une image par défaut pour l élément <video> ?',
  '<video poster="apercu.jpg">',
  '<video preview="apercu.jpg">',
  '<video><param name="thumbnail">',
  '<video preview="apercu.png">'
];

var g2q10 = [
  'Quelle balise doit permettre l inclusion de sous-titres textes dans les vidéos lues avec <video> ?',
  '<track src="soustitres.vtt">',
  '<subtitle source="soustitres.srt">',
  '<captions source="soustitres.srt">',
  '<option source="soustitres">'
];

var g2qtab = [g2q1, g2q2, g2q3, g2q4, g2q5, g2q6, g2q7, g2q8, g2q9, g2q10]; // tableau contenant chaque tableau de question/reponse
var g2Time = 9;


setTimer(g2Time, g2resultQ); // fonction d'appel qui définit l'heure de la barre de progression anim et la fonction qui sera appelée à la fin de l'animation


resetGameTitle("QUIZZ HTML"); // titre du quiz

function g2resultQ() { // function tha runs at the end of timer and on clicked but
  document.querySelector('.progress-bar').classList.add("paused"); //le timer en progress-bar
  this.classList.add("bg__false-answer"); // mauvaise reponce backgroundColor = red
  document.querySelector('#g2true').classList.remove("bg__false-answer");
  document.querySelector('#g2true').classList.add("bg__true-answer"); // bonne reponce backgroundColor = green
  document.querySelector('#g2true').removeEventListener("click", g2score);
  setTimeout(function() {
    g2randomQ()
  }, 2000); // au moment du click 2 seconde d'interval

  var g2disabled = [];
  for (var i = 0; i < 4; i++) {
    g2disabled.push(document.querySelectorAll('.g2myAnswers')[i]);
  }
  for (var i = 0; i < g2disabled.length; i++) {
    g2disabled[i].removeEventListener("click", g2resultQ);
    g2disabled[i].classList.remove("btn_hover");
  }

}


function g2score() { // a chaque bonne rebonce le score augmente de 1 point
  addPoints(1);
}


function g2gameOver() { // c'est la fonction qui et apeller a la fin du jeux
  //clearTimeout(g18uptadeTime);// stop timer
  document.querySelector('#g2R1').innerHTML = ""; // netoyage de la page
  document.querySelector('#g2R2').innerHTML = "";
  document.querySelector('#g2R3').innerHTML = "";
  document.querySelector('#g2R4').innerHTML = "";
  document.querySelector('#g2QetT').style.display = "none";
  document.querySelector('#g2form__submit').value = "Next Game";
  document.querySelector('#g2form__submit').disabled = false;
  document.querySelector('#g2form__submit').style.display = "block";
  document.querySelector('#g2form__submit').addEventListener("click", loadNextMiniGame); // au moment du click sur le bouton next games on appel la fonction loadNextMiniGame
}

function g2randomQ() { // function called to generate new Q? and rep
  //g18Time=9;
  document.querySelector('.progress-bar').classList.remove("paused"); // restart de la progressbar
  var g2ProgressBar = document.querySelector('.progress-bar');
  document.querySelector('.progress').innerHTML = ""; // netoyage de la progressbar
  var progress = document.querySelector('.progress');
  progress.appendChild(g2ProgressBar);
  if (g2qtab.length < 1) {
    g2gameOver();
  } else {


    document.querySelector('#g2R1').innerHTML = "";
    document.querySelector('#g2R2').innerHTML = "";
    document.querySelector('#g2R3').innerHTML = "";
    document.querySelector('#g2R4').innerHTML = "";
    document.querySelector('#g2form__submit').disabled = true;
    document.querySelector('#g2form__submit').style.display = "none";
    var g2rdQ = Math.floor(Math.random() * g2qtab.length);
    var g2Q = document.querySelector(".g2Qzone");
    var g2Qcontainer = document.querySelector('#g2Qcontainer');
    g2Q.textContent = g2qtab[g2rdQ][0];
    g2Qcontainer.appendChild(g2Q);
    g2qtab[g2rdQ].shift();
    var g2R1 = document.querySelector('#g2R1');
    var g2R2 = document.querySelector('#g2R2');
    var g2R3 = document.querySelector('#g2R3');
    var g2R4 = document.querySelector('#g2R4');


    var g2tabRep = []; //creation d'un button

    for (var g2i = 0; g2i < g2qtab[g2rdQ].length; g2i++) {
      var g2reponse = document.createElement("button");
      var g2repText = document.createElement("p");
      g2repText.textContent = g2qtab[g2rdQ][g2i];
      g2reponse.appendChild(g2repText);
      if (g2i == 0) {
        g2reponse.id = "g2true";
        g2reponse.addEventListener('click', g2score);
      } else {
        g2reponse.className = "g2false";
      }
      g2reponse.classList.add("btn_hover", "bg-color__body", "p-4", "btn", "btn-lg", "col-12", "mt-2", "text-dark", "round", "g2myAnswers") //style of the buttons
      g2reponse.addEventListener('click', g2resultQ);
      g2tabRep.push(g2reponse);
    }
    g2tabRep.sort(function(a, b) {
      return 0.5 - Math.random()
    });
    g2R1.appendChild(g2tabRep[0]);
    g2R2.appendChild(g2tabRep[1]);
    g2R3.appendChild(g2tabRep[2]);
    g2R4.appendChild(g2tabRep[3]);
    g2qtab.splice(g2rdQ, 1);
  }
}


g2randomQ(); // appel de la Q?
