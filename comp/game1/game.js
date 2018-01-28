/*
  Author : AMMIMOUSSA
*/

var i =0;
var j =0;
var s =0;
var g1bnrsp;
var g1Timer = document.querySelector("#time");
var g1Score = document.querySelector("#score");
var g1Qst = document.querySelector("#qst");

var g1qst1 = document.querySelectorAll(".g1qst1");
var g1sp1 = document.querySelector("#g1ans1");
var g1sp2 =  document.querySelector("#g1ans2");
var g1sp3 =  document.querySelector("#g1ans3");
var g1sp4 =  document.querySelector("#g1ans4");




var g1Qst1=["quelles sont les deux operations faites par un pull?","fetch+checkout","checkout+merge","fetch+merge", "push+merge"];
var g1Qst2=["quel est la commande git pour télécharger un répertoire github sur son ordi?", "git clone", "git push", "git commit", "git fork"];
var g1Qst3 =["comment vérifier l'état du répertoire local depuis le dérnier commit?", "git check", "git status", "git diff", "git log"];
var g1Qst4 =["comment préparer les fichiers pour un commit?", "git add", "git stage", "git reset", "git commit"];
var g1Qst5 =["comment ajouter un message à un commit?", "git commit -m \"i'm coding\"", "git message \"i'm coding\"", "git add \"i'm coding\"", "git commit \"i'm coding\""];
var g1Qst6 =["quel commande pour montrer l'historique des versions pour la branche courante?", " git log", "git show", "git diff", "git ."];
var g1Qst7 =["quel commande pour se mettre sur une branche?", "git checkout nom_branch", "git branch", "git merge nom_branch", "git branch nom_branch"];
var g1Qst8 =["quel est la branche de dépot distante par défaut ?", "master", "origin", "maBranche", "autre"];
var g1Qst9 =["comment récuperer la version finale sur le dépôt local?", "git pull ", "git commit", "git push", "git checkout"];
var g1Qst10 =["quel commande pour annuler un commit en gardant les modifications localement?", "git reset [commit]", "git rm [commit]", "git mv [commit]", "git rm [fichier]" ];

var g1BnRps =[g1Qst1[1], g1Qst2[1], g1Qst3[1], g1Qst4[1], g1Qst5[1], g1Qst6[1], g1Qst7[1], g1Qst8[1], g1Qst9[1], g1Qst10[1]];

var g1Qstions =[g1Qst1, g1Qst2, g1Qst3, g1Qst4, g1Qst5, g1Qst6, g1Qst7, g1Qst8, g1Qst9, g1Qst10];


var g1CCOUNT = 8;
var g1t, g1count;




function g1randomTable(tab){
    var g1tabQst =[];
    var g1q = Math.floor(Math.random()*tab.length);
    g1tabQst = tab[g1q];
   
    tab.splice(g1q, 1);

    return g1tabQst;
    
}



    
    function g1cddisplay() {
        // displays time in div
        g1Timer.textContent = 'Time before next question :'+ g1count+' s';
    };
    
    function g1countdown() {
        // starts countdown
        g1cddisplay();
        if (g1count == 0) {
            g1getQuestion();
        } else {
            g1count--;
            g1t = setTimeout("g1countdown()", 1000);
        }
    };
 
    
    function g1cdreset() {
        // resets countdown
        clearTimeout(g1t);
        g1count = g1CCOUNT;
        g1cddisplay();
        g1countdown();
    };


function g1gameOver(){
    loadNextMiniGame();
}


function g1getQuestion(){
    i++;
    if (i > 10){
        clearTimeout(g1t);
        g1gameOver();
        
    }
    else{
        g1cdreset();
        
    g1sp1.classList.remove("bg-success", "bg-danger");
    g1sp2.classList.remove("bg-success", "bg-danger");
    g1sp3.classList.remove("bg-success", "bg-danger");
    g1sp4.classList.remove("bg-success", "bg-danger");
    var g1qstn = g1randomTable(g1Qstions);
    
  
    
    
    var g1q = g1qstn[0];
    g1bnrsp = g1qstn[1];
    g1Qst.textContent = g1q;
    g1qstn.splice(0, 1);
    
    for(var j=0; j<4; j++){
        var g1rsp = g1randomTable(g1qstn);
        g1qst1[j].textContent = g1rsp;
    }
    
        
    }
 
}


  var g1cl1 = g1sp1.addEventListener("click", g1setScore);
  var g1cl2 = g1sp2.addEventListener("click", g1setScore);
  var g1cl3 = g1sp3.addEventListener("click", g1setScore);
  var g1cl4 = g1sp4.addEventListener("click", g1setScore);

function g1setScore(){
    if (g1BnRps.indexOf(this.textContent) > -1){
   
        s++;
        g1Score.textContent = 'your score is '+s ;
        addPoints(1);
    }
    g1goodAnswer();
    setTimeout("g1getQuestion()", 500);
    
}

function g1goodAnswer(){
    if (g1BnRps.indexOf(g1sp1.textContent) > -1)
        g1sp1.classList.add("bg-success");
    else
        g1sp1.classList.add("bg-danger");
    if (g1BnRps.indexOf(g1sp2.textContent) > -1)
        g1sp2.classList.add("bg-success");
    else    
        g1sp2.classList.add("bg-danger");
    if (g1BnRps.indexOf(g1sp3.textContent) > -1)
       g1sp3.classList.add("bg-success"); 
    else    
        g1sp3.classList.add("bg-danger");
    if (g1BnRps.indexOf(g1sp4.textContent) > -1)
        g1sp4.classList.add("bg-success");
    else
        g1sp4.classList.add("bg-danger");
}




function g1loadGame(){

g1getQuestion();

}

g1loadGame();

