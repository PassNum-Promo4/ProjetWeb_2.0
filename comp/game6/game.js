var g6quizz=document.querySelector('#quizz');

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
	addPoint(1);//fait appel a la fonction addpoint() qui calcul le score
}

function g6color(){
	document.querySelector('.progress-bar').classList.add("paused");//get div of progressbar and paus the anim
	this.classList.add("bg__false-answer");//mets les boutons en rouge
	document.getElementById('goodAnswer').classList.add("bg__true-answer");// Le bouton sera rouge
	//pour le bouton avec id bonne réponse
	setTimeout(function(){g6randomQuestion()},2000);//appel la fonction des questions aléatoires 
}

setTimer(g6time, g6color);
/*function g6timer(){
	g6time =g6time-1;
	document.querySelector('#timer').value="temps restant:"+g6time;
	g6updateTime=setTimeout(function(){g6timer()},1000);
	if (g6time<1) {
		g6time = 11;
		console.log(g6time);
		g6randomQuestion();
	}
}*/

function gameOver(){
	clearTimeout(g6updateTime);//arrete le timer
	document.querySelector('#question').innerHTML="";
	document.querySelector('#reponse1').innerHTML="";
	document.querySelector('#reponse2').innerHTML="";
	document.querySelector('#reponse3').innerHTML="";
	document.querySelector('#reponse4').innerHTML="";
	setTimeout(function(){loadNextMiniGame()}, 5000);
}

function g6randomQuestion(){
document.querySelector('.progress-bar').classList.remove("paused");//get div of progressbar and paus the anim
 var g6ProgressBar=document.querySelector('.progress-bar');// put progressbar in var
 document.querySelector('.progress').innerHTML="";// clear progressbar
 var g6progress=document.querySelector('.progress');// get div that containt progressbar
 g6progress.appendChild(g6ProgressBar);// push in html progressbar
	if (g6tableau.length < 1) {
		gameOver();
	}else{
	g6time=11;
	document.querySelector('#question').innerHTML="";
	document.querySelector('#reponse1').innerHTML="";
	document.querySelector('#reponse2').innerHTML="";
	document.querySelector('#reponse3').innerHTML="";
	document.querySelector('#reponse4').innerHTML="";

	var g6randomQ = Math.floor(Math.random()* g6tableau.length);//parcours tableau
	var g6question = document.querySelector('#question');//précise dans la div
	var g6q = document.querySelector('#emplQ');
	g6question.textContent=g6tableau[g6randomQ][0];//met la question avec l'indice aléatoire
    g6q.appendChild(g6question);//met dans le html
	g6tableau[g6randomQ].shift();//supprime la question

	var g6reponse1=document.querySelector('#reponse1');
	var g6reponse2=document.querySelector('#reponse2');
	var g6reponse3=document.querySelector('#reponse3');
	var g6reponse4=document.querySelector('#reponse4');
	var g6tabRep =[];// creation d'un nouveau tableau pour pouvoir mettre les boutons 

	for (var i=0; i<g6tableau[g6randomQ].length; i++) {
		var g6bouton=document.createElement('button');//creation bouton 
		var g6p = document.createElement('p');
		g6bouton.appendChild(g6p);
		g6p.textContent=g6tableau[g6randomQ][i];
		if (i===0) {
			g6bouton.id="goodAnswer";//bouton avec id bonne reponse	
			g6bouton.addEventListener("click", g6score);
		}
		g6bouton.classList.add("btn_hover", "bg-color__body", "p-4", "btn", "btn-lg", "col-12", "mt-2", "text-dark", "round");
		g6bouton.addEventListener("click", g6color);
		g6tabRep.push(g6bouton);
	}
	g6tabRep.sort(function(a, b){return 0.5 - Math.random()});//reponse aléatoire

	g6reponse1.appendChild(g6tabRep[0]);
	g6reponse2.appendChild(g6tabRep[1]);
	g6reponse3.appendChild(g6tabRep[2]);
	g6reponse4.appendChild(g6tabRep[3]);

	g6tableau.splice(g6randomQ,1);//supprime le tableau
    }
}



//resetGameTitle("base de donnée");

g6randomQuestion();