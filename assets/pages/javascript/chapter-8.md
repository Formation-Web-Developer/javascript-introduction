#Les objets

[div#class="warn"]
Cette page n'est pas définitive.
[undiv]

{span|alert}Propriétés:{unspan} Ce sont les caractéristiques de l'objet. ({span|badge}variables{unspan})
{span|alert}Méthodes:{unspan} Cela permet d'agir sur l'objet. (identique aux {span|badge}fonctions{unspan} mais dédié aux objets.)

```javascript
//Créer une nouvelle instance d'un objet.
var car = new Object();
//Ajouter une propriété à notre objet.
car.weight = 1000;
car.speed = 0;
//Ajouter une méthode à notre objet qui calcule l'énergie cinétique de notre voiture: 
car.kineticEnergy = function (){
  if(car.weight > 0){
    return 0.5 * car.weight * Math.pow(car.speed, 2);
  }else {
    return false;
  }
};

//Afficher notre voiture dans la console.
console.log(car);

//Changer la vitesse à notre objet:
car.speed = 30;
//Afficher l'énergie cinetique de notre voiture dans la console.
console.log(car.kineticEnergy());

//Retirer de la masse à notre objet:
car.weight -= 120;
//Afficher la nouvelle énergie cinetique de notre voiture dans la console.
console.log(car.kineticEnergy());

```
##Exercice:
1 - Déclarer une nouvelle couleur à notre voiture.
Pour cela c'est très simple il suffit d'appelé notre objet et de lui assigné une nouvelle variable couleur:
```javascript
car.color = 'Rouge';
console.log(car);
```
2 - Créer une fonction qui permet d'afficher les informations de la voiture:
```javascript
car.showInfo = function (){
  console.log('La voiture '+car.color+
      ' a une vitesse de '+car.speed+' et une masse de '+car.weight+
      '. Son énergie cinetique est de '+car.kineticEnergy()+'.'
  );
}

//On appele la méthode showInfo
car.showInfo();

//On change la couleur
car.color = 'Jaune';

//On appele de nouveau la méthode showInfo
car.showInfo(); 
```
{span|alert}Résultat:{unspan}
[div#class="warn"]
La voiture {span|alert}Rouge{unspan} a une vitesse de {span|badge}30{unspan} et une masse de {span|badge}880{unspan}. Son énergie cinetique est de {span|badge}396000{unspan}.
[undiv]
[div#class="warn"]
La voiture {span|alert}Jaune{unspan} a une vitesse de {span|badge}30{unspan} et une masse de {span|badge}880{unspan}. Son énergie cinetique est de {span|badge}396000{unspan}.
[undiv]

##Les méthodes utiles de window
{span|alert}prompt:{unspan} Demande à l'utilisateur via une boite de dialogue de saisir une donnée.
{span|alert}alert:{unspan} Affiche à l'utilisateur via une boite de dialogue une information.
{span|alert}confirm:{unspan} Demande à l'utilisateur via une boite de dialogue une confirmation.

##Les objets utiles
{span|alert}window:{unspan} Cible la fenêtre de l'utilisateur.
{span|alert}document:{unspan} Cible le code html.
[div#class="buttons"]
>{sm}← Chapitre 7{unspan}{md}← Les fonctions{unspan}|javascript/chapter-7
>Revenir au sommaire →|javascript/chapters
[undiv]