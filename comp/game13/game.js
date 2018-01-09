/*
  Author : Amanda Medeiros
*/

var g13q1 = [
    "À quoi sert le CSS ?",
    "Styliser une page web",
    "Garder des données dans une base de données",
    "Afficher un site sur Internet",
    "Donner de l’interactivité à une page web"
];
var g13q2 = [
    "Quel code permet d’appliquer le même style aux balises <h1> et <p> ?",
    "h1, p {}",
    "h1 (p){}",
    "h1.p {}",
    "h1{p}"
];
var g13q3 = [
    "Quelle est la différence entre les attributs class et id ?",
    "L’id peut être utilisé qu’un seule fois dans le code, au contraire de class",
    "On peut utiliser class en toutes les balises et id juste dans la balise <p>",
    "On peut utiliser id en toutes les balises et class juste dans la balise <p>",
    "Class peut être utilisé qu’un seule fois dans le code, au contraire de l’id"
];
var g13q4 = [
    "En CSS, comment sélectionnez-vous l’image suivante par son identifiant ? <img id = superimage src = image.png >",
    "#superimage {}",
    "superimage {}",
    "img { }",
    ".superimage {}"
];
var g13q5 = [
    "Quel est l'avantage du modèle Flexbox par rapport au modèle block ?",
    "La possibilité de créer facilement des pages responsives",
    "Juste avec Flexbox c’est possible de styliser un fichier HTML",
    "En utilisant Flexbox c’est possible d’ajouter un formulaire à une page web",
    "Sans Flexbox une page web ne peut pas afficher des animations"
];
var g13q6 = [
    "Avec la syntaxe A + B en CSS on sélectionne :",
    "Toutes les élément B qui suit immédiatement un élément A",
    "Toutes les éléments A et B",
    "Toutes les éléments entre A et B",
    "Toutes les éléments A"
];
var g13q7 = [
    "Quelle propriété peut être utilisé pour changer le type police, en CSS ?",
    "font-family",
    "font",
    "font-color",
    "font-syze"
];
var g13q8 = [
    "Qu’est ce que la pseudo-classe :hover permet de changer ?",
    "L’aspect d’un élément lorsque les visiteurs d’un site le survolent avec le curseur",
    "L’aspect d’un lien lors du clic",
    "L’aspect d’un élément pendant son téléchargement",
    "Le style d’un lien non visité"
];
var g13q9 = [
    "Quelle est la fonction du pseudo-element :before ?",
    "Insérer de contenu avant un élément",
    "Insérer de contenu après un élément",
    "Cacher de contenu avant un élément",
    "Cacher de contenu après un élément"
];
var g13q10 = [
    "La propriété visibility, qui permet de cacher un élément de l’utilisateur, peut avoir quelles valeurs ?",
    "Visible, hidden et collapse",
    "Visible, hidden et sticky",
    "Visible, invisible et hidden",
    "Hidden, fixed, sticky"
];
var g13q11 = [
    "La propriété padding spécifie l’espace…",
    "Entre le bord d’un élément et son contenu",
    "Entre les bordes de deux éléments",
    "Entre les bordes gauche et droite d’un élément",
    "Entre les balises <body> et <head>"
];
var g13q12 = [
    "Dans un flex container, quelle est l’orientation des éléments par défaut ?",
    "Horizontale",
    "Perpendiculaire",
    "Verticale",
    "Diagonale"
];

var g13_AllQ = [g13q1, g13q2, g13q3, g13q4, g13q5, g13q6, g13q7, g13q8, g13q9, g13q10, g13q11, g13q12];

var g13ans1 = document.querySelector('#a1'),
  g13ans2 = document.querySelector('#a2'),
  g13ans3 = document.querySelector('#a3'),
  g13ans4 = document.querySelector('#a4'),
  g13points = 0;

var g13displayedQuestions = [];
var g13allRA = [];
var g13round = -1;
var g13timer;

//start the game

function g13startGame() {
  g13getRandomQA();
  g13click();
}

//choose a randomic table

function g13randomTab(tab) {
  var g13index = Math.floor(Math.random() * (tab.length - 1));
  var g13result = tab[g13index];

  return g13result;
}

//choose randomic question among all questions

function g13randomQuestion() {
  var g13currentQ = g13randomTab(g13_AllQ);
  while (g13displayedQuestions.indexOf(g13currentQ) > -1) {
    g13currentQ = g13randomTab(g13_AllQ);
  }
  g13displayedQuestions.push(g13currentQ);

  return g13currentQ;
}


// show questions and answers

function g13setQuestion(tab) {
  var g13_AllQ = tab[0];
  document.querySelector('h2').innerHTML = g13_AllQ;

  var g13ans1 = tab[Math.floor(Math.random() * (tab.length - 1) + 1)];
  a1.innerHTML = g13ans1;

  var g13ans2 = tab[Math.floor(Math.random() * (tab.length - 1) + 1)];
  while (g13ans1 == g13ans2) {
    var g13ans2 = tab[Math.floor(Math.random() * (tab.length - 1) + 1)];
  }
  document.querySelector('#a2').innerHTML = g13ans2;

  var g13ans3 = tab[Math.floor(Math.random() * (tab.length - 1) + 1)];
  while (g13ans1 == g13ans3 || g13ans2 == g13ans3) {
    var g13ans3 = tab[Math.floor(Math.random() * (tab.length - 1) + 1)];
  }
  document.querySelector('#a3').innerHTML = g13ans3;

  var g13ans4 = tab[Math.floor(Math.random() * (tab.length - 1) + 1)];
  while (g13ans1 == g13ans4 || g13ans2 == g13ans4 || g13ans3 == g13ans4) {
    var g13ans4 = tab[Math.floor(Math.random() * (tab.length - 1) + 1)];
  }
  document.querySelector('#a4').innerHTML = g13ans4;

  return g13ans1, g13ans2, g13ans3, g13ans4;
}

// random question and answers

function g13getRandomQA() {
  if (g13round == 11) {
    var g13endGame = "Vous avez eu " + g13points + " bonnes réponses.";
    document.querySelector('#question').innerHTML = g13endGame;
    document.querySelector('#question').classList.add("card") = g13endGame;
  } else {
    g13ans1.classList.remove("bg-danger");
    g13ans2.classList.remove("bg-danger");
    g13ans3.classList.remove("bg-danger");
    g13ans4.classList.remove("bg-danger");
    var g13currentQuestion = g13randomQuestion();
    g13setQuestion(g13currentQuestion);
    var g13rightAns = g13currentQuestion[1];
    g13allRA.push(g13rightAns);
    var g13timer = setTimeout(g13getRandomQA, 6000);
    g13round++;

    document.getElementById('startgame').innerHTML = ""; //button Go! get away after the game starts

    return g13timer, g13allRA;
  }
}

//question results and score

function g13result() {
  clearTimeout(g13timer); // stops timer
  if (g13allRA.indexOf(this.textContent) > -1) {
    g13points++;
  } else {
    this.classList.add("bg-danger");
  }
  document.querySelector('#score').innerHTML = "Score : " + g13points;
  return g13points;
}

function g13click() {

  g13ans1.addEventListener('click', g13result);
  g13ans2.addEventListener('click', g13result);
  g13ans3.addEventListener('click', g13result);
  g13ans4.addEventListener('click', g13result);
}
