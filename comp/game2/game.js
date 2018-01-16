
/* Author :bilel AMRAOUI */


var g2Q1 = new Array('comment rendre la règle h1 {font-style:italic;} prioritaire par rapport à toutes ?','h1 {font-style: italic !important; }','h1 override{font-style: italic; }','h1 no_override {font-style: italic; }','h1#high {font-style: italic; }');
var g2Q2 = new Array('Que se passe-t-il pour le texte placé entre ces balises <canvas> Texte </canvas> ?','il est ignoré sauf si le navigateur ne supporte pas ces balises','il est toujour affiché','il est affiché, sauf si le navigateur ne supporte pas ces balises','il n est jamais affiché ');
var g2Q3 = new Array('Quelle nouvelle balise de section permet de regrouper un contenu tangentiel au contenu principal du document ?','<aside>','<section id="sidebar">','<sidebar>','<details>');
var g2Q4 = new Array('La nouvelle balise <time> permet de baliser une date structurée. Quelle serait sa syntaxe pour le 1er avril 2012 à 13h37 ?','<time datetime="2012-04-01T13:37:00Z"></time>','<time value="2012-04-01 13:37"></time>','<time datetime="01/04/2012 13H37M00S"></time>','<time date=01/04/2012 13H37M00S></time>');
var g2Q5 = new Array('À partir de quelle version d Internet Explorer peut-on utiliser nativement les éléments de section HTML5 (sans hack ou script complémentaire) ?','Internet Explorer 9','Internet Explorer 8','Internet Explorer 10','Internet Explorer 7');
var g2Q6 = new Array('Quelle est la méthode pour associer une légende complète à une illustration ?','<figure><img src="image.jpg"><figcaption>La légende...</figcaption></figure>','<figure src="image.jpg" legend="#cap1"></figure><figcaption id="cap1">La légende...</figcaption>','<figure><legend>La légende...</legend><img src="image.jpg"></figure>','<figure><legend>La légende...</legend><img url="image.jpg"></figure>');
var g2Q7 = new Array('Comment représenter une barre de progression à 50% d avancement ?','<progress value="50" max="100">50%</progress>','<input type="progress" value="0.5">50%</progress>','<input type="progress" value="50" max="100" title="50%" />','<input value="50" max="100" title="50%" />');
var g2Q8 = new Array('Comment associer une liste de choix/suggestions à un champ d entrée texte ?','<input list="fruits"><datalist id="fruits"><option>Kiwi</option><option>Orange</option><option>Mangue</option></datalist>','<input list="fruits"><select><datalist id="fruits" values="Kiwi,Orange,Mangue" /></select>','<input datalist="fruits"><list id="fruits"><option value="Kiwi"><option value="Orange"><option value="Mangue"></list>',
                     '<input datalist="fruits"><list id="fruits"><option><value="Orange"><option value="Mangue"></list>');
var g2Q9 = new Array('Quel attribut permet d afficher une image par défaut pour l élément <video> ?','<video poster="apercu.jpg">','<video preview="apercu.jpg">','<video><param name="thumbnail" value="apercu.jpg" /></video>','<video preview="apercu.png">');
var g2Q10 = new Array('Quelle balise doit permettre l inclusion de sous-titres textes dans les vidéos lues avec <video> ?','<track src="soustitres.vtt">','<subtitle source="soustitres.srt">','<captions source="soustitres.srt">','<option source="soustitres">');
var g2AllQ = new Array(g2Q1,g2Q2,g2Q3,g2Q4,g2Q5,g2Q6,g2Q7,g2Q8,g2Q9,g2Q10);
var g2Q = '';
var g2doNotUseA = new Array('');
var g2doNotUseQ = new Array('');
var g2Qdiv = '';
var g2A1div = '';
var g2A2div = '';
var g2A3div = '';
var g2A4div = '';
var g2roundDone = 0;
var g2Timer;
var g2TimeLeft = 90; // le timer generale du jeux et de 90 seconds
var g2QTimer;
var g2QTimeLeft = 9;// le timer des question et de 9 seconds
var g2TimeRst;
var g2rlt = 0;
var g2CurrentQ;
var g2iH = 1;


g2startGame();


function g2QTimerdown() { //cela et la fonction pour le timer par questions
  g2QTimer = window.setTimeout('g2UpdateQTimer()', 1000);
}


function g2UpdateQTimer() {
  document.querySelector('#g2QTimer').textContent = 'Temps Manche : ' + g2QTimeLeft;
  if (g2QTimeLeft <= 0) {
    g2CurrentQ.classList.add('text-warning');
    document.querySelector('#g2Result').appendChild(g2CurrentQ);
    g2rst();
  } else {
    g2QTimeLeft--;
    g2QTimerdown();
  }
}


function g2startGame() { //cela et la fonction qu'on appelle qu'en on appuit sur start
  g2resetGame();
  g2getRandom();
  g2QTimerdown();
  g2roundDone = 0;
}


function g2resetGame() {
  g2doNotUseA = [];
  document.querySelector('#g2Q').innerHTML = '';
  document.querySelector('#g2A1-4').innerHTML = '';
}


function g2getRandom() { //fonction qui permet de choisir aleatoiremen la question et la reponse

  while (g2roundDone < 10) {
    var i = Math.floor(Math.random() * g2AllQ.length);
    if (g2doNotUseQ.indexOf(i) === -1) {
      g2doNotUseQ[g2roundDone] = i;
      g2Q = g2AllQ[i];
      g2createArea();
      g2CurrentQ = document.createElement('span');
      g2CurrentQ.classList.add('mr-1');
      g2CurrentQ.textContent = ' Q' + (g2iH++);
      return g2Q;
    }
  }
}


