/*
  Author : Caparos Mickael
*/
var g4container = document.querySelector('#g4container');
var g4q1 =[
  "Comment s'appelle habituellement la branche principale d'un repository Git ?",//question en [0]
  "Master",// bonne réponse en [1]
  "Base",//mauvaises répons
  "Origin",//mauvaises répons
  "Remote",//mauvaises répons
];

var g4q2 =[
  "Quelle commande Git permet de voir sur quelle branche on se trouve ?",
  "git branch",
  "git rebase",
  "git checkout",
  "git commit",
];

var g4q3 =[
  "Quelle est la bonne syntaxe pour créer une branche  ?",
  "git branch ma-branche",
  "git branch",
  "git status",
  "git checkout ma-branche",
];

var g4q4 =[
  "Quelle est la bonne syntaxe pour créer une branche et se positionner dessus ?",
  "git checkout -b ma-branche",
  "git branch -b ma-branche",
  "git branch ma-branche",
  "git branch checkout ma-branche",
];

var g4q5 =[
  "Quel cas génère systématiquement une situation de conflit dans Git ?",
  "Si certains commits des deux branches que l'on fusionne affectent les mêmes lignes de code",
  "Si un autre utilisateur a rendu une branche invalide",
  "Si on fusionne deux branches qui ont été modifiées par deux utilisateurs différents ",
  "Si on fusionne deux branches dont l'une contient plusieurs commits appliqués à un même fichier",
];

var g4q6 =[
  "Comment supprimer une branche dans Git ?",
  "git branch -d ma-branche",
  "git delete ma-branche",
  "git remove -d ma-branche",
  "git branche delete ma-branche",
];

var g4q7 =[
  "Quelle commande permet de savoir qui a modifié une ligne donnée d'un fichier ?",
  "git status",
  "git blame",
  "git checkout",
  "git hist",
];

var g4q8 =[
  "Quelle est une bonne façon d'ignorer un fichier définitivement ?",
  "Utiliser un fichier .gitignore",
  "Utiliser la commande git ignore",
  "Enlever le fichier de l'index",
  "La meilleur défense c'est l'ignorance",
];

var g4q9 =[
  "Comment faire pour mettre de côté ses modifications de façon temporaire sans faire de commit ?",
  "En utilisant la commande git stash",
  "En copiant son code dans un autre répertoire",
  "En utilisant la commande git checkout",
  "En copiant son code dans une nouvelle branche",
];

var g4q10 =[
  "Comment s'appelle le processus qui consiste à proposer une suite de commits pour qu'ils soient acceptés dans un projet open source ?",
  "Un Pull Request",
  "Un Fork",
  "Un Fork Request",
  "Un Push Request",
];

var g4qtab = [g4q1,g4q2,g4q3,g4q4,g4q5,g4q6,g4q7,g4q8,g4q9,g4q10];// tableau contenant chaque tableau de question/reponse
var g4Time=10;


setTimer(g4Time, g4resultQ);// call function tha set the time of the progress bar anim and the function that will be called at the end of the anim


resetGameTitle("QUIZZ COMMANDES LINUX");// i set the title of the quiz in the H U D

function g4resultQ(){// function tha runs at the end of timer and on clicked but
  document.querySelector('.progress-bar').classList.add("paused");//get div of progressbar and paus the anim
  
  this.classList.add("bg__false-answer");// put red bg color on clicked but
  document.querySelector('#g4true').classList.remove("bg__false-answer");//remove red bg color if id is true
  document.querySelector('#g4true').classList.add("bg__true-answer");// put green bg color on good answer
  document.querySelector('#g4true').removeEventListener("click", g4score);//remove adding scor on click of good answer
  setTimeout(function(){g4randomQ()}, 2000);// call new Q? in 2sec

  var g4disabled=[];// create tab with buts
  for (var i = 0; i < 4; i++) {
    g4disabled.push(document.querySelectorAll('.g4myAnswers')[i]);
  }
  for (var i = 0; i < g4disabled.length; i++) {// i remove event on click of my buts
    g4disabled[i].removeEventListener("click", g4resultQ);
    g4disabled[i].classList.remove("btn_hover");// i remove the hover css class so I can see the bg color even if the mouse is on a but
  }

}


function g4score(){// add 1 to the points
  addPoints(1) ;
}


