/*
  Author : Kirill Petrov 
*/


var g17countQuest = 0;
var g17plus = 0;
var g17test_start = 0;
var g17curent_url = document.URL;
document.write("<a id='end' style='display: none;' class='myButton btn btn-success' href='" + g17curent_url + "'>Récommencer</a>");


function check(num) {

    if (num == 10) {

        document.getElementById('area').style.display = 'block'; //
        document.getElementById('start').style.display = 'none';
        document.getElementById('end').style.display = 'inline';

        if (g17test_start == 0) {

            //Les questions
            var g17questions = ["Quelle class permet de cacher un élément uniquement sur un écran dont la largeur est inférieure à 768px ?", "Quel attribut sert à ajouter le contenu du titre d’une popover ?", "Quelle class doit-être ajoutée pour colorier un rang sur deux dans un tableau ?", "Quelle class permet de déclarer un système de colonnes ?", "Quelle class permet de positionner un élément sur 8 colonnes sur un écran dont la largeur est de 650px ?", "Quelle class permet de coloriser un bouton en bleu ciel ?", "Quelle balise permet de mettre un texte en surbrillance ?", "Quel préfixe doit-on utiliser pour gérer l’affichage sur un écran de 998px de large ?", "Qu’est-ce que Bootstrap ?", "Lequel des styles de bootstrap suivants peut être utilisé pour créer une barre de progression par défaut?"];

            //Les variants de réponses
            var g17number1 = ["hidden-xs", "data-contenu", "table-striped", "container", "col-sm-8", "btn-default", "mark", "lg", "Un framework JavaScript, CSS et HTML", ".progress, .progress-bar"];
            var g17number2 = ["visible-md", "title", "table-bordered", "row", "col-xs-8", "btn-succes", "small", "md", "Un framework HTML", ".progress-bar"];
            var g17number3 = ["hidd", "data-title", "table-hover", "nav-bar", "col-xs-offset-8", " btn-blue", "ins", "sm", "Un framework CSS", ".nav-progrss"];
            var g17number4 = ["hidden", "title-data", "table-color", "container-row", "col-8", "btn-info", "sml", "xs", "Un framework JavaScript", ".bar-prog"];

            document.getElementById('question').innerHTML = g17questions[g17countQuest];

            document.getElementById('option1').innerHTML = g17number1[g17countQuest];
            document.getElementById('option2').innerHTML = g17number2[g17countQuest];
            document.getElementById('option3').innerHTML = g17number3[g17countQuest];
            document.getElementById('option4').innerHTML = g17number4[g17countQuest];

            //Les bons réponses
            var g17answer = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

            g17test_start = 1;
        }
    } else {
        //Les questions
        var g17questions = ["Quelle class permet de cacher un élément uniquement sur un écran dont la largeur est inférieure à 768px ?", "Quel attribut sert à ajouter le contenu du titre d’une popover ?", "Quelle class doit-être ajoutée pour colorier un rang sur deux dans un tableau ?", "Quelle class permet de déclarer un système de colonnes ?", "Quelle class permet de positionner un élément sur 8 colonnes sur un écran dont la largeur est de 650px ?", "Quelle class permet de coloriser un bouton en bleu ciel ?", "Quelle balise permet de mettre un texte en surbrillance ?", "Quel préfixe doit-on utiliser pour gérer l’affichage sur un écran de 998px de large ?", "Qu’est-ce que Bootstrap ?", "Lequel des styles de bootstrap suivants peut être utilisé pour créer une barre de progression par défaut?"];

        //Les réponses
        var g17number1 = ["hidden-xs", "data-contenu", "table-striped", "container", "col-sm-8", "btn-default", "mark", "lg", "Un framework JavaScript, CSS et HTML", ".progress, .progress-bar"];
        var g17number2 = ["visible-md", "title", "table-bordered", "row", "col-xs-8", "btn-succes", "small", "md", "Un framework HTML", ".progress-bar"];
        var g17number3 = ["hidd", "data-title", "table-hover", "nav-bar", "col-xs-offset-8", " btn-blue", "ins", "sm", "Un framework CSS", ".nav-progrss"];
        var g17number4 = ["hidden", "title-data", "table-color", "container-row", "col-8", "btn-info", "sml", "xs", "Un framework JavaScript", ".bar-prog"];

        document.getElementById('question').innerHTML = g17questions[g17countQuest];

        document.getElementById('option1').innerHTML = g17number1[g17countQuest];
        document.getElementById('option2').innerHTML = g17number2[g17countQuest];
        document.getElementById('option3').innerHTML = g17number3[g17countQuest];
        document.getElementById('option4').innerHTML = g17number4[g17countQuest];

        //Les bons réponses
        var g17answer = [0, 0, 0, 0, 0, 0, 0 ,0 ,0 ,0];

        if (num == g17answer[g17countQuest]) g17plus++;

        if (g17questions.length - 1 > g17countQuest) {

            g17countQuest++;

            document.getElementById('question').innerHTML = g17questions[g17countQuest];

            document.getElementById('option1').innerHTML = g17number1[g17countQuest];
            document.getElementById('option2').innerHTML = g17number2[g17countQuest];
            document.getElementById('option3').innerHTML = g17number3[g17countQuest];
            document.getElementById('option4').innerHTML = g17number4[g17countQuest];

        } else {

            document.getElementById('area').style.display = 'none';
            alert('Vous avez ' + g17plus + ' Bonnes réponses!');
        }
    }
}
