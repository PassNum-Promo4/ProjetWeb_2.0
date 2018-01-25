let miniGamesCount;
let score;
let startButton;
let gameInfoDOMelement;
let currentScoreDOMelement;
let contentDOMelement;
let hudDOMelement;
let homepageDOMelement;
let miniGameCounter;
let miniGameCounterDOMelement;
let miniGamesURLArray;

let miniGamesGitHubAccountDOMelement;
let miniGamesTotalDOMelement;

function resetGameTitle(title){
  document.querySelector('#themeGame').textContent=title;
}

function setTimer(time, funcInt){
  document.getElementById('progressBar').style.animationDuration=time+"s";
  document.getElementById('progressBar').addEventListener("animationend", funcInt, false);

}

document.addEventListener("DOMContentLoaded", function(event) {
  //Store DOM elements :
  contentDOMelement = document.getElementById('content');
  hudDOMelement = document.getElementById("hud");

  //Initialize new game :
  initializeNewGame();
});

//Load randomly next game :
function loadNextMiniGame(){
  if(miniGameCounter < miniGamesCount){
    //Play new mini-game :
    //Get a random mini-game URL :
    let max = Math.floor(miniGamesURLArray.length);
    let rand = Math.floor(Math.random() * max);
    let gameName = miniGamesURLArray[rand];
    let source = "comp/"+ gameName;
    //Remove this mini-game :
    miniGamesURLArray.splice(rand, 1);
    //Load HTML :
    loadComp(source + "/game.html", contentDOMelement, function(){
      //Load JS script :
      let script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = source + "/game.js";
      document.getElementsByTagName('head')[0].appendChild(script);
    });

    //Load Author Name
    let gitHubAccount = "https://github.com/" + gameAccount[gameName].split("@")[1];



    //Update HUD :
    miniGameCounter ++;
    miniGameCounterDOMelement.innerHTML = miniGameCounter.toString();
    miniGamesGitHubAccountDOMelement.innerHTML = gameAccount[gameName];
    miniGamesGitHubAccountDOMelement.setAttribute("href",gitHubAccount);
    miniGamesTotalDOMelement.innerHTML = "/ "+ Object.keys(gameAccount).length;

  } else {
    //Show result when game is over :
    gameOver();
  }
}

//Show result when game is over :
function gameOver(){
  //Load results comp :
  loadComp("comp/results/results.html", contentDOMelement, function(){
    //Hide HUD :
    hudDOMelement.classList.add("sr-only");
    //Show final score :
    document.getElementById('finalScore').innerHTML = "Bravo, votre score est de : " + score.toString();
  });
}

//Start new game :
function startNewGame(){
  //Initialize mini-game counter :
  miniGameCounter = 0;
  //Hide home :
  homepageDOMelement.classList.add("sr-only");
  //Load HUD :
  loadComp("comp/hud/hud.html", hudDOMelement, function(){
    //Store DOM elements :
    currentScoreDOMelement = document.getElementById('currentScore');
    miniGameCounterDOMelement = document.getElementById('miniGameCounter');
    miniGamesGitHubAccountDOMelement = document.getElementById('miniGameGitHubAccount');
    miniGamesTotalDOMelement = document.getElementById('miniGamesTotal');
    //Update score display :
    currentScoreDOMelement.innerHTML = score.toString();
    //Load randomly a minigame :
    loadNextMiniGame();
  });

}

//Prepare a new game :
function initializeNewGame(){
  //Initialize score :
  score = 0;
  //Display home :
  loadComp("comp/home/home.html", contentDOMelement, function(){
    //Store DOM elements :
    homepageDOMelement = document.getElementById("homepage");
    startButton = document.getElementById('startButton');
    //Listener new game button :
    startButton.addEventListener('click', function(){
      startNewGame();
    }, false);
  });
  //Initialize games array :
  miniGamesURLArray = new Array("game1",
  "game2",
  "game3",
  "game4",
  "game5",
  "game6",
  "game7",
  "game8",
  "game9",
  "game10",
  "game11",
  "game12",
  "game13",
  //"game14",
  "game15",
  "game16",
  "game17",
  "game18",
  "game19",
  "game20",
  "game21",
  "game22",
  "game23");

  miniGamesCount = miniGamesURLArray.length;
}

//Add points :
function addPoints(points){
  //Update score :
  score += points;
  //Update the score's display :
  currentScoreDOMelement.innerHTML = score.toString();
}

//Load content randomly :
function loadComp(source, target, callback) {
  let xhttp = new XMLHttpRequest();
  xhttp.open("GET", source, true);
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      target.innerHTML = this.responseText;
      callback();
    }
  };
  xhttp.send();
}


//Correspondance Game / github account :
const gameAccount = {
  game1:"@mohamedammi",
  game2:"@bilelamraoui",
  game3:"@LazareBoukenouche",
  game4:"@MickaelCaparos",
  game5:"@JulieCervera",
  game6:"@maariinec",
  game7:"@faycal13",
  game8:"@AniDedej",
  game9:"@boukhemis11",
  game10:"@gavariniKevin",
  game11:"@Mkrtich13",
  game12:"@eJanuel",
  game13:"@amcossu",
  //game14
  game15:"Mohameed55",
  game16:"@o-thomas",
  game17:"@kirperov",
  game18:"@thibaultrousset",
  game19:"@FlorianSanchez",
  game20:"@LS-777",
  game21:"@SymaaG",
  game22:"@rverona",
  game23:"@goowlart"
};
