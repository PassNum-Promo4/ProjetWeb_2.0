// author: Marine Cristol 
var g6time = 50;

var g6tableau = [];
	g6tableau[0] = ["Qu’es que MySql?", "un logiciel", "une interface", "site web", "application"];
	g6tableau[1] = ["Qu’es qu’une base de donnée ? ", "collection de données", "logiciel ", "application", "system"];
	g6tableau[2] = ["Comment créer une base de données ?", "created", "show", "use", "select"];
	g6tableau[3] = ["Comment supprimé une table ?", "drop", "show", "select", "use"];
	g6tableau[4] = ["Comment lister une base de données ?", "show", "drop", "created", "select"];
	g6tableau[5] = ["Comment spécifier avec quelle base de donnée on veut intéragir?", "use", "select", "describe", "alter"];
	g6tableau[6] = ["Comment afficher la structure d’une table ? ", "describe", "alter", "truncate", "use"];
	g6tableau[7] = ["Comment renommer une table? ", "alter", "drop", "created", "show"];
	g6tableau[8] = ["Comment vider une table ? ", "truncate", "use", "drop", "show"];
	g6tableau[9] = ["Comment sélectionner une table ?", "select", "truncate", "describe", "use"];

function g6Checker(event){
	if(event.target.attributes[3].nodeValue === "reponse right"){
		//addPoints()
	}

}

	
function g6randomAnswers(tab){
	var g6intermediaire = Math.floor(Math.random() * 4)+1;
	var g6tabRandom = [];
	g6tabRandom[0] = g6intermediaire;

	for(var g6i=1; g6i<4; g6i++){
		while(g6intermediaire === g6tabRandom[0] || g6intermediaire === g6tabRandom[1] || g6intermediaire === g6tabRandom[2] ||g6intermediaire === g6tabRandom[3]){
			g6intermediaire = Math.floor(Math.random() * 4)+1;
		}
		g6tabRandom[g6i] = g6intermediaire;
	}

	var g6htmlReponse = "";
	for(g6i=0; g6i<4; g6i++){
		if (g6tabRandom[g6i] === 1) {
			g6htmlReponse += "<li>"+g6tableau[tab][g6tabRandom[g6i]]+"<INPUT type='radio' name='question"+ tab +"' onclick='g6Checker(event)' class='reponse right' ></li>";
		}else{
			g6htmlReponse += "<li>"+g6tableau[tab][g6tabRandom[g6i]]+"<INPUT type='radio' name='question"+ tab +"'onclick='g6Checker(event)' class='reponse false' ></li>";

		}
	}
	return g6htmlReponse;

}


function g6randomQuestion(){
	var g6tabAleatoire =[];
	var g6interQuestion = Math.floor(Math.random() * 10);;

		g6tabAleatoire[0] = g6interQuestion;


	for(var g6i=1; g6i<10; g6i++){
		while(g6interQuestion === g6tabAleatoire[0] || g6interQuestion === g6tabAleatoire[1] || g6interQuestion === g6tabAleatoire[2] ||g6interQuestion === g6tabAleatoire[3] ||g6interQuestion === g6tabAleatoire[4] ||g6interQuestion === g6tabAleatoire[5] ||g6interQuestion === g6tabAleatoire[6] ||g6interQuestion === g6tabAleatoire[7] ||g6interQuestion === g6tabAleatoire[8] ||g6interQuestion === g6tabAleatoire[9]){
			g6interQuestion = Math.floor(Math.random() * 10);
		}
		g6tabAleatoire[g6i] = g6interQuestion;
	}

	var g6htmlQuestion = "";
	for(g6i=0; g6i<10; g6i++){
		g6htmlQuestion += "<div class='randomQuestion' id='Q"+g6i+"'>"+g6tableau[g6tabAleatoire[g6i]][0]+"</div><ul>"+g6randomAnswers(g6tabAleatoire[g6i])+"</ul>"; 
		}
	
	return g6htmlQuestion;
}



function g6GenerateQuizz(){
	document.getElementById('quizz').innerHTML= "Timer/seconde: <div id='timer'></div>Score:<div id='score'></div>"+g6randomQuestion();
	var g6monInterval=window.setInterval(function(){g6Timer(g6monInterval)},1000);
	loadNextMiniGame();

}

function g6Timer(monInterval){
	
	if (g6time <= 0) {
	g6StopTimer(monInterval);
	}
	else{
		g6time -= 1; 
	document.getElementById('timer').innerHTML=g6time;
}	
}


function g6StopTimer(stop){
	window.clearInterval(stop);
	var g6tabradio = document.getElementsByClassName('reponse');
	for(var g6i=0;g6i<g6tabradio.length;g6i++){
		g6tabradio[g6i].disabled=true;
	}
	addPoints();
}
function addPoints(){
	var g6score = 0;
	var g6point = document.getElementsByClassName('reponse');
	for(var g6i=0;g6i<g6point.length;g6i++){
		if ( g6point[g6i].checked===true && g6point[g6i].getAttribute("class") === "reponse right"){
			g6score ++;
		}
	}
	document.getElementById('score').innerHTML=g6score;

}






