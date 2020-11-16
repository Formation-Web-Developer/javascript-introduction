#Les boucles while, do-while et for
En programmation deux règles sont très importantes et donc retenez les biens:
[div#class="warn"]
{span|badge}1{unspan} - Il ne faut pas copier/coller du code.
{span|badge}2{unspan} - Il faut éviter toute forme de répétition.
[undiv]
Pour répondre à ces règles nous avons des solutions toutes simples qui sont les boucles, les fonctions et les classes.
Pour l'instant contentons-nous des boucles.

[section#id="boucleWhile"#nav=La boucle while]
##La boucle while
La boucle {span|badge}while{unspan} permet de réperter un bloc de code tant que la {span|badge}condition{unspan} est {span|badge}vraie{unspan}.
Voyons sa syntaxe:
```javascript
while (condition){
  //Le code à répéter ici.
}
```
Voyons un exemple:
```javascript
var i = 0;
while (i < 50){
  i++;
  console.log(i);
}
```
Ici je déclare une variable i et je questionne au début de la boucle si i est bien strictement inférieur à 50. Comme c'est le cas, il entre dans la boucle et fait ce que je lui ai demandé de faire, c’est-à-dire:
[div#class="warn"]
{span|badge}1{unspan} - j'ncrémente mon {span|badge}i{unspan} de {span|badge}1{unspan}.
{span|badge}2{unspan} - J'affiche dans la console {span|badge}i{unspan}.
[undiv]
Puis comme je suis à la fin de la boucle, je remonte automatique à l'endroit de la {span|badge}condition{unspan}. Puis je requestionne. Est-ce qui (qui vaut maintenant {span|badge}1{unspan} et plus {span|alert}0{unspan}) est strictement inférieure à {span|badge}50{unspan} ? {span|warn}Oui !{unspan} Donc je continue le procédé jusqu'à ce qu'i vaille {span|badge}50{unspan}.
À partir de {span|badge}50{unspan} ma condition ne sera plus {span|alert}vraie{unspan} et je sortirais donc de ma boucle et je passerais à la suite du code.
[unsection]

[section#id="boucleDoWhile"#nav=La boucle do-while]
##La boucle do-while
La boucle {span|badge}do-while{unspan} fonctionne de la même façon qu'une boucle {span|badge}while{unspan} cependant elle inverse son ordre d'execution.
Voici la syntaxe:
```javascript
do{
  //Le code à répéter ici.
}while(condition);
```
Voyons un exemple:
```javascript
var i = 0;
do{
  i++;
  console.log(i);
}while (i < 50);
```
Ici je déclare une variable {span|badge}i{unspan} et je rentre directement dans la boucle.
[div#class="warn"]
{span|badge}1{unspan} - j'ncrémente mon {span|badge}i{unspan} de {span|badge}1{unspan}.
{span|badge}2{unspan} - J'affiche dans la console {span|badge}i{unspan}.
[undiv]
Et dès que l'on arrive à la fin du {span|badge}do-while{unspan}, je questionne la boucle pour savoir si {span|badge}i{unspan} est strictement inférieur à {span|alert}50{unspan}. {span|warn}Si oui{unspan}, alors comme pour le {span|badge}while{unspan} on remonte au {span|badge}do{unspan} et on recommence.
[unsection]

[section#id="for"#nav=Le for-i]
##for-i, for-in, for-of et foreach
Il existe {span|badge}4{unspan} façons de pouvoir utiliser le {span|badge}for{unspan}.
[section#id="for-i"#nav=Le for-i]
###Le for-i
Le {span|badge}for-i{unspan} est la base des {span|badge}fors{unspan}. Elle permet de déclarer une {span|badge}variable{unspan} et de la {span|badge}questionner{unspan} et l'{span|badge}iterrer{unspan}.
Pour être plus clair, voici sa syntaxe:
```javascript
for(variable; condition; iteration){
  //Le code à répéter ici.
}
```
Voici un exemple:
```javascript
for(var i = 0; i < 50; i++){
  console.log(i);
}
```
Le fonctionnement de cette boucle s'execute comme suit:
[div#class="warn"]
{span|badge}1{unspan} - On initialise la variable {span|badge}i{unspan} à {span|badge}0{unspan}.
{span|badge}2{unspan} - On questionne si la variable {span|badge}i{unspan} est bien inférieur à {span|alert}50{unspan}.
{span|badge}3{unspan} - Si oui, alors j'entre directement dans le bloc. ({span|alert}Je n'incrémente pas{unspan} tout de suite !)
{span|badge}5{unspan} - L'affiche la variable {span|badge}i{unspan} dans la console.
{span|badge}6{unspan} - Une fois le bloc {span|badge}for{unspan} fini, j'incrémente de {span|badge}1{unspan} ma variable {span|badge}i{unspan} et je reviens au début de la boucle.
{span|badge}7{unspan} - Je {span|alert}ne ré-initialise pas{unspan} ma variable {span|badge}i{unspan} et je passe directement à la condition.
{span|badge}8{unspan} - Si ma condition est vraie alors répète tout à partir de l'étape {span|badge}3{unspan}, sinon j'arrête l'itération {span|badge}for{unspan}.
[undiv]
{span|alert}PS:{unspan} Il faut savoir que tous les paramètres de la boucle {span|badge}for-i{unspan} ne sont pas obligatoires.
```javascript
//Je déclare ma variable i à l'extérieur de mon for-i.
var i = 0;
//Je laisse quand même le point virgule qui fait la séparation des paramètres.
for( ; i < 50; i++){
  console.log(i);
}

//Pour faire un boucle qui ne termine pas:
for( ; ; ){
    //Ce for tournera tant que l'on ne lui dit pas de s'arrêter.
    //Pour forcer l'arret d'un boucle for ou même while ou utilise le break.
    break;
}

//Il faut aussi que je vous montre le continue.
for(var i = 0; ; i++){
  if(i < 50){
    //Si i est inférieur à 50 alors je passe directement à la fin du for sans executé le reste du code.
    //Donc nous passons directement à l'incrémentation de la variable i.
    continue;
  }
  if(i > 60){
    //Si i est supérieur à 60 alors j'arrête le for et j'en sors.
    break;
  }
  //J'affiche la variable i dans la console.
  console.log(i);
  //Resultat dans la console: de 50 à 60.
}
```
[unsection]
[section#id="forInEtForOf"#nav=Le for-in et le for-of]
###Le for-in et le for-of
Le {span|badge}for-in{unspan} et {span|badge}for-of{unspan} sont principalement dédiée aux tableaux. Elle permet d'{span|badge}itérer{unspan} chacun de ses éléments un à un.
Voici un exemple:
```javascript
var items = ['Chien', 'Chat', 'Loup'];
for(var item in items){
  console.log(item);
  //Result: 0, 1, 2.
}

for(var item of items){
  console.log(item)
  //Result: Chien, Chat, Loup.
}
```
Comme vous pourrez le constater, votre console n'affiche pas le même resultat suivant le type de {span|badge}for{unspan} que vous utilisez.
Pour le {span|badge}for-in{unspan} vous aurez les positions ou se trouvent vos éléments dans votre tableau. Si vous souhaitez récupérer correctement votre valeur vous devrez utiliser votre tableau:
```javascript
for(var item in items){
  console.log(items[item]);
  //Resultat: Chien, Chat, Loup
}
```
Pour le {span|badge}for-of{unspan}, il vous donne directement votre valeur. Ce qui est souvent bien plus pratique.
[unsection]
[section#id="forEach"#nav=Le foreach]
###Le foreach
Il y a une seconde façon pour pouvoir parcourir un {span|badge}tableau{unspan}. C'est la fonction {span|badge}forEach{unspan} qui est implémenté par {span|badge}Javascript{unspan} pour les objets de type {span|badge}Array{unspan}.
```javascript
var items = ['Chien', 'Chat', 'Loup'];
items.forEach(function (item){
  console.log(item);
  //Resultat: Chien, Chat, Loup
});

//Ou bien avec la nouvelle syntaxe (Attention, il se peut qu'il ne soit pas compris par tous les navigateurs.)
items.forEach(item => {
  console.log(item);
  //Resultat: Chien, Chat, Loup
});
```
[unsection]
[unsection]
[div#class="buttons"]
>Les opérateurs et les conditions|javascript/chapter-5
>Revenir au sommaire|javascript/chapters
[undiv]