/*var g18container = document.querySelector('#g18container');
var g18q1 =[
  "Quelle commande Lunix permet de compter le nombre total de lignes, mots et caractères d'un fichier?",//question en [0]
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
  "Quelle commande Lunix permet de savoir où je me trouve dans l'arborescence de mon ordinateur?",
  "Pwd",
  "Find",
  "Route",
  "PLace",
];

var g18q4 =[
  "Quelle commande Lunix permet de connaitre le type d'un fichier?",
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
var g18result=document.querySelector('.g18result');
g18result.style.display="none";



function g18resultQ(){
  //.disabled=true;
  g18Time=g18Time+1;
  this.style.backgroundColor = "red";
  document.getElementById('g18true').style.backgroundColor = "green";
  setTimeout(function(){g18randomQ()}, 2000);
}


function g18resultPage(){// create result page
  for (var g18i = 0; g18i < g18qtab.length; g18i++) {
    var g18Q=document.createElement("div");
    g18Q.classList.add("badge", "badge-info", "col");
    g18Q.textContent=g18qtab[g18i][0];
    g18result.appendChild(g18Q);
    for (var i = 1; i < g18qtab[g18i].length; i++) {
      var g18R=document.createElement("button");
      g18R.classList.add("g18res", "btn", "button");
      if (i===1) {
         g18R.style.backgroundColor = "green";
      } else {
        g18R.style.backgroundColor = "red";
      }
      g18R.textContent=g18qtab[g18i][i];
      g18result.appendChild(g18R);
    }
  }
}

function g18score(){// add 1 to the points
  addPoints(1) ;
}

function g18Timer(){
  g18Time=g18Time-1;
  document.getElementById('g18Time').value="temps restant : "+g18Time;
  g18uptadeTime=setTimeout(function(){g18Timer()}, 1000);

  if (g18Time<1) {// end of timer reset time and charge new Q?
    g18Time=11;
    g18randomQ();
  }
}

function g18colorAnswer(){// if I click on good answer i change text color in result page
  var g18=[];
  for (var i = 0; i < 40; i++) {
    g18.push(document.querySelectorAll('.g18res')[i]);
  }
  for (var i = 0; i < g18.length; i++) {// I compre the button I clicked on with the button of result page
    if (this.textContent===g18[i].textContent) {
        document.querySelectorAll('.g18res')[i].style.color="white";
    }
  }

}

function g18gameOver(){
    clearTimeout(g18uptadeTime);// stop timer
    document.querySelector('.g18Qzone').innerHTML="";//clear page
    document.querySelector('.g18Rfield').innerHTML="";
    document.querySelector('#g18form__submit').value="Next Game"; //change value of button
    document.querySelector('#g18form__submit').disabled=false;
    var g18result=document.querySelector('.g18result');//show result page
    g18result.style.display="block";
    document.querySelector('#g18form__submit').addEventListener("click",loadNextMiniGame);
}

function g18randomQ(){

  if (g18qtab.length<1) {//test if I have questions left
    g18gameOver();
  }else {

    g18Time=11;//reste time to 11 for new question
    //document.querySelector('.g18QR').
    document.querySelector('.g18Qzone').innerHTML="";//clear page
    document.querySelector('.g18Rfield').innerHTML="";
    document.querySelector('#g18form__submit').disabled=true;
    var g18rdQ=Math.floor(Math.random()*g18qtab.length);//select a random nmb in tab length
    var g18Q = document.querySelector(".g18Qzone");//link a var with question zone div of html
    g18Q.textContent=g18qtab[g18rdQ][0];//set the question of random tab in question tab
    g18container.appendChild(g18Q);// show question on page
    g18qtab[g18rdQ].shift();//I supp the question in the random tab so I only have the answers left
    var g18R = document.querySelector('.g18Rfield');// //link a var with answer zone div of html
    g18R.className="g18Rfield";

    var g18tabRep=[];//create tab to put answer buttons

    for (var g18i = 0; g18i < g18qtab[g18rdQ].length; g18i++) {// create button whith answers and event onclick
      var g18reponse=document.createElement("button");
      g18reponse.textContent=g18qtab[g18rdQ][g18i];
      if (g18i==0) {// index 0 is now the good answer caus i supp the question of the tab
        g18reponse.id="g18true";
        g18reponse.addEventListener('click',g18score);
      } else {
        g18reponse.className="g18false";
      }
      g18reponse.classList.add("button","btn-light", "btn", "m-3")//style of the buttons
      g18reponse.addEventListener('click',g18resultQ);
      g18reponse.addEventListener('click',g18colorAnswer);
      g18tabRep.push(g18reponse);//add buttons in my new tab
    }

    g18tabRep.sort(function(a, b){return 0.5 - Math.random()});//sort my tab of buttons randomly
    for (var g18i = 0; g18i < g18tabRep.length; g18i++) {//put buttons in answer zone
      g18R.appendChild(g18tabRep[g18i]);
    }

    g18container.appendChild(g18R);// show answer zone in html
    g18qtab.splice(g18rdQ,1);// supp tab used so I wont get it randomly again
  }
}
*/
loadNextMiniGame();
//Ligne 127 appelle directement ta fonction g18Timer
