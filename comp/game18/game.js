var g18container = document.querySelector('#g18container');
var g18q1 =[
  "Quelle commande Linux permet de compter le nombre total de lignes, mots et caractères d'un fichier?",//question en [0]
  "wc",// bonne réponse en [1]
  "wcount",//mauvaises répons
  "countw",//mauvaises répons
  "count p",//mauvaises répons
];

var g18q2 =[
  "Laquelle de ces commande n'est pas une commande de communication?",
  "grep",
  "mail",
  "mesg",
  "write",
];

var g18q3 =[
  "Quelle commande Linux permet de savoir où je me trouve dans l'arborescence de mon ordinateur?",
  "Pwd",
  "Find",
  "Route",
  "PLace",
];

var g18q4 =[
  "Quelle commande Linux permet de connaitre le type d'un fichier?",
  "File",
  "Tell",
  "Ln",
  "Type",
];

var g18q5 =[
  "Quelle commande permet d'afficher les interfaces réseaux ?",
  "Ifconfig",
  "Ipconfig",
  "Ethconfig",
  "Faconfig",
];

var g18q6 =[
  "Quelle commande permet de comparer deux fichiers ?",
  "Diff",
  "Compare",
  "Dif",
  "Cmp",
];

var g18q7 =[
  "Quelle commande permet d'afficher les dix dernières lignes d'un fichier ?",
  "Tail",
  "Last",
  "Final",
  "Head",
];

var g18q8 =[
  "Quelle commande permet d'effacer un répertoire vide?",
  "Rmdir",
  "Rdir",
  "Removedir",
  "Rd",
];

var g18q9 =[
  "Quelle commande est utilisée pour ajouter des travaux d'impression à la file d'attente?",
  "Lpr",
  "Lpd",
  "Lpc",
  "Lpq",
];

var g18q10 =[
  "Quelle commande permet de lire le contenu d'un fichier texte?",
  "Less",
  "Read",
  "Show",
  "Gl",
];

var g18qtab = [g18q1,g18q2,g18q3,g18q4,g18q5,g18q6,g18q7,g18q8,g18q9,g18q10];// tableau contenant chaque tableau de question/reponse

var g18Time=11;

var g18Score = 0;
var g18uptadeTime;




function addPoints(points){
  g18Score=g18Score+1;
  points=g18Score;
  document.getElementById('g18score').value="score : "+g18Score;
  return points;
}

function g18Timer(){
  g18Time=g18Time-1;
  document.getElementById('g18Time').value="temps restant : "+g18Time;
  g18uptadeTime=setTimeout(function(){g18Timer()}, 1000);

  if (g18Time<1) {
    g18randomQ();
    g18Time=11;
  }
  if (g18qtab.length<1) {
    clearTimeout(g18uptadeTime);
  }
}

function g18gameOver(){
  // si il n'y a plus de question je charge le nouveau jeu et je stop le timer
    var g18container=document.querySelector("#g18container");
    document.querySelector('.g18Qzone').innerHTML="";//je retire la question et les reponses
    var g18result=document.querySelector('.g18result');
    document.querySelector('.g18Rfield').innerHTML="";

    document.querySelector('#g18form__submit').value="Next Game";
    document.querySelector('#g18form__submit').disabled=false;
    document.querySelector('#g18form__submit').addEventListener("click",loadNextMiniGame);
    g18result.style.display = "block";
    g18container.appendChild(g18result);
    clearTimeout();
}

function g18randomQ(){
  g18Time=11;//reste time to 11 for new question
  if (g18qtab.length<1) {
    g18gameOver();
  }
  document.querySelector('.g18Qzone').innerHTML="";//je retire la question et les reponses
  document.querySelector('.g18Rfield').innerHTML="";
  document.querySelector('#g18form__submit').disabled=true;//button change de valeur
  var g18result = document.querySelector('.g18result');
  g18result.style.display = "none";
  var g18rdQ=Math.floor(Math.random()*g18qtab.length);//je selectionne une question au hasard
  var g18Q = document.querySelector(".g18Qzone");//
  g18result.textContent+="\n"+g18qtab[g18rdQ][0];
  g18Q.textContent=g18qtab[g18rdQ][0];//j'affiche la question
  g18container.appendChild(g18Q);
  g18container.appendChild(g18result);
  var g18R = document.querySelector('.g18Rfield');
  g18R.className="g18Rfield";
  g18qtab[g18rdQ].shift();//je retire la question du tableau
  var g18tabRep=[];//je crer un tableau qui contiendras les boutons des reponses des reponses

  for (var g18i = 0; g18i < g18qtab[g18rdQ].length; g18i++) {// je crer mes boutons en attibuant des classes differents pour les mauvaises reponses
    var g18reponse=document.createElement("button");

    g18reponse.textContent=g18qtab[g18rdQ][g18i];
    if (g18i==0) {
      g18reponse.id="g18true";
      g18reponse.addEventListener('click',g18randomQ);
      g18reponse.addEventListener('click',addPoints);
    } else {
      g18reponse.className="g18false";
      g18reponse.addEventListener('click',g18randomQ);
    }
    g18tabRep.push(g18reponse);//j'ajoute les boutons dans mon tableau
    //g18Q.appendChild(g18reponse);
  }

  g18tabRep.sort(function(a, b){return 0.5 - Math.random()});//j'ordonne le tableau de boutons  ne comportant plus que les reponses de manière aléatoire
  for (var g18i = 0; g18i < g18tabRep.length; g18i++) {//je parcours ce tableau et reinjecte les elements dans html
    g18R.appendChild(g18tabRep[g18i]);
  }
  g18container.appendChild(g18R);// je reinjecte tous les boutons  dans le contenu html
  g18qtab.splice(g18rdQ,1);// je retire la question deja posée


}