function g2createArea() { //Creation des div pour les questions reponces
  g2Qdiv = document.createElement('div');
  g2Qdiv.id = 'g2Q1'
  g2Qdiv.classList.add('col-lg-8', 'col-md-8', 'col-sm-8', 'border', 'border-dark', 'rounded', 'p-3', 'm-3');
  g2Qdiv.textContent = g2Q[0];

  g2A1div = document.createElement('button');
  g2A1div.id = 'g2A1';
  g2A1div.classList.add('col-lg-4', 'col-md-12', 'col-sm-12', 'border', 'border-success', 'rounded', 'p-2', 'm-1');
  g2A1div.textContent = g2Q[1];

  g2A2div = document.createElement('button');
  g2A2div.id = 'g2A2';
  g2A2div.classList.add('col-lg-4', 'col-md-12', 'col-sm-12', 'border', 'border-success', 'rounded', 'p-2', 'm-1');
  g2A2div.textContent = g2Q[2];

  g2A3div = document.createElement('button');
  g2A3div.id = 'g2A3';
  g2A3div.classList.add('col-lg-4', 'col-md-12', 'col-sm-12', 'border', 'border-success', 'rounded', 'p-2', 'm-1');
  g2A3div.textContent = g2Q[3];

  g2A4div = document.createElement('button');
  g2A4div.id = 'g2A4';
  g2A4div.classList.add('col-lg-4', 'col-md-12', 'col-sm-12', 'border', 'border-success', 'rounded', 'p-2', 'm-1');
  g2A4div.textContent = g2Q[4];

  g2pushQ();
}



function g2pushQ() {
document.querySelector('#g2Q').appendChild((g2Qdiv));
  var j = 0;
  while (j < 4) {
    var i = Math.floor(Math.random() * 4) + 1;
    if (g2doNotUseA.indexOf(i) === -1) {
      g2doNotUseA[j] = i;
      switch (i) {
        case 1:
          document.querySelector('#g2A1-4').appendChild((g2A1div));
          break;
        case 2:
          document.querySelector('#g2A1-4').appendChild((g2A2div));
          break;
        case 3:
          document.querySelector('#g2A1-4').appendChild((g2A3div));
          break;
        case 4:
          document.querySelector('#g2A1-4').appendChild((g2A4div));
          break;
      }
      j++
    }
  }
  g2ForClick();
}


function g2ForClick() {
  document.querySelector('#g2A1').addEventListener('click', g2trueAnswer);
  document.querySelector('#g2A2').addEventListener('click', g2falseAnswer);
  document.querySelector('#g2A3').addEventListener('click', g2falseAnswer);
  document.querySelector('#g2A4').addEventListener('click', g2falseAnswer);
}


function g2falseAnswer() {
  g2CurrentQ.classList.add('text-danger');
  document.querySelector('#g2Result').appendChild(g2CurrentQ);
  g2rst();

}


function g2trueAnswer() {
  g2CurrentQ.classList.add('text-success');
  document.querySelector('#g2Result').appendChild(g2CurrentQ);
  g2rst();
  addPoints(1);
  g2score();

}

function g2rst() {
  document.querySelector('#g2A1').removeEventListener('click', g2trueAnswer);
  document.querySelector('#g2A2').removeEventListener('click', g2falseAnswer);
  document.querySelector('#g2A3').removeEventListener('click', g2falseAnswer);
  document.querySelector('#g2A4').removeEventListener('click', g2falseAnswer);
  clearTimeout(g2QTimer);
  g2A1div.classList.add('col-lg-4', 'col-md-12', 'col-sm-12', 'border', 'border-success', 'rounded', 'p-2', 'm-1','btn','btn-success','bg-success');
  g2A2div.classList.add('col-lg-4', 'col-md-12', 'col-sm-12', 'border', 'border-danger', 'rounded', 'p-2', 'm-1','btn','btn-danger','bg-danger');
  g2A3div.classList.add('col-lg-4', 'col-md-12', 'col-sm-12', 'border', 'border-danger', 'rounded', 'p-2', 'm-1','btn','btn-danger','bg-danger');
  g2A4div.classList.add('col-lg-4', 'col-md-12', 'col-sm-12', 'border', 'border-danger', 'rounded', 'p-2', 'm-1','btn','btn-danger','bg-danger');
  g2TimeRst = window.setTimeout('g2nextQ()',1000);




}

function g2nextQ() {

  if (g2roundDone != 9) {
    g2roundDone++;
    g2resetGame();
    g2getRandom();
    window.clearTimeout(g2QTimer);
    g2QTimeLeft = 9;
    g2UpdateQTimer();


  } else {
    g2QTimeLeft = 0;
    g2TimeLeft = 0;
    window.clearTimeout(g2QTimer);
    window.clearTimeout(g2Timer);
    g2resetGame();
    g2nextG();
  }
}




function g2score() {
  g2rlt = g2rlt + 1;
  document.querySelector('#g2scoreFinal').textContent = 'score ' + g2rlt + '/10';
}


function g2nextG() {
  document.querySelector('#g2nextGame').textContent = 'Next Game';
  document.querySelector('#g2nextGame').addEventListener('click', g2nGame);
}


function g2nGame() {
  loadNextMiniGame();
}
