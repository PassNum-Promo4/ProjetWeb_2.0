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
  var g7TrashTabQ = new Array();
  var g7TrashTabA = new Array();
  var g7Question = "";
  var g7TorF = "";
  var g7Wait1Sec = "";
  var g7Timer;
  var g7TimerQ;
  var g7CountdownGame = 90;
  var g7CountdownQuestion = 9;
  var g7Points = 0;
  var g7Round = 0;
  var g7A1div = "";
  var g7A2div = "";
  var g7A3div = "";
  var g7A4div = "";

  // function Start Game:
  g7StartGame();

  function g7StartGame() {
    g7Wait1ForCountdownGame();
    g7Wait1ForCountdownQuest();
    g7RandomTab();
    g7nextQuest();
  }

  function g7Wait1ForCountdownGame() { //Wait 1 second and call the function g7GameTime()
    g7Timer = window.setTimeout('g7GameTime()',1000);
  }

  // function Game time:
  function g7GameTime() { // Testing if countodown is done for reset game and pushing the time into HTML
    document.querySelector('#GameTimer').textContent = 'Temps Partie : ' + g7CountdownGame;
    if (g7CountdownGame <= 0) { //If Countdown come to 0
      g7Round = g7Round + 1;
      g7resetGame();
      g7EndOfGame();
      loadNextMiniGame();
    } else if (g7Round >= 10) {
        g7resetGame();
    } else { //Keep substracting
      g7CountdownGame--;
      g7Wait1ForCountdownGame();
    }
  }

  function g7Wait1ForCountdownQuest() { //Wait 1 second and call the function g7QuestionTime()
    g7TimerQ = window.setTimeout('g7QuestionTime()',1000);
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

  // function reset
  function g7resetGame() { //reset the questions and answers
    g7TrashTabA = [];
    document.querySelector('#Quest').textContent = '';
    document.querySelector('#Answer1-4').textContent = '';

  }

  // function randomtab:
    function g7RandomTab() {
      while (g7Round < 10) {
        var i = Math.floor(Math.random()*g7TabAll.length);
        if (g7TrashTabQ.indexOf(i) === -1) {
          g7TrashTabQ[g7Round] = i;
          g7Question = g7TabAll[i];
          g7createArea();
          return g7Question;
        }
      }
    }

  // function Next Question:
    function g7nextQuest() {
      if (g7Round != 9 ) {
        g7Round++;
        g7resetGame();
        g7RandomTab();
        window.clearTimeout(g7TimerQ);
        g7CountdownQuestion = 9;
        g7QuestionTime();
        console.log(g7Round);
      } else {
        g7resetGame();
        g7EndOfGame();
        console.log('End Of Game')
        loadNextMiniGame();
      }
    }


     function g7createArea() { //Create container

       g7A1div = document.createElement('button');
       g7A1div.id = 'g7A1';
       g7A1div.classList.add('btn','btn-primary','rounded','m-1','p-3');
       g7A1div.textContent = g7Question[1];

       g7A2div = document.createElement('button');
       g7A2div.id = 'g7A2';
       g7A2div.classList.add('btn','btn-primary','rounded','m-1','p-3');
       g7A2div.textContent = g7Question[2];

       g7A3div = document.createElement('button');
       g7A3div.id = 'g7A3';
       g7A3div.classList.add('btn','btn-primary','rounded','m-1','p-3')
       g7A3div.textContent = g7Question[3];

       g7A4div = document.createElement('button');
       g7A4div.id = 'g7A4';
       g7A4div.classList.add('btn','btn-primary','rounded','m-1','p-3')
       g7A4div.textContent = g7Question[4];

       g7pushQuestion();
  }

  function g7pushQuestion() {
    document.querySelector('#Quest').textContent = g7Question[0];

    var j = 0;
    while (j < 4) {
      var i = Math.floor(Math.random() * 4) + 1;
      if (g7TrashTabA.indexOf(i) === -1) {
        g7TrashTabA[j] = i;
        switch (i) {
          case 1:
            document.querySelector('#Answer1-4').appendChild((g7A1div));
            break;
          case 2:
            document.querySelector('#Answer1-4').appendChild((g7A2div));
            break;
          case 3:
            document.querySelector('#Answer1-4').appendChild((g7A3div));
            break;
          case 4:
            document.querySelector('#Answer1-4').appendChild((g7A4div));
            break;
        }
        j++
      }
  }
    g7Click();
  }

  function g7Click() {
    document.querySelector('#g7A1').addEventListener('click', g7trueAnswer);
    document.querySelector('#g7A2').addEventListener('click', g7falseAnswer);
    document.querySelector('#g7A3').addEventListener('click', g7falseAnswer);
    document.querySelector('#g7A4').addEventListener('click', g7falseAnswer);
  }

  function g7trueAnswer() {
    document.querySelector('#g7A1').classList.add('btn','btn-success','rounded','m-1','p-3');
    window.setTimeout('g7nextQuest()',1000);
    addPoints(1);

  }

  function g7falseAnswer() {
    document.querySelector('#g7A2').classList.add('btn','btn-danger','rounded','m-1','p-3');
    document.querySelector('#g7A3').classList.add('btn','btn-danger','rounded','m-1','p-3');
    document.querySelector('#g7A4').classList.add('btn','btn-danger','rounded','m-1','p-3');
    window.setTimeout('g7nextQuest()',1000);

  }
  function g7EndOfGame() {
    if (g7Round == 9) {
      window.clearTimeout(g7Timer);
      window.clearTimeout(g7TimerQ);

    }
  }