function g4gameOver(){// function called at end of game
    //clearTimeout(g4uptadeTime);// stop timer
    document.querySelector('#g4R1').innerHTML="";// clear the page
    document.querySelector('#g4R2').innerHTML="";
    document.querySelector('#g4R3').innerHTML="";
    document.querySelector('#g4R4').innerHTML="";
    document.querySelector('#g4QetT').style.display="none";// hide the progress bar
    document.querySelector('#g4form__submit').value="Next Game"; //change value of button
    document.querySelector('#g4form__submit').disabled=false;
    //var g4result=document.querySelector('.g4result');//show result page
    //g4result.style.display="block";
    document.querySelector('#g4form__submit').style.display="block";// show but
    document.querySelector('#g4form__submit').addEventListener("click",loadNextMiniGame);// add event on click to load next quiz
}

function g4randomQ(){// function called to generate new Q? and rep
  //g4Time=9;
  document.querySelector('.progress-bar').classList.remove("paused");// restart progressbar
  var g4ProgressBar=document.querySelector('.progress-bar');// put progressbar in var
  document.querySelector('.progress').innerHTML="";// clear progressbar
  var progress=document.querySelector('.progress');// get div that containt progressbar
  progress.appendChild(g4ProgressBar);// push in html progressbar
  if (g4qtab.length<1) {//test if I have questions left
    g4gameOver();
  }else {

    //reste time to 11 for new question
    //document.querySelector('.g4Rfield').innerHTML="";
    document.querySelector('#g4R1').innerHTML="";// clear page
    document.querySelector('#g4R2').innerHTML="";
    document.querySelector('#g4R3').innerHTML="";
    document.querySelector('#g4R4').innerHTML="";
    document.querySelector('#g4form__submit').disabled=true;// only one time usefull
    document.querySelector('#g4form__submit').style.display="none";// hide but
    var g4rdQ=Math.floor(Math.random()*g4qtab.length);//select a random nmb in tab length
    var g4Q = document.querySelector(".g4Qzone");//link a var with question zone div of html
    var g4Qcontainer=document.querySelector('#g4Qcontainer');
    g4Q.textContent=g4qtab[g4rdQ][0];//set the question of random tab in question tab
    g4Qcontainer.appendChild(g4Q);// show question on page
    g4qtab[g4rdQ].shift();//I supp the question in the random tab so I only have the answers left
    //var g4R = document.querySelector('.g4Rfield');// //link a var with answer zone div of html
    var g4R1 = document.querySelector('#g4R1');// get the div that will containt buts
    var g4R2 = document.querySelector('#g4R2');
    var g4R3 = document.querySelector('#g4R3');
    var g4R4 = document.querySelector('#g4R4');


    var g4tabRep=[];//create tab to put answer buttons

    for (var g4i = 0; g4i < g4qtab[g4rdQ].length; g4i++) {// create button whith answers and event onclick
      var g4reponse=document.createElement("button");
      var g4repText=document.createElement("p");
      g4repText.textContent=g4qtab[g4rdQ][g4i];
      g4reponse.appendChild(g4repText);
      if (g4i==0) {// index 0 is now the good answer caus i supp the question of the tab
        g4reponse.id="g4true";
        g4reponse.addEventListener('click',g4score);
      } else {
        g4reponse.className="g4false";
      }
      g4reponse.classList.add("btn_hover","bg-color__body", "p-4", "btn", "btn-lg", "col-12", "mt-2", "text-dark", "round", "g4myAnswers")//style of the buttons
      g4reponse.addEventListener('click',g4resultQ);
      //g4reponse.addEventListener("mouseover",g4textColor);
      //g4reponse.addEventListener('click',g4colorAnswer);
      g4tabRep.push(g4reponse);//add buttons in my new tab
    }

    g4tabRep.sort(function(a, b){return 0.5 - Math.random()});//sort my tab of buttons randomly
    //put buttons in answer zone
      g4R1.appendChild(g4tabRep[0]);
      g4R2.appendChild(g4tabRep[1]);
      g4R3.appendChild(g4tabRep[2]);
      g4R4.appendChild(g4tabRep[3]);


    //g4container.appendChild(g4R);// show answer zone in html
    g4qtab.splice(g4rdQ,1);// supp tab used so I wont get it randomly again
  }
}


g4randomQ();// call first Q? whill charging page
