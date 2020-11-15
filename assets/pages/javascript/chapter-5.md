#Les opérateurs et les conditions

[section#id="operateursDeComparaison"#nav=Les opérateurs de comparaison]
##Les opérateurs de comparaison
Les opérateurs de comparaison sont des expressions qui retournent des valeurs booléennes en fonction de deux variables/valeurs.
[section#id="comparaisonEgaliteFaible"#nav=La comparaison d'égalité faible]
###La comparaison d'égalité faible (est égale à)
Cette comparaison est assez spéciale. Elle va temporairement transformer (et si possible) les types des variables et comparer leur valeur entre eux.
La syntaxe s'écrit avec {span|badge}=={unspan}
```javascript
var result = 1 == 0; //result sera égale à false.

//Pour ce cas, il va transformer la chaine de caractère en un entier vu que c'est possible.
var result = 1 == '1'; //result sera égale à true.

//Pour ce cas, il va transformer le boolean en 0 (False = 0 et True = 1)
var result = 0 == false; //result sera égale à true.
var result = 1 == true; //result sera égale à true.
var result = 2 == true; //result sera égale à false.
```
[unsection]
[section#id="comparaisonEgaliteStrict"#nav=La comparaison d'égalité strict]
###La comparaison d'égalité strict (est strictement égale à)
Cette comparaison prendra en compte le type est la valeur de l'élément.
La syntaxe s'écrit avec {span|badge}==={unspan}
```javascript
var result = 1 === 0; //result sera égale à false.

//Pour ce cas, il ne fera pas la transformation.
var result = 1 === '1'; //result sera égale à false.

//Pareil pour ce cas.
var result = 1 === true; //result sera égale à false.
```
[unsection]
[section#id="comparaisonDeDifferenceFaible"#nav=La comparaison de différence faible]
###La comparaison de différence faible (est différent de)
Cette comparaison est comme pour l'égalité faible. Elle va temporairement transformer (et si possible) les types des variables et comparer leur valeur entre eux.
La syntaxe s'écrit avec {span|badge}!={unspan}
```javascript
var result = 1 != 1; // result sera égale à false.

//Pour ce cas, il va transformer la chaine de caractère en un entier vu que c'est possible.
var result = 1 != '1'; //result sera égale à false.
```
[unsection]
[section#id="comparaisonDeDifferenceStrict"#nav=La comparaison de différence strict]
###La comparaison de différence strict (est strictement différent de)
Cette comparaison prendra en compte le type est la valeur de l'élément.
La syntaxe s'écrit avec {span|badge}!=={unspan}
```javascript
var result = 1 !== 1; // result sera égale à false.

//Pour ce cas, il ne va pas transformer la chaine de caractère en un entier.
var result = 1 !== '1'; //result sera égale à true.
```
[unsection]
[unsection]

[section#id="operateursRelationnels"#nav=Les opérateurs relationnels]
##Les opérateurs relationnels
Les opérateurs relationnels sont des expressions qui retournent des valeurs booléennes en fonction de deux variables/valeurs. Elles sont majoritairement utilisées pour des nombres.
[section#id="relationInferieureStrict"#nav=La relation inférieure strict]
###La relation inférieure stricte (est inférieure à)
Cette relation regardera la valeur numérique des deux éléments et déterminera si la première valeur est bien inférée à la seconde.
La syntaxe s'écrit avec {span|badge}<{unspan}
```javascript
var result = 1 < 0; //result sera égale à false.
var result = 1 < 2; //result sera égale à true.
```
[unsection]
[section#id="relationInferieureFaible"#nav=La relation inférieure faible]
###La relation inférieure faible (est inférieure ou égale à)
Cette relation regardera la valeur numérique des deux éléments et déterminera si la première valeur est bien inférée ou égale à la seconde.
La syntaxe s'écrit avec {span|badge}<={unspan}
```javascript
var result = 1 <= 0; //result sera égale à false.
var result = 1 <= 1; //result sera égale à true.
var result = 1 <= 2; //result sera égale à true.
```
[unsection]
[section#id="relationSuperieureStrict"#nav=La relation supérieure strict]
###La relation supérieure stricte (est supérieure à)
Cette relation regardera la valeur numérique des deux éléments et déterminera si la première valeur est bien supérieure à la seconde.
La syntaxe s'écrit avec {span|badge}>{unspan}
```javascript
var result = 1 > 0; //result sera égale à true.
var result = 1 > 2; //result sera égale à false.
```
[unsection]
[section#id="relationSuperieureFaible"#nav=La relation supérieure faible]
###La relation supérieure faible (est supérieure ou égale à)
Cette relation regardera la valeur numérique des deux éléments et déterminera si la première valeur est bien supérieure ou égale à la seconde.
La syntaxe s'écrit avec {span|badge}>={unspan}
```javascript
var result = 1 >= 0; //result sera égale à true.
var result = 1 >= 1; //result sera égale à true.
var result = 1 >= 2; //result sera égale à false.
```
[unsection]
[unsection]

[section#id="operateursLogiques"#nav=Les opérateurs logiques]
##Les opérateurs logiques
Les opérateurs logiques sont également appelés des portes logiques. Ils permettent de savoir si un ou plusieurs (suivant l'opérateur choisi) type de comparaison sont vrais.
[section#id="operateurET"#nav=L'opérateur ET]
###L'opérateur ET
Cette porte permet de savoir si tous les résultats placés sont vrais.
La syntaxe s'écrit avec {span|badge}&&{unspan}
```javascript
var result = 25 != 24 && 26 == 27; //result sera égale à false.
var result = 25 != 24 && 26 <= 27; //result sera égale à true.

//Il est bien sur possible d'ajouter plusieurs porte && sur une même ligne.
var result = 25 != 24 && 26 < 27 && 40 > 5; //result sera égale à true.
```
[unsection]
[section#id="operateurOU"#nav=L'opérateur OU]
###L'opérateur OU
Cette porte permet de savoir si au moins un résultat placé est vrai.
La syntaxe s'écrit avec {span|badge}||{unspan}
```javascript
var result = 25 != 24 || 26 == 27; //result sera égale à true.
var result = 25 == 24 || 26 >= 27; //result sera égale à false.

//Il est bien sur possible d'ajouter plusieurs porte || sur une même ligne.
var result = 25 != 24 || 26 < 27 || 40 > 5; //result sera égale à true.
```
[unsection]
[section#id="prioriteDesOperateursLogiques"#nav=La priorité des opérateurs logiques]
###La priorité des opérateurs logiques
Tout comme pour les opérations, les opérateurs ont un ordre de priorité. Pour ce cas, le && sera prioritaire au ||. Et comme pour les opérations il y a bien sûr la possibilité d'utiliser les parenthèses pour forcer la priorité.
```javascript
var result = 24 < 40 && 29 > 10 || 49 > 50 && 10 < -5; //Ce resultat sera égale à true;
var result = 24 < 40 && (29 < 10 || 49 > 50) && 10 > -5; //Ce resultat sera égale à false;
```
[unsection]
[unsection]

[section#id="conditions"#nav=Les conditions]
##Les conditions
Les conditions permettant d'exécuter des morceaux de code seulement si un opérateur retournent vraies.
Tout d'abord voyons la syntaxe.
```javascript
//if = Si
//else if = Sinon si
//else = Sinon

//operateurs = Opérateurs de comparaison et/ou Opérateurs rationnels et/ou Opérateurs logiques.

if(operateurs){
  //Si l'opérateur est vrai alors je rentre dans ce bloc.
}else if(operateur){
  //Sinon si le premier opérateur est faux mais que le deuxième opérateur est vrai alors je rentre dans ce bloc.
  //Il n'est pas nécessaire d'avoir des else if mais dans tous les cas si on en a besoin il devra obligatoirement avoir un if avant.
  //On n'est pas limité à un seul else if. Il peut y en avoir plusieurs.
}else{
  //Sinon si aucun des deux opérateur est vrai alors je rentre dans ce bloc.
  //Il n'est pas nécessaire d'avoir des else mais dans tous les cas si on en a besoin il devra en avoir qu'un seul et devra être placé apres le if (obligatoire) et les else if (s'il y en a).
}
```
Plaçons un petit exemple:
```javascript
var age = 4;

if(age >= 18){
  console.log('Vous êtes majeur');
  //Il peut également avoir des conditions dans des conditions. Il n'y aucune limite à cela.
  if(age >= 65){
    console.log('Vous êtes à l\'age de la retraite.');
  }
}else if(age > 12){
  console.log('Vous êtes un ados.');
}else{
  console.log('Vous n\'êtes encore qu\'un enfant.');
  if(age >= 3 && age <= 6){
    console.log('Vous êtes à la maternelle.');
  }
}

// Vous aurez dans votre console:
// Vous n'êtes encore qu'un enfant.
// Vous êtes à la maternelle.
```
[unsection]
[div#class="buttons"]
>Les opérations et la concaténation|javascript/chapter-4
>Revenir au sommaire|javascript/chapters
[undiv]