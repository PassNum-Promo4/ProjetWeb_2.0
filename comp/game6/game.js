/*var g6quizz=document.querySelector('#quizz');

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

var g6time=11;
var g6updateTime;
function g6score(){
	addPoints(1);//fait appel a la fonction addpoint() qui calcul le score
}

function g6color(){
	this.style.backgroundColor="red";//mets les boutons en rouge
	document.getElementById('goodAnswer').style.backgroundColor="green";// Le bouton sera rouge
	//pour le bouton avec id bonne réponse
	setTimeout(function(){g6randomQuestion()},2000);//appel la fonction des questions aléatoires 
}

function g6timer(){
	g6time =g6time-1;
	document.querySelector('#timer').value="temps restant:"+g6time;
	g6updateTime=setTimeout(function(){g6timer()},1000);
	if (g6time<1) {
		g6time = 11;
		g6randomQuestion();
	}
}

function gameOver(){
	clearTimeout(g6updateTime);//arrete le timer
	document.querySelector('#question').innerHTML="";
	document.querySelector('#reponse').innerHTML="";
	setTimeout(function(){loadNextMiniGame()}, 5000);
}

function g6randomQuestion(){
	if (g6tableau.length < 1) {
		gameOver();
	}else{

	g6time=11;
	document.querySelector('#question').innerHTML="";
	document.querySelector('#reponse').innerHTML="";
	var g6randomQ = Math.floor(Math.random()* g6tableau.length);//parcours tableau
	var g6question = document.querySelector('#question');//précise dans la div
	g6question.textContent=g6tableau[g6randomQ][0];//met la question avec l'indice aléatoire
	g6quizz.appendChild(g6question);//met dans le html
	g6tableau[g6randomQ].shift();//supprime la question

	var g6reponse = document.querySelector('#reponse');//précise dans la div
	var g6tabRep =[];// creation d'un nouveau tableau pour pouvoir mettre les boutons 

	for (var i = 0; i < g6tableau[g6randomQ].length; i++) {
		var g6bouton = document.createElement('button');
		g6bouton.textContent=g6tableau[g6randomQ][i];
		if (i===0) {
			g6bouton.id="goodAnswer";// creation du bouton avec id bonne reponse
			g6bouton.addEventListener("click", g6score);
		}else{
			g6bouton.classList.add("wrongAnswers");
		}
		g6bouton.addEventListener("click", g6color);
		g6tabRep.push(g6bouton);

	}
	g6tabRep.sort(function(a, b){return 0.5 - Math.random()});//reponse aléatoire
	for (var i = 0; i < g6tabRep.length; i++) {
		g6reponse.appendChild(g6tabRep[i]);
	}
	g6quizz.appendChild(g6reponse);
	g6tableau.splice(g6randomQ,1);//supprime le tableau
    }
}




g6timer();
g6randomQuestion();*/
loadNextMiniGame();
// bug sur le addpoint .

