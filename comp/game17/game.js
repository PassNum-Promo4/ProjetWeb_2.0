/*
  Author : Kirill Petrov 
*/


var g17countQuest = 0;
var g17plus = 0;
var g17test_start = 0;
var g17curent_url = document.URL;
document.write("<a id='g17end' style='display: none;' class='myButton btn btn-success' href='" + g17curent_url + "'>Récommencer</a>");


//Timer 
function g17timer() {
    var g17obj = document.getElementById('g17timer_inp');
    g17obj.innerHTML--;

    if (g17obj.innerHTML == 0) {
        alert('temps écoulé');
        setTimeout(function () {}, 1000);
    } else {
        setTimeout(g17timer, 1000);
    }
}

function check(g17num) {



    if (g17num == 10) {

        document.getElementById('g17area').style.display = 'block';
        document.getElementById('g17start').style.display = 'none';
        document.getElementById('g17end').style.display = 'inline';
        document.getElementById('g17score').innerHTML = g17plus;

        if (g17test_start == 0) {

            setTimeout(g17timer, 1000);

            //Les questions
            var g17questions = ["Quelle class permet de cacher un élément uniquement sur un écran dont la largeur est inférieure à 768px ?", "Quel attribut sert à ajouter le contenu du titre d’une popover ?", "Quelle class doit-être ajoutée pour colorier un rang sur deux dans un tableau ?", "Quelle class permet de déclarer un système de colonnes ?", "Quelle class permet de positionner un élément sur 8 colonnes sur un écran dont la largeur est de 650px ?", "Quelle class permet de coloriser un bouton en bleu ciel ?", "Quelle balise permet de mettre un texte en surbrillance ?", "Quel préfixe doit-on utiliser pour gérer l’affichage sur un écran de 998px de large ?", "Qu’est-ce que Bootstrap ?", "Lequel des styles de bootstrap suivants peut être utilisé pour créer une barre de progression par défaut?"];
            /*var g17questionsRestants = g17questions.slice(0); // Dupliquer le tableau pour tirages avec suppression
            var g17tenRandom = [];
            // Pousser un élément de rang aléatoire dans le tableau tant sa longuer est inférieure à 10
            while (g17tenRandom.length < 10) g17tenRandom.push(g17questionsRestants.splice(Math.floor(Math.random() * g17questionsRestants.length), 1)[0]);


             
            console.log(g17tenRandom)*/


            //Les variants de réponses
            var g17number1 = ["visible-md", "data-title", "table-hover", "container-row", "col-sm-8", "btn-succes", "sml", "lg", "Un framework CSS, CSS et HTML", ".progress, .progress-bar"];
            var g17number2 = ["hidden-xs", "title", "table-bordered", "row", "col-xs-8", "btn-default", "small", "md", "Un framework HTML", ".progress-bar"];
            var g17number3 = ["hidd", "data-contenu", "table-striped", "nav-bar", "col-xs-offset-8", " btn-blue", "ins", "sm", "Un framework JavaScript", ".nav-progrss"];
            var g17number4 = ["hidden", "title-data", "table-color", "container", "col-8", "btn-info", "mark", "xs", "Un framework JavaScript", ".bar-prog"];

            document.getElementById('g17question').innerHTML = g17questions[g17countQuest];

            document.getElementById('g17option1').innerHTML = g17number1[g17countQuest];
            document.getElementById('g17option2').innerHTML = g17number2[g17countQuest];
            document.getElementById('g17option3').innerHTML = g17number3[g17countQuest];
            document.getElementById('g17option4').innerHTML = g17number4[g17countQuest];

            //Les bons réponses
            var g17answer = [1, 2, 2, 3, 0, 1, 3, 0, 2, 0];

            g17test_start = 1;
        }


    } else {

        //Les questions
        var g17questions = ["Quelle class permet de cacher un élément uniquement sur un écran dont la largeur est inférieure à 768px ?", "Quel attribut sert à ajouter le contenu du titre d’une popover ?", "Quelle class doit-être ajoutée pour colorier un rang sur deux dans un tableau ?", "Quelle class permet de déclarer un système de colonnes ?", "Quelle class permet de positionner un élément sur 8 colonnes sur un écran dont la largeur est de 650px ?", "Quelle class permet de coloriser un bouton en bleu ciel ?", "Quelle balise permet de mettre un texte en surbrillance ?", "Quel préfixe doit-on utiliser pour gérer l’affichage sur un écran de 998px de large ?", "Qu’est-ce que Bootstrap ?", "Lequel des styles de bootstrap suivants peut être utilisé pour créer une barre de progression par défaut?"];

        /*var g17questionsRestants = g17questions.slice(0); // Dupliquer le tableau pour tirages avec suppression
        var g17tenRandom = [];
        // Pousser un élément de rang aléatoire dans le tableau tant sa longuer est inférieure à 10
        while (g17tenRandom.length < 10) g17tenRandom.push(g17questionsRestants.splice(Math.floor(Math.random() * g17questionsRestants.length), 1)[0]);



        console.log(g17tenRandom)*/



        //Les réponses
        var g17number1 = ["visible-md", "data-title", "table-hover", "container-row", "col-sm-8", "btn-succes", "sml", "lg", "Un framework CSS", ".progress, .progress-bar"];
        var g17number2 = ["hidden-xs", "title", "table-bordered", "row", "col-xs-8", "btn-default", "small", "md", "Un framework HTML", ".progress-bar"];
        var g17number3 = ["hidd", "data-contenu", "table-striped", "nav-bar", "col-xs-offset-8", " btn-blue", "ins", "sm", "Un framework JavaScript, CSS et HTML", ".nav-progrss"];
        var g17number4 = ["hidden", "title-data", "table-color", "container", "col-8", "btn-info", "mark", "xs", "Un framework JavaScript", ".bar-prog"];



        document.getElementById('g17question').innerHTML = g17questions[g17countQuest];

        document.getElementById('g17option1').innerHTML = g17number1[g17countQuest];
        document.getElementById('g17option2').innerHTML = g17number2[g17countQuest];
        document.getElementById('g17option3').innerHTML = g17number3[g17countQuest];
        document.getElementById('g17option4').innerHTML = g17number4[g17countQuest];

        //Les bons réponses

        var g17answer = [1, 2, 2, 3, 0, 1, 3, 0, 2, 0];

        if (g17num == g17answer[g17countQuest]) g17plus++;


        if (g17questions.length - 1 > g17countQuest) {

            g17countQuest++;

            document.getElementById('g17question').innerHTML = g17questions[g17countQuest];

            document.getElementById('g17option1').innerHTML = g17number1[g17countQuest];
            document.getElementById('g17option2').innerHTML = g17number2[g17countQuest];
            document.getElementById('g17option3').innerHTML = g17number3[g17countQuest];
            document.getElementById('g17option4').innerHTML = g17number4[g17countQuest];

        } else {

            document.getElementById('g17area').style.display = 'g17none';
            alert('Bravo! Vous avez ' + g17plus + ' bonnes réponses sur 10!');
            loadNextMiniGame();
        }

        //score
        document.getElementById('g17score').innerHTML = g17plus;

    }
}
