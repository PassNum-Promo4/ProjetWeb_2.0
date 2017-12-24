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
    let source = miniGamesURLArray[rand];
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
    //Update HUD :
    miniGameCounter ++;
    miniGameCounterDOMelement.innerHTML = miniGameCounter.toString();
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
  miniGamesURLArray = new Array("comp/game1",
  "comp/game2",
  "comp/game3",
  "comp/game4",
  "comp/game5",
  "comp/game6",
  "comp/game7",
  "comp/game8",
  "comp/game9",
  "comp/game10",
  "comp/game11",
  "comp/game12",
  "comp/game13",
  "comp/game14",
  "comp/game15",
  "comp/game16",
  "comp/game17",
  "comp/game18",
  "comp/game19",
  "comp/game20",
  "comp/game21",
  "comp/game22",
  "comp/game23");

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
