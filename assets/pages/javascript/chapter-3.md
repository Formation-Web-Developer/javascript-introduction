#Créer des variables et les afficher

{span|alert}Attention:{unspan} à partir de ce chapitre nous serons dans un fichier Javascript séparé du HTML. Donc n'oubliez pas d'ajouter la balise script sur votre page html avec l'attribut Src.

[section#id="syntaxePourDeclarerUneVariable"#nav=Syntaxe pour déclarer une variable]
##La syntaxe pour déclarer une variable.
Pour bien commencer il est important de voir la bonne syntaxe pour déclarer sans problème une variable.
```javascript
type name = value;
```
Il existe 3 différents types de variable:
[div#class="warn"]
{span|badge}var{unspan}, {span|badge}let{unspan} et le {span|badge}const{unspan}
[undiv]
Je ne rentrerais pas dans les détailles tout de suite mais sachez que chaque type correspond à une portabilité (un mot compliqué pour l'instant). Contentons-nous du var.
Ensuite le nom devra être écrit en camelCase et généralement en anglais sans accent, ni espace ou caractère spéciaux. Et c'est vous qui décidez de l'appeler comme vous le souhaitez. (Mieux vaut aussi qu'il soit en rapport avec la donnée qu'elle comportera.)
Pour les valeurs, nous les verrons un peu plus bas. Voici un exemple de variable avec une bonne syntaxe
```javascript
var name = 'John Doe';
```
{span|alert}PS:{unspan} comme vous le remarquez, il y a un point-virgule à la fin. Sachez qu'il n'est pas obligatoire en Javascript. Cependant nous prendrons l'habitude de le mettre. Cela indique une fin d'instruction, de plus il est souvent obligatoire dans d'autre langages de programmation telque PHP que l'on verra plus tard dans la formation.
Les variables peuvent aussi être déclarées sur une seule et même ligne et seront séparées par des virgules.
```javascript
var name = 'Doe', lastname = 'John', age = 37;
```
[unsection]

[section#id="valeursPossiblesDuneVariable"#nav=Valeurs possibles d'une variable]
##Les valeurs possibles d'une variable.
En programmation nous avons le choix entre différents types de variables qui sont plus ou moins similaires mais contentons-nous de Javascript.
[section#id="chainesDeCaractere"#nav=Les chaines de caractère]
###1- Les chaines de caractère
{span|alert}String:{unspan} ce type permet de déclarer une chaine de caractère. Elle sera entourée soit de guillemet simple ou de guillemet double ou bien de guillemet simple inversé.
{span|alert}Attention:{unspan} Pour les guillemets simples inversés je vous le mets en exemple mais c'est comme pour les let et les const. Nous ne les utiliserons pas dans l'immédiat.
```javascript
var name = 'Doe';
var lastname = "John";
var country = `France`;
```
{span|badge}Conseil:{unspan} Si vous avez besoin d'ajouter un caractère dans votre chaine de caractère que vous utilisez pour englober votre chaine de caractère, vous devrez alors l'échapper avec /
```javascript
var message = 'C\'est chez John ou l\'on trouve les meilleurs tartes à la crême.';
```
[unsection]
[section#id="nombresEntiers"#nav=Les nombres entiers]
###2- Les nombres entiers
{span|alert}Integer{unspan} ou {span|alert}int:{unspan} Ce type permet de déclarer un nombre entier. Ce qui signifie qu'il ne peut y avoir de décimale.
```javascript
var age = 37;
```
[unsection]
[section#id="nombresDecimaux"#nav=Les nombres décimaux]
###3- Les nombres décimaux
{span|alert}Float{unspan} ou {span|alert}Double:{unspan} Ce type permet de déclarer un nombre qui accepte les décimales.
```javascript
var money = 135.37;
```
{span|alert}Attention:{unspan} comme vous pourrez le constater, nous n'utilisons pas la virgule pour nos nombres flottants. Les langages de programmation ont été faits sur la base de l'anglais. Par conséquent nous utilisons les points à la place des virgules.
Si jamais nous devons utiliser des gros nombres, nous ne pourrons pas non plus utiliser la virgule mais nous pouvons utiliser à les underscore pour séparer en paquet de millier. C'est toujours plus joli et plus compréhensible.
```javascript
var money = 1_000_125.59;
//Au lieu de:
var money = 1000125.59;
```
[unsection]
[section#id="valeursBooleennes"#nav=Les valeurs booléennes]
###4- Les valeurs booléennes.
{span|alert}Booléan:{unspan} Ce type permet de déclarer une valeur qui sera soit vraie soit faux.
```javascript
var value = true;
var value = false;
```
[unsection]
[section#id="tableaux"#nav=Les tableaux]
###5- Les tableaux.
{span|alert}Array{unspan} ou {span|alert}Collection:{unspan} Ce type permet de déclarer une liste d'élément. Elle sera entourée de crochets et contiendra n'importe qu'elle type de valeur.
```javascript
var items = ['Chien', 'Chat', 25, 4.369, true, false];
```
Pour récupérer un élément d'un tableau nous utiliserons son index. C'est-à-dire le numéro de la case où se trouve l'objet en question entouré de crochets après le nom de la variable qui contient le tableau.
{span|alert}Attention:{unspan} Les tableaux dans la plupart des langagess de programmation ne commencent pas par 1 mais par 0. Cela vaut aussi pour Javascript. Par conséquent, si je souhaite récupérer la 3ème valeur de la liste, j'utiliserais l'index 2.
```javascript
var items = ['Chien', 'Chat', 25, 4.369, true, false];
var item = items[2]; //item sera égale à 25.
```
[unsection]
[section#id="tableauxMultidimension"#nav=Les tableaux multidimensionnels]
###6- Les tableaux à multidimension.
Alors cette partie est un bonus mais c'est quand même bon à savoir.
Il existe plusieurs dimensions pour les tableaux. (D'une a théoriquement une infinité.)
Le tableau que l'on a utilisé au-dessus est un tableau par défaut. C'est-à-dire à une dimension. Si nous voulons plus de dimension alors il nous faudra ajouter des tableaux dans le tableau initial.
{span|warn}C'est confus ?{unspan} Alors ne vous inquiétez pas c'est normal. Ce n'est pas évident à prendre en main mais une petite démonstration ne sera pas de trop:
```javascript
var items = [
  ['Chien', 'Chat']
];
```
Là je viens de créer un tableau à deux dimensions. C'est-à-dire, un tableau dans un tableau. Pour récupérer la valeur Chat, je devrais d'abord aller chercher mon tableau dans mon tableau initial. Là ce n'est pas dur il est à la première position. Ensuite je pourrais récupérer ma valeur Chat qui se trouve à la seconde position.
En code ça donne ceci:
```javascript
var items = [
  ['Chien', 'Chat']
];
var item = items[0]; // La je récupère mon tableau qui contient la valeur chien et chat.
var result = item[1]; // Et la je récupère ma valeur chat.
//En plus court ça donnerai ça:
var result = items[0][1]; // Et la vous comprenez pourquoi on utilise le terme de dimension.
```
Comme vous le remarquez, nous avons utilisé deux fois les crochets pour récupérer notre valeur. C'est ainsi que l'on compte le nombre de dimensions. En conclusion si nous avons un tableau à 3 dimensions alors nous aurions 3 fois des crochets pour récupérer notre valeur finale.
Cela était surtout à but de démonstration. Ne vous prenez pas la tête sur ça ou bien demandez à vive voix pour plus d'explication.
[unsection]
[section#id="objets"#nav=Les objets]
###7- Les objets
{span|alert}Object:{unspan} Ce type permet de déclarer une collection de clé qui contiendra chacune des valeurs différentes. L'objet sera entouré d'accolades et chaque clé seront suivies des deux points et séparé par des virgules.
```javascript
var user = {
  name: 'Doe',
  lastname: 'John',
  age: 37,
  country: 'France'
};
```
Pour appeler une variable dans un objet on utilisera le point comme séparateur.
```javascript
var user = {
  name: 'Doe',
  lastname: 'John',
  age: 37,
  country: 'France'
};
var userName = user.name;
```
[unsection]
[unsection]

[section#id="afficherUneVariable"#nav=Afficher une variable]
##Afficher une variable dans la console.
Pour pouvoir afficher une variable dans la console il suffit d'utiliser l'objet console et d'appeler la fonction log puis de placer l'objet ciblé en paramètre de la fonction.
```javascript
var name = 'John Doe';
console.log(name); // Afficher John Doe dans la console.

var items = ['Chien', 'Chat'];
console.log(items); // Afficher le tableau dans la console.
console.log(items[1]); // Afficher Chat dans la console.
```
[unsection]
[div#class="buttons"]
>Les actions sur les balises html|javascript/chapter-2
>Les opérations et la concaténation|javascript/chapter-4
[undiv]