var g18container = document.querySelector('#g18container');
var g18q1 =[
  "Quelle commande Lunix permet de compter le nombre de lignes d'un fichier?",//question en [0]
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
  "Quelle commande Lunix donne mon emplacement  dans lordinateur?",
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
  "Quelle commande  ajoute des travaux d'impression à la file d'attente?",
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
var g18Time=10;
//var g18uptadeTime;
//var g18result=document.querySelector('.g18result');
//g18result.style.display="none";

//var el=document.getElementById('progressBar').style.animationDuration=g18Time+"s";

setTimer(g18Time, g18resultQ);// call function tha set the time of the progress bar anim and the function that will be called at the end of the anim


resetGameTitle("QUIZZ COMMANDES LINUX");// i set the title of the quiz in the H U D

function g18resultQ(){// function tha runs at the end of timer and on clicked but
  document.querySelector('.progress-bar').classList.add("paused");//get div of progressbar and paus the anim
  //.disabled=true;
  //g18Time=g18Time+2;
  this.classList.add("bg__false-answer");// put red bg color on clicked but
  document.querySelector('#g18true').classList.remove("bg__false-answer");//remove red bg color if id is true
  document.querySelector('#g18true').classList.add("bg__true-answer");// put green bg color on good answer
  document.querySelector('#g18true').removeEventListener("click", g18score);//remove adding scor on click of good answer
  setTimeout(function(){g18randomQ()}, 2000);// call new Q? in 2sec

  var g18disabled=[];// create tab with buts
  for (var i = 0; i < 4; i++) {
    g18disabled.push(document.querySelectorAll('.g18myAnswers')[i]);
  }
  for (var i = 0; i < g18disabled.length; i++) {// i remove event on click of my buts
    g18disabled[i].removeEventListener("click", g18resultQ);
    g18disabled[i].classList.remove("btn_hover");// i remove the hover css class so I can see the bg color even if the mouse is on a but
  }

}


/*function g18resultPage(){// create result page
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
}*/

function g18score(){// add 1 to the points
  addPoints(1) ;
}

/*function g18Timer(){
  g18Time=g18Time-1;
  //document.getElementById('g18Time').value="temps restant : "+g18Time;
  g18uptadeTime=setTimeout(g18Timer, 1000);

  if (g18Time<1) {// end of timer reset time and charge new Q?
    g18Time=9;
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

}*/

function g18gameOver(){// function called at end of game
    //clearTimeout(g18uptadeTime);// stop timer
    document.querySelector('#g18R1').innerHTML="";// clear the page
    document.querySelector('#g18R2').innerHTML="";
    document.querySelector('#g18R3').innerHTML="";
    document.querySelector('#g18R4').innerHTML="";
    document.querySelector('#g18QetT').style.display="none";// hide the progress bar
    document.querySelector('#g18form__submit').value="Next Game"; //change value of button
    document.querySelector('#g18form__submit').disabled=false;
    //var g18result=document.querySelector('.g18result');//show result page
    //g18result.style.display="block";
    document.querySelector('#g18form__submit').style.display="block";// show but
    document.querySelector('#g18form__submit').addEventListener("click",loadNextMiniGame);// add event on click to load next quiz
}

function g18randomQ(){// function called to generate new Q? and rep
  //g18Time=9;
  document.querySelector('.progress-bar').classList.remove("paused");// restart progressbar
  var g18ProgressBar=document.querySelector('.progress-bar');// put progressbar in var
  document.querySelector('.progress').innerHTML="";// clear progressbar
  var progress=document.querySelector('.progress');// get div that containt progressbar
  progress.appendChild(g18ProgressBar);// push in html progressbar
  if (g18qtab.length<1) {//test if I have questions left
    g18gameOver();
  }else {

    //reste time to 11 for new question
    //document.querySelector('.g18Rfield').innerHTML="";
    document.querySelector('#g18R1').innerHTML="";// clear page
    document.querySelector('#g18R2').innerHTML="";
    document.querySelector('#g18R3').innerHTML="";
    document.querySelector('#g18R4').innerHTML="";
    document.querySelector('#g18form__submit').disabled=true;// only one time usefull
    document.querySelector('#g18form__submit').style.display="none";// hide but
    var g18rdQ=Math.floor(Math.random()*g18qtab.length);//select a random nmb in tab length
    var g18Q = document.querySelector(".g18Qzone");//link a var with question zone div of html
    var g18Qcontainer=document.querySelector('#g18Qcontainer');
    g18Q.textContent=g18qtab[g18rdQ][0];//set the question of random tab in question tab
    g18Qcontainer.appendChild(g18Q);// show question on page
    g18qtab[g18rdQ].shift();//I supp the question in the random tab so I only have the answers left
    //var g18R = document.querySelector('.g18Rfield');// //link a var with answer zone div of html
    var g18R1 = document.querySelector('#g18R1');// get the div that will containt buts
    var g18R2 = document.querySelector('#g18R2');
    var g18R3 = document.querySelector('#g18R3');
    var g18R4 = document.querySelector('#g18R4');


    var g18tabRep=[];//create tab to put answer buttons

    for (var g18i = 0; g18i < g18qtab[g18rdQ].length; g18i++) {// create button whith answers and event onclick
      var g18reponse=document.createElement("button");
      var g18repText=document.createElement("p");
      g18repText.textContent=g18qtab[g18rdQ][g18i];
      g18reponse.appendChild(g18repText);
      if (g18i==0) {// index 0 is now the good answer caus i supp the question of the tab
        g18reponse.id="g18true";
        g18reponse.addEventListener('click',g18score);
      } else {
        g18reponse.className="g18false";
      }
      g18reponse.classList.add("btn_hover","bg-color__body", "p-4", "btn", "btn-lg", "col-12", "mt-2", "text-dark", "round", "g18myAnswers")//style of the buttons
      g18reponse.addEventListener('click',g18resultQ);
      //g18reponse.addEventListener("mouseover",g18textColor);
      //g18reponse.addEventListener('click',g18colorAnswer);
      g18tabRep.push(g18reponse);//add buttons in my new tab
    }

    g18tabRep.sort(function(a, b){return 0.5 - Math.random()});//sort my tab of buttons randomly
    //put buttons in answer zone
      g18R1.appendChild(g18tabRep[0]);
      g18R2.appendChild(g18tabRep[1]);
      g18R3.appendChild(g18tabRep[2]);
      g18R4.appendChild(g18tabRep[3]);


    //g18container.appendChild(g18R);// show answer zone in html
    g18qtab.splice(g18rdQ,1);// supp tab used so I wont get it randomly again
  }
}


g18randomQ();// call first Q? whill charging page
