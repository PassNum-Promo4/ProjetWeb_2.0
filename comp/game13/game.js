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

var g13index = 0;

var g13score = 0;

/*

function g13_Random_Answer(tab) {
    var g13_Answer = Math.floor((5 - 1) * Math.random()) + 1;
    var g13_Answer_Result = tab[g13_Answer];

    return g13_Answer_Result;
}


function g13_Random_Question(tab) {
    var g13q = Math.floor(Math.random() * g13_AllQ.length);
    var g13qresult = tab[g13q];

    return g13qresult;
}
*/

function g13getRandomQA(index) {
    var g13currentTabQ = g13_AllQ[index]; // contains the current question
    var g13ElemQ = document.createElement('h2'); // create h2 containing the question
    g13ElemQ.textContent = g13currentTabQ[0]; // contains the text of the question
    var g13divQuestion = document.querySelector("#question"); // gets the div having the id = question
    g13divQuestion.innerHTML = ''; // empties the div having the id = question
    g13divQuestion.appendChild(g13ElemQ); // adds the text of the question to the div having id = question
    var g13divAnswer = document.querySelector("#answer"); // gets the div having the id = answer
    g13divAnswer.innerHTML = ''; // empties the div having the id = answer

    for (var i = 1; i < 5; i++) { // show the answers
        var g13ElemA = document.createElement('p');
        g13ElemA.textContent = g13currentTabQ[i];
        g13divAnswer.appendChild(g13ElemA);

    }

}

function addPoints(points) { // add score
    g13score = g13score + 1;
    points = g13score;
    document.getElementById('g13score').value = " Score : " + g13score;

    return points;
}


function g13BeginQ() { //for start the game
    g13index = 0;
    g13getRandomQA(g13index);

}

function g13NextQ() { //for continuing the game
    g13index = g13index + 1;
    g13getRandomQA(g13index);

}
