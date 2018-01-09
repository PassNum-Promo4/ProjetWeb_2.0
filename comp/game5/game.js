/*
  Author : Julie Cervera
*/

var g5questions = new Array(
  new Array("Comment écrit-on l’opérateur d’égalité stricte?", "===", "==", "←", "."),
  new Array("Comment appeler une fonction ?", "myFunction()", "function myFunction()", "fun myFunction()", "myFunction"),
  new Array("Que doit contenir l’instruction for() ?", "[initialisation]; [condition]; [incrémentation]", "[incrémentation]; [condition]; [initialisation]", "[condition]", "i++ ; i < 10"),
  new Array("Comment sélectionner le premier élément avec la classe  'container' ?", "document.querySelector(‘.container’)",  "document.querySelectorAll(‘.container’)",  "document.getElementByName(container)",  "document.querySelector(container)"),
  new Array("Comment définir une variable de type entier ? ",  " var myVariable ", " entier myVariable ",  " int myVariable ",  " const myVariable "),
  new Array("Où est-il recommandé de placer les balises < script > dans le fichier html ? " , "à la fin du body", "à la fin du head ",  " au début du body ",   " après le body "),
  new Array("Quelle est la bonne syntaxe?",  "if (a != 2) {}",  " if a != 2 {}",  "if (a <> 2) {}",  "if a <> 2 {}"),
  new Array("Quelle est la version actuelle de JavaScript ? ", "5 ",  "1 ",  "beta ",  "8 "),
  new Array("Qu'est ce que le DOM ?",  "Document Object Model",  "Data Oriented Module",  "Display Order Margin",  "Document On Modifier"),
  new Array("Comment afficher a dans la console ?",  "console.log(a)",  "alert(a)",  "log.console(a)", "document.write(a)"),
  new Array("Quel est un nom valable pour une variable?", "name2", "2name", "Name2", "var"));
var g5ans1 = document.querySelector('#ans1'),
  g5ans2 = document.querySelector('#ans2'),
  g5ans3 = document.querySelector('#ans3'),
  g5ans4 = document.querySelector('#ans4'),
  g5points = 0;
var g5displayedQuestions = new Array();
var g5allRightAns = new Array();
var g5round = -1;
var g5timer;
var g5timeleft = 11;
var g5updateTime;

//Pick a new random question
function g5randomQuestion() {
  var g5currentQuestion = g5random(g5questions);
  while (g5displayedQuestions.indexOf(g5currentQuestion) > -1) {
    var g5currentQuestion = g5random(g5questions);
  }
  g5displayedQuestions.push(g5currentQuestion);

  return g5currentQuestion;
}

function g5random(tab) {
  var g5index = Math.floor(Math.random() * (tab.length));
  var g5result = tab[g5index];

  return g5result;
}


  function g5countdown() {
      g5timeleft --;
      document.querySelector('#counter').textContent =g5timeleft;
      g5updateTime = setTimeout(g5countdown, 1000);
      if (g5timeleft < 1) {
        g5timeleft = 11;
        g5getRandomQA();
      }

    }

// Print on the webpage the question and it answers in random order
function g5setQuestion(tab) {
  var g5question = tab[0];
  document.querySelector('#quest').textContent = g5question;

  var g5answer1 = tab[Math.floor(Math.random() * (tab.length - 1) + 1)];
  ans1.innerHTML = g5answer1;

  var g5answer2 = tab[Math.floor(Math.random() * (tab.length - 1) + 1)];
  while (g5answer1 == g5answer2) {
    var g5answer2 = tab[Math.floor(Math.random() * (tab.length - 1) + 1)];
  }
  document.querySelector('#ans2').textContent = g5answer2;

  var g5answer3 = tab[Math.floor(Math.random() * (tab.length - 1) + 1)];
  while (g5answer3 == g5answer2 || g5answer3 == g5answer1) {
    var g5answer3 = tab[Math.floor(Math.random() * (tab.length - 1) + 1)];
  }
  document.querySelector('#ans3').textContent = g5answer3;

  var g5answer4 = tab[Math.floor(Math.random() * (tab.length - 1) + 1)];
  while (g5answer1 == g5answer4 || g5answer2 == g5answer4 || g5answer3 == g5answer4) {
    var g5answer4 = tab[Math.floor(Math.random() * (tab.length - 1) + 1)];
  }
  document.querySelector('#ans4').textContent = g5answer4;

  return g5answer1, g5answer2, g5answer3, g5answer4;
}

// Get a Random Question and Answers
function g5getRandomQA() {
  g5timeleft = 11;
  if (g5round == 9) {
    var g5endGameMessage = "C'est terminé! Vous avez eu " + g5points + " bonnes réponses. Cliquez pour passer au jeu suivant";
    document.querySelector('#quest').textContent = g5endGameMessage;
    document.querySelector('#quest').classList.add("bg-warning", "card");
    addPoints(g5points);
    document.addEventListener('click', loadNextMiniGame);
    clearTimeout(g5updateTime);
  } else {
    g5ans1.addEventListener('click', g5resultquizz);
    g5ans2.addEventListener('click', g5resultquizz);
    g5ans3.addEventListener('click', g5resultquizz);
    g5ans4.addEventListener('click', g5resultquizz);
    g5ans1.classList.remove("bg-success", "bg-danger");
    g5ans2.classList.remove("bg-success", "bg-danger");
    g5ans3.classList.remove("bg-success", "bg-danger");
    g5ans4.classList.remove("bg-success", "bg-danger");
    var g5currentQuestion = g5randomQuestion();
    g5setQuestion(g5currentQuestion);
    var g5rightAns = g5currentQuestion[1];
    g5allRightAns.push(g5rightAns);
    g5round++;
    return g5allRightAns;
  }
}

// Show question results and update score
function g5resultquizz() {
  g5ans1.removeEventListener('click', g5resultquizz);
  g5ans2.removeEventListener('click', g5resultquizz);
  g5ans3.removeEventListener('click', g5resultquizz);
  g5ans4.removeEventListener('click', g5resultquizz);
  if (g5allRightAns.indexOf(g5ans1.textContent) > -1) {
    g5ans1.classList.add("bg-success");
  } else if (g5allRightAns.indexOf(g5ans2.textContent) > -1) {
    g5ans2.classList.add("bg-success");
  } else if (g5allRightAns.indexOf(g5ans3.textContent) > -1) {
    g5ans3.classList.add("bg-success");
  } else if (g5allRightAns.indexOf(g5ans4.textContent) > -1) {
    g5ans4.classList.add("bg-success");
  }
  if (g5allRightAns.indexOf(this.textContent) > -1) {
    g5points++;
  } else {
    this.classList.add("bg-danger");
  }
  document.querySelector('#score').innerHTML = "score : " + g5points;
  setTimeout(g5getRandomQA,1500);
  return g5points;
}


g5getRandomQA();
g5countdown();
