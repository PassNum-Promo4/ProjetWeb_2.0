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
  var g5questionInter = g5questions;
  var g5questArea = document.querySelector('#quest');
  var g5ans1 = document.querySelector('#ans1');
  var g5ans2 = document.querySelector('#ans2');
  var g5ans3 = document.querySelector('#ans3');
  var g5ans4 = document.querySelector('#ans4');
  var g5round = 0;
  var g5displayedQuestions = new Array();
  var g5allRightAns = new Array();
  var g5timeleft = 10;
  var g5updateTime;
  var g5currentQuestion;



function g5random(tab){
  var g5randomIndex = Math.floor(Math.random() * (tab.length));

  return g5randomIndex;

}



//Pick a new random question
function g5randomQuestion() {
  var g5index = g5random(g5questionInter);
  var g5result = g5questionInter[g5index];

  g5questionInter.splice(g5index,1);
  
  return g5result;
  
}



// Get a Random Question and Answers
function g5getRandomQA() {
  g5countdown();
  if (g5round == 10) { g5gameOver(); } 
  else {
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
    
    g5round++;
    
    return g5round;
  }

}



// Display the question and it answers in random order
function g5setQuestion(tab) {

  // Save right answer in an tab
  var g5rightAns = tab[1];
  g5allRightAns.push(g5rightAns);

  // Display the question
  var g5question = tab.shift();
  g5questArea.textContent = g5question;

  // Display answers
  var g5indexAns1 = g5random(tab);
  ans1.textContent = tab.splice(g5indexAns1,1);

  var g5indexAns2 = g5random(tab);
  ans2.textContent = tab.splice(g5indexAns2,1);
  
  var g5indexAns3 = g5random(tab);
  ans3.textContent = tab.splice(g5indexAns3,1);  

  var g5indexAns4 = g5random(tab);
  ans4.textContent = tab.splice(g5indexAns4,1);

}



// Show question results and update score
function g5resultquizz() {
  g5timeleft = 10;
  clearTimeout(g5updateTime);
  g5displayRightAnswer();
  if (g5allRightAns.indexOf(this.textContent) > -1) { addPoints(1); } 
  else { this.classList.add("bg-danger"); }

}



function g5displayRightAnswer() {
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
  setTimeout(g5getRandomQA,1500);

}



// Set the countdown
  function g5countdown() {
      g5updateTime = setInterval(g5timer, 1000);
     
      function g5timer() {
        if (g5timeleft < 1) {
          g5displayRightAnswer();
          g5timeleft = 9;
          clearTimeout(g5updateTime);
          return;
        } else {
        g5timeleft --;        
        document.querySelector('#counter').textContent = g5timeleft;
      }

      }

      return g5updateTime, g5timeleft;
    }


    
// Ends the game
function g5gameOver() {
  clearTimeout(g5updateTime);
  var g5endGameMessage = "Cliquez pour passer au jeu suivant";
  g5questArea.textContent = g5endGameMessage;
  g5questArea.classList.add("bg-warning", "card");
  document.querySelector('#counter').textContent ="C'est terminé!";
  g5questArea.addEventListener('click', loadNextMiniGame);

}


g5getRandomQA();
resetGameTitle("Javascript");




