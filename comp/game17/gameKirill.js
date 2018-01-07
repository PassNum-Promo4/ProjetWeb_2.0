/*
  Author : Kirill Petrov 
*/


/*Fonction Questions*/


function ramdomQuestion(array) {
    i = 0;
    var rand = array[Math.random() * array.length >> 0];
    return rand;
}

var g17QuestionOne = ["Quelle class permet de cacher un élément uniquement sur un écran dont la largeur est inférieure à 768px ?", "hidden-xs", "col-xs-8", "col-xs-offset-8", "col-8"];

var g17QuestionTwo = ["Quel attribut sert à ajouter le contenu du titre d’une popover ?", "data-contenu", "title", "data-title", "title-data"];

var g17QuestionThree = ["Quelle class doit-être ajoutée pour colorier un rang sur deux dans un tableau ?", "table-striped", "table-bordered", "table-hover", "table-color"];

var g17QuestionFour = ["Quelle class permet de déclarer un système de colonnes ?", "container", "row", "nav-bar", "container-row"];

var g17QuestionFive = ["Quelle class permet de positionner un élément sur 8 colonnes sur un écran dont la largeur est de 650px ?", "col-sm-8", "col-xs-8", "col-xs-offset-8", "col-8"];

var g17QuestionSix = ["Quelle class permet de coloriser un bouton en bleu ciel ?", "btn-default", "btn-info", "btn-succes", "btn-blue"];

var g17QuestionSeven = ["Quelle balise permet de mettre un texte en surbrillance ?", "mark", "small", "ins", "sml"];

var g17QuestionEight = ["Quel préfixe doit-on utiliser pour gérer l’affichage sur un écran de 998px de large ?", "lg", "xs", "sm", "md"];

var g17QuestionNine = ["Qu’est-ce que Bootstrap ?", "Un framework JavaScript, CSS et HTML", "Un framework JavaScript", "Un framework CSS", "Un framework HTML"];

var g17QuestionTen = ["Lequel des styles de bootstrap suivants peut être utilisé pour créer une barre de progression par défaut ?", ".progress", ".progress-bar", ".progress-bar", ".nav-progrss", ".bar-prog"];

var arrayTotal = [g17QuestionOne, g17QuestionTwo, g17QuestionThree, g17QuestionFour, g17QuestionFive, g17QuestionSix, g17QuestionSeven, g17QuestionEight, g17QuestionNine, g17QuestionTen];

var result = ramdomQuestion(arrayTotal);
console.log(result);
