/*
Author :OLIVER thomas
*/


/* tout mes sous tableau*/
let g16reponseQuestion1 = ["bootstrap est :","un framework css", "un language de programation","un logiciel","un client mail "];
let g16reponseQuestion2 = ["quelle classe permet de colorier un bouton en bleu ?",".text-primary",".text-blue",".text-orange",".text-warning"];
let g16reponseQuestion3 = ["Quel prefixe doit-on utiliser pour gerer l’affichage sur un ecran de 998px de large ?",".col-xl-",".col-lg-",".col-mad-",".col-sm-"];
let g16reponseQuestion4 = ["Quel prefixe doit-on utiliser pour gérer l’affichage sur un écran de 600px de large ?",".col-md-",".col-sm-",".col-xd-",".col-ld-"];
let g16reponseQuestion5 = ["Quelle classe permet de declarer un systeme de colonnes ?",".row",".text-succes",".bg",".col"];
let g16reponseQuestion6 = [ "quelle classe permet de colorier un bouton en rouge ?",".text-danger",".text-rouge",".text-red",".text-warning"];
let g16reponseQuestion7 = ["quelle classe permet de colorier un bouton en vert",".text-success",".text-rouge",".text-green",".text-warning"];
let g16reponseQuestion8 = ["A quoi sert la classe .col-*-offset-*","ignoré des colonnes","colorier un element en noir","a rien","a ignoré une classe existante"];
let g16reponseQuestion9 = ["Qui a developper bootstrap ?","twitter","facebook","passerelle-numerique","lafarge"];
let g16reponseQuestion10 = ["bootstrap utilise un systeme :","de grid","de ligne","de base de donnée","informatique"];

/*mon tableau principale*/
let g16TabPrincipal = [g16reponseQuestion1, g16reponseQuestion2, g16reponseQuestion3, g16reponseQuestion4, g16reponseQuestion5, g16reponseQuestion6, g16reponseQuestion7, g16reponseQuestion8, g16reponseQuestion9, g16reponseQuestion10];

/* tableau intermediaire bonne reponse*/
let g16TabInter = [g16reponseQuestion1[1],g16reponseQuestion2[1],g16reponseQuestion3[1],g16reponseQuestion4[1],g16reponseQuestion5[1],g16reponseQuestion6[1],g16reponseQuestion7[1],g16reponseQuestion8[1],g16reponseQuestion9[1],g16reponseQuestion10[1]];

let cont = document.getElementById('formulaire');
let points = 0;
let g16Temps = 8;
let g16TempsMaj ="";
let g16BonneReponse = document.createElement('div');
let g16MauvaiseReponse = document.createElement('div');
function g16getRandomQA() {
  document.getElementById("enjoy").innerHTML="";


    /*affichaage des question*/
    g16Timer();
    let g16randomValue = Math.round(Math.random() * g16TabPrincipal.length -1);
    if (g16randomValue < 0){
      g16randomValue = 0;
    }

    let g16randomValue3 = Math.round(Math.random() * g16TabPrincipal[g16randomValue].length -1);
    document.getElementById("question").innerHTML=g16TabPrincipal[g16randomValue][0];
    g16TabPrincipal[g16randomValue].splice(0,1);
    /*affichage reponse*/
    let g16longueurtab =g16TabPrincipal[g16randomValue].length;
    let g16i = 0;
    while(g16i < 4){
      let g16randomValue2 = Math.round(Math.random() * g16TabPrincipal[g16randomValue].length -1);
      if (g16randomValue2 < 0){
        g16randomValue2 = 0;
      }
      g16longueurtab = g16TabPrincipal[g16randomValue].length;
      if(g16TabInter.includes(g16TabPrincipal[g16randomValue][g16randomValue2])){
         g16BonneReponse = document.createElement('div');
        cont.appendChild(g16BonneReponse);
        g16BonneReponse.innerHTML=g16TabPrincipal[g16randomValue][g16randomValue2];
        g16BonneReponse.addEventListener('click', again);

        g16BonneReponse.classList.add("btn","btn-secondary","col-lg-5","m-2");
        g16BonneReponse.id="bonne";
        g16TabPrincipal[g16randomValue].splice(0,1);
      }else{
         g16MauvaiseReponse = document.createElement('div');
        cont.appendChild(g16MauvaiseReponse);
        g16MauvaiseReponse.innerHTML=g16TabPrincipal[g16randomValue][g16randomValue2];
        g16MauvaiseReponse.id="mauvaise";
        g16MauvaiseReponse.classList.add("btn","btn-secondary","col-lg-5","m-2");
        g16MauvaiseReponse.addEventListener('click',loose);
        g16TabPrincipal[g16randomValue].splice(g16randomValue2,1);
      }
      g16i++;
    }

    g16TabPrincipal.splice(g16randomValue,1)

}
function g16Timer() {
  g16Temps = g16Temps - 1;
  document.getElementById("temps").innerHTML = "Temps restant : " + g16Temps.toString();
  g16TimerUpdate = setTimeout(function () {
    g16Timer();
  }, 1000);
  if(g16Temps === 0){
    g16BonneReponse.removeEventListener('click',again);
    g16MauvaiseReponse.removeEventListener('click',loose);
    g16resetTemps();
    g16reset();
    g16getRandomQA();
  }
}
function g16resetTemps(){
  clearTimeout(g16TimerUpdate);
  g16Temps = 9;
}
function g16reset(){
  cont.innerHTML="";
}
function g16endGame(){
  addPoints(points);
  loadNextMiniGame();
}
if(g16Temps == 0){
  g16getRandomQA();
  g16resetTemps();
}
function again() {
  points++;
  this.classList.add("btn","btn-success");
  window.setTimeout(function (){
    g16reset();
    if(g16TabPrincipal.length === 0){
      g16endGame();}
    g16getRandomQA();

    g16resetTemps();
    document.getElementById("point").innerHTML="points: " + points.toString();
  },1000);
}
function loose(){

  this.classList.add("btn","btn-danger");
  window.setTimeout(function (){
    g16reset();
    g16resetTemps();
    if(g16TabPrincipal.length === 0){
      g16endGame();
    }
    g16getRandomQA();
  },1000);
};
