// author: Marine Cristol 
var time = 50;

var tableau = [];
	tableau[0] = ["Qu'es que le terminal", "une interface", "un logiciel", "site web", "application"];
	tableau[1] = ["A quoi sert le terminal?", "plus pratique", "ca change", "innovateur", "différent"];
	tableau[2] = ["Comment faire pour se déplacer dans un répertoire en ligne de commande ?", "cd", "cat", "touch", "mv"];
	tableau[3] = ["Comment afficher le chemin du répertoire?", "pwd", "mv", "cp", "cat"];
	tableau[4] = ["Comment créer un dossier en paramétre ? ", "mkdir", "cp", "touch", "rm"];
	tableau[5] = ["Comment déplacer un fichier/dossier dans un répertoire?", "mv", "cd", "mkdir", "rm"];
	tableau[6] = ["Comment afficher dans le terminal le contenu d'un ficher ? ", "cat", "touch", "ls", "mv"];
	tableau[7] = ["comment lister le contenu d'un répertoire ? ", "ls", "cd", "cp", "mv"];
	tableau[8] = ["comment afficher le manuel ?", "man", "cp", "rm", "cat"];
	tableau[9] = ["comment acquérir temporairement des droits des super-utilisateur?", "sudo", "cat", "touch", "ls"];

function g6Checker(event){
	if(event.target.attributes[3].nodeValue === "reponse right"){
		//addPoints()
	}

}

function g6randomAnswers(tab){
	var tabRandom = [];
	var intermediaire = Math.floor(Math.random() * 4)+1;

	tabRandom[0] = intermediaire;

	for(var i=1; i<4; i++){
		while(intermediaire === tabRandom[0] || intermediaire === tabRandom[1] || intermediaire === tabRandom[2] ||intermediaire === tabRandom[3]){
			intermediaire = Math.floor(Math.random() * 4)+1;
		}
		tabRandom[i] = intermediaire;
	}

	var htmlReponse = "";
	for(i=0; i<4; i++){
		if (tabRandom[i] === 1) {
			htmlReponse += "<li>"+tableau[tab][tabRandom[i]]+"<INPUT type='radio' name='question"+ tab +"' onclick='g6Checker(event)' class='reponse right' ></li>";
		}else{
			htmlReponse += "<li>"+tableau[tab][tabRandom[i]]+"<INPUT type='radio' name='question"+ tab +"'onclick='g6Checker(event)' class='reponse false' ></li>";

		}
	}
	return htmlReponse;

}


function g6randomQuestion(){
	var tabAleatoire =[];
	var interQuestion = Math.floor(Math.random() * 10);;

		tabAleatoire[0] = interQuestion;


	for(var i=1; i<10; i++){
		while(interQuestion === tabAleatoire[0] || interQuestion === tabAleatoire[1] || interQuestion === tabAleatoire[2] ||interQuestion === tabAleatoire[3] ||interQuestion === tabAleatoire[4] ||interQuestion === tabAleatoire[5] ||interQuestion === tabAleatoire[6] ||interQuestion === tabAleatoire[7] ||interQuestion === tabAleatoire[8] ||interQuestion === tabAleatoire[9]){
			interQuestion = Math.floor(Math.random() * 10);
		}
		tabAleatoire[i] = interQuestion;
	}

	var htmlQuestion = "";
	for(i=0; i<10; i++){
		htmlQuestion += "<div class='randomQuestion' id='Q"+i+"'>"+tableau[tabAleatoire[i]][0]+"</div><ul>"+g6randomAnswers(tabAleatoire[i])+"</ul>"; 
		}
	
	return htmlQuestion;
}



function g6GenerateQuizz(){
	document.getElementById('quizz').innerHTML= "Timer/seconde: <div id='timer'></div>Score:<div id='score'></div>"+g6randomQuestion();
	var monInterval=window.setInterval(function(){g6Timer(monInterval)},1000);
	loadNextMiniGame();

}

function g6Timer(monInterval){
	
	if (time <= 0) {
	g6StopTimer(monInterval);
	}
	else{
		time -= 1; 
	document.getElementById('timer').innerHTML=time;
}	
}


function g6StopTimer(stop){
	window.clearInterval(stop);
	var tabradio = document.getElementsByClassName('reponse');
	for(var i=0;i<tabradio.length;i++){
		tabradio[i].disabled=true;
	}
	addPoints();
}
function addPoints(){
	var score = 0;
	var point = document.getElementsByClassName('reponse');
	for(var i=0;i<point.length;i++){
		if ( point[i].checked===true && point[i].getAttribute("class") === "reponse right"){
			score ++;
		}
	}
	document.getElementById('score').innerHTML=score;

}






