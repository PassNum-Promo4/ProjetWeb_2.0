/*
Author : Naimi Mohamed
*/
/*var g15rep=document.getElementsByName('rep');
var g15p=document.querySelector("#Principal");
var g15GLinter=[];
var g15true=0;
var g15index=0;
var g15timeleft = 0;
var g15Q1 = ["1) Comment créer un nouveau repository ?" , "git init", "git start", "git fetch" ,"git clone"];
var g15Q2 = ["2) Pour supprimer une branche, quelle est la commande utilisée ?" , "git branch -d [head]" , "git pull -r [head]" , "git branch -r [head]" , "git pull -d [head]]"];
var g15Q3 = ["3) A quoi sert 'git status' ?" , "Affiche les chemin qui n'ont pas de difference entre le fichier commit HEAD et l'index", "Affiche le chemin intiale" , "Affiche les chemins qui ont des différences entre le fichier d'index et le commit HEAD", "Affiche le dernier chemin"];
var g15Q4 = ["4) Comment visualiser l'historique de la branche tp2 ?" , "git status tp2" , "git show tp2" , "git log tp2" , "git status -m tp2"];
var g15Q5 = ["5) Quelle commande me permet d'annuler plusieurs commits ?" , "git reset --hard" , "git revert" , "git checkout" , "git reset"];
var g15Q6 = ["6) Je veux supprimer un fichier de mon historique de git, je dois :" , "Utiliser la commande git rm" , "Utiliser la commande rm de mon terminal" , "Utiliser la commande git remove" , "Je ne peux pas"];
var g15Q7 = ["7) Quelle commande exécuteriez-vous pour mettre en scène les changements dans le js/app.js fichier ?" , "git commit js / app.js" , "git ajouter js / app.js" , "git stage js / app.js" , "git commit js / app.js --to-staging-area"];
var g15Q8 = ["8) Quelle commande exécutez-vous pour afficher l'historique de validation de votre référentiel ?" ,"git log" ,  "git histoire"  , "git commit -h" , "git passé"];
var g15Q9 = ["9) Comment visualiser le contenu de mon prochain commit ?" , "git diff" , "git diff --staged" , "git commit -h" , "git passé"];
var g15Q10 = ["10) Complétez la phrase correctement. Une branche de git est ... ?" , " une référence à un seul commit" , "toujours stocké sur un serveur" , "une série de commits connexes" , " normalement stocké dans un dossier distinct sur le serveur"];
var g15GL = [g15Q1,g15Q2,g15Q3,g15Q4,g15Q5,g15Q6,g15Q7,g15Q8,g15Q9,g15Q10];
var scoreContainer = document.querySelector("#score");
var g15q1= document.querySelector('#question');
var g15downloadTimer=0;
var g15inter=0;
var g15timeleft=0;

function g15timer (){ //timer
  clearInterval(g15downloadTimer);
  g15timeleft = 9;
  g15downloadTimer = setInterval(function(){
    g15timeleft--;
    document.getElementById("timer").textContent = g15timeleft;
    if(g15timeleft === 0 ){
      g15randomanswer(g15timeleft == 9);
    }
  },1000);
}

g15timer();

function g15randomquestion(){
    clearInterval(g15downloadTimer);
  g15index=Math.floor(Math.random() * g15GL.length);
  console.log(g15GL.length);
  var g15rand = g15GL[g15index];

  document.querySelector("#question").textContent=g15rand[0];
  g15GL.splice(g15index,1);
  g15timer ();
  return g15rand;
}

function g15randomanswer(){

  g15GLinter = g15randomquestion();

  var g15reprand1 = Math.floor(Math.random()* 4);
  var g15reprand2 = Math.floor(Math.random()* 4);
  var g15reprand3 = Math.floor(Math.random()* 4);
  var g15reprand4 = Math.floor(Math.random()* 4);

  while (g15reprand1 == g15reprand2 || g15reprand1 == g15reprand3 || g15reprand1 == g15reprand4 || g15reprand2 == g15reprand3 || g15reprand2 == g15reprand4 || g15reprand3 == g15reprand4) {
    var i = 0;
    g15reprand1 = Math.floor(Math.random() * 4);
    g15reprand2 = Math.floor(Math.random() * 4);
    g15reprand3 = Math.floor(Math.random() * 4);
    g15reprand4 = Math.floor(Math.random() * 4);
    i++;
  }


  g15rep[g15reprand1].id ="gdrep";
  g15rep[g15reprand2].id ="bdrep1";
  g15rep[g15reprand3].id ="bdrep2";
  g15rep[g15reprand4].id ="bdrep3";

  g15resetclass();
  document.querySelector("#gdrep").innerHTML=g15GLinter[1];
  document.querySelector("#bdrep1").innerHTML=g15GLinter[2];
  document.querySelector("#bdrep2").innerHTML=g15GLinter[3];
  document.querySelector("#bdrep3").innerHTML=g15GLinter[4];

  document.querySelector("#gdrep").addEventListener("click", g15id);
  document.querySelector("#bdrep1").addEventListener("click", g15id);
  document.querySelector("#bdrep2").addEventListener("click", g15id);
  document.querySelector("#bdrep3").addEventListener("click", g15id);
}

g15randomanswer();

function g15id(){

  if (this.id == "gdrep") {
    g15true++;

    document.querySelector("#gdrep").classList.add("btn-success");
    document.querySelector("#g15result").innerHTML = " Your Scores : " + g15true ;


  } else if (this.id == "bdrep1" ) {

    document.querySelector("#bdrep1").classList.add("btn-danger");
    document.querySelector("#gdrep").classList.add("btn-success");


  } else if (this.id == "bdrep2" ) {

    document.getElementById("bdrep2").classList.add("btn-danger");
    document.getElementById("gdrep").classList.add("btn-success");

  }  else if(this.id == "bdrep3") {

    document.getElementById("bdrep3").classList.add("btn-danger");
    document.getElementById("gdrep").classList.add("btn-success");
  }

  g15timeleft = 10;
  g15inter = setTimeout(g15randomanswer, 1500);
}

g15id();

function g15resetclass(){
  document.querySelector("#gdrep").classList.remove("btn-success");
  document.querySelector("#gdrep").classList.remove("btn-danger");
  document.querySelector("#bdrep1").classList.remove("btn-success");
  document.querySelector("#bdrep1").classList.remove("btn-danger");
  document.querySelector("#bdrep2").classList.remove("btn-success");
  document.querySelector("#bdrep2").classList.remove("btn-danger");
  document.querySelector("#bdrep3").classList.remove("btn-success");
  document.querySelector("#bdrep3").classList.remove("btn-danger");

}

g15resetclass();


function g15classvisuel(){
  g15q1.className="font-weight-bold m-4";
  timer.className="m-2 d-inline";
  g15p.className="m-3";
  document.getElementById('4_bouton').className=" mr-4 ";
}
g15classvisuel();*/
loadNextMiniGame();
