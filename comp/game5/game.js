/*
  Author : Julie Cervera
*/


var g5question1 = ["Comment écrit-on l’opérateur d’égalité stricte?", "===", "==", "←", "."];
var g5ans1 = document.querySelector('#ans1'),
    g5ans2 = document.querySelector('#ans2'),
    g5ans3 = document.querySelector('#ans3'),
    g5ans4 = document.querySelector('#ans4'),
    g5points = 0;


function g5randomAnswer(tab) {
  var g5index = (Math.floor((5-1)*Math.random())+1);
  var g5result = tab[g5index];

  return g5result;
}

// Print on the webpage the question and it answers in random order
function g5setQuestion(tab) {
    var g5question = tab[0];
    document.querySelector('#quest').innerHTML = g5question;

    var g5answer1 = g5randomAnswer(tab);
    ans1.innerHTML=g5answer1;

    var g5answer2 = g5randomAnswer(tab);
    while (g5answer1 == g5answer2) {
      var g5answer2 = g5randomAnswer(tab);
    }
    document.querySelector('#ans2').innerHTML = g5answer2;

    var g5answer3 = g5randomAnswer(tab);
    while (g5answer3 == g5answer2 || g5answer3 == g5answer1) {
      var g5answer3 = g5randomAnswer(tab);
    }
    document.querySelector('#ans3').innerHTML = g5answer3;

    var g5answer4 = g5randomAnswer(tab);
    while (g5answer1 == g5answer4 || g5answer2 == g5answer4 || g5answer3 == g5answer4) {
      var g5answer4 = g5randomAnswer(tab);
    }
    document.querySelector('#ans4').innerHTML = g5answer4;

    return g5answer1, g5answer2, g5answer3, g5answer4;
  }

// Show if right or wrong answer and update points
  function g5resultquizz(elem) {
    if (g5question1[1] == elem.textContent) {
      elem.classList.add("bg-success");
      g5points = g5points + 1;
    } else {
      elem.classList.add("bg-danger");
    }
    document.querySelector('#score').innerHTML=g5points;
  }


g5setQuestion(g5question1);
console.log(g5question1[1]);
