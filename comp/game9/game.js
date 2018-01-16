/*
  Author :boukhemis dib
*/
/*global document*/
// ------------------------------------- Variables

var g9random = 1;
var j = 0;
var g9countdown;
var g9sec;
var g9element = document.querySelector(".g9qst");
var g9element1 = document.querySelectorAll(".g9qst1");
var g9timer = document.getElementById('timer');
var g9scors = document.getElementById('secores');
var g9scors1 = document.getElementById('secores1');
var choices = document.getElementsByName("options");
var g9btn1 = document.getElementById('btn1');
var g9btn2 = document.getElementById('btn2');
var g9btn3 = document.getElementById('btn3');
var g9btn4 = document.getElementById('btn4');
var g9question1 = ["Quand vous utilisez la balise TITLE, où est affiché le texte? ", "Le titre est affiché dans le haut des navigateurs. ", "Le titre est placé au début de chaque paragraphe.", "Le titre est placé au début de la page HTML.", "Toutes les réponses ci-dessus "];
var g9question2 = ["Quelle est la syntaxe pour déclarer l'encodage des caractères du document en UTF-8 ?", "< meta charset=utf-8 >", "< meta charset=text/html; UTF-8 >", "< meta encoding=text/html; charset=utf-8 >", "< meta encoding=text/html >"];
var g9question3 = ["Quelle nouvelle balise de section permet de regrouper un contenu tangentiel au contenu principal du document ?", "< aside >", "< section id=sidebar >", "< sidebar >", "< details >"];
var g9question4 = ["La nouvelle balise < time > permet de baliser une date structurée. Quelle serait sa syntaxe pour le 1er avril 2012 à 13h37 ?", "< time datetime=2012-04-01T13:37:00Z&gt;</ time >", "< time value=2012-04-01 13:37 ></ time >", "< time datetime=01/04/2012 13H37M00S&gt;</ time >", "< time 01/04/2012 13H37M00S > </ time >"];
var g9question5 = ["À partir de quelle version d'Internet Explorer peut-on utiliser nativement les éléments de section HTML5 (sans hack ou script complémentaire) ?", "Internet Explorer 9", "Internet Explorer 8", "Internet Explorer 10", "Internet Explorer 7"];
var g9question6 = ["Quelle est la méthode pour associer une légende complète à une illustration ?", "< figure > < img src=image.jpg > < figcaption > La légende...</ figcaption ></ figure >", "< figure src=image.jpg legend=#cap1 > </ figure >< figcaption id=cap1 > La légende...</ figcaption >", "< figure >< legend&gt;La légende...</ legend > < img src=image.jpg ></figure&gt;", "< figure > < img src=image.jpg ></ figure >"];
var g9question7 = ["Comment représenter une barre de progression à 50% d'avancement ?", "< progress value=50 max=100 > 50% </ progress >", "< input type=progress value=0.5 > 50% </ progress >", "< input type=progress value=50 max=100 title=50% />", "< input type=progress value=50 > 50% </ progress >"];
var g9question8 = ["Quelle balise doit permettre l inclusion de sous-titres textes dans les vidéos lues avec < video > ?", "< track src=soustitres.vtt >", "< subtitle source=soustitres.srt >", "< captions source=soustitres.srt >", "< soustitres source=soustitres.srt >"];
var g9question9 = ["L'attribut du tag A définissant l'URL d'un lien hypertexte est :", "href", "url", "location", "http"];
var g9question10 = ["Un meta-tag doit se placer", "Dans l'entête", "Dans le corps", "En-dehors du HTML", "dans l'entête et dans le corps "];
var g9question = [g9question1, g9question2, g9question3, g9question4, g9question5, g9question6, g9question7, g9question8, g9question9, g9question10];
var g9bonrep = [g9question1[1], g9question2[1], g9question3[1], g9question4[1], g9question5[1], g9question6[1], g9question7[1], g9question8[1], g9question9[1], g9question10[1]];
var g9layedQuestions = [];

function g9getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function g9startTimer() {
    g9sec = 06;
    g9countdown = setInterval(g9currentTime, 1000);
}

function g9resetTimer() {
    clearInterval(g9countdown);
    g9timer.innerHTML = "left time = 0:06";
    g9startTimer()
}

// ------------------------------------- Countdown Output
function g9currentTime() {
    switch (true) {
        case (g9sec < 07 && g9sec > 0):
            g9timer.innerHTML = 'left time = 0:0' + g9sec;
            break;
        case (g9sec === 0):
            g9timer.innerHTML = 'left time = 0:0' + g9sec;
            clearInterval(g9countdown);
            g9resetTimer()
            g9loadQuestion();
            break;
        default:
            g9timer.innerHTML = 0 + ':' + g9sec;
            break;
    }
    g9sec--;
}

/* function g9randomQuestion() {
    var g9currentQuestion = g9Table(g9question);
    while (g9layedQuestions.indexOf(g9currentQuestion) > -1) {          
        g9layedQuestions.push(g9currentQuestion);
        g9currentQuestion = g9question;
       
    }
   
 return g9currentQuestion;
    
} */
function g9randomQuestion() {

    while (g9random < 11) {
        var i = Math.floor(Math.random() * 10);
        if (g9layedQuestions.indexOf(i) === -1) {
            g9layedQuestions[g9random] = i;
            var g9currentQuestion = g9question[i];
           
            console.log(g9random);
             g9random = g9random + 1;
             //console.log(i);  
            return g9currentQuestion
              
                
        }
    
          
    }

}

/*function g9Table(table) {
    var g9rand = Math.floor(Math.random() * 9);
    return table[g9rand]
}*/

g9btn1.addEventListener("click", g9funScors);
g9btn2.addEventListener("click", g9funScors);
g9btn3.addEventListener("click", g9funScors);
g9btn4.addEventListener("click", g9funScors);

function g9funScors() {

    if (g9bonrep.indexOf(this.textContent) > -1) {
        j++;
        g9scors.innerHTML = "score  : " + j;
    }
    g9loadQuestion();
}

function g9loadQuestion() {

    var i = 0;
    var g9qstn = g9randomQuestion();
    var g9q = g9qstn[0];
    var g9ins1 = g9qstn[1];
    var g9ins2 = g9qstn[2];
    var g9ins3 = g9qstn[3];
    var g9ins4 = g9qstn[4];
    do {
        var g9numRand1 = g9getRndInteger(0, 3);
        var g9numRand2 = g9getRndInteger(0, 3);
        var g9numRand3 = g9getRndInteger(0, 3);
        var g9numRand4 = g9getRndInteger(0, 3);
        i = i + 1;
    } while (g9numRand1 == g9numRand2 | g9numRand1 == g9numRand3 | g9numRand1 == g9numRand4 | g9numRand2 == g9numRand3 | g9numRand2 == g9numRand4 | g9numRand3 == g9numRand4);
    g9element.innerHTML = g9q;
    g9element1[g9numRand1].innerHTML = g9ins1;
    g9element1[g9numRand2].innerHTML = g9ins2;
    g9element1[g9numRand3].innerHTML = g9ins3;
    g9element1[g9numRand4].innerHTML = g9ins4;

    g9resetTimer()
}

function g9start() {
    g9loadQuestion();
    g9resetTimer();
}

g9start();
