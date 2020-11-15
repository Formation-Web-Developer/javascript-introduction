#Les actions sur les balises HTML

[section#id="ecrireDuJavaScriptDansLesElements"#nav=Écrire du Javascript dans les éléments]
##Écrire du {span|badge}Javascript{unspan} dans les éléments.
Dans le chapitre précédent nous avons vu comment placer du code {span|badge}Javascript{unspan} dans une balise {span|badge}script{unspan}. Mais il faut savoir qu'il est également possible d'écrire du {span|badge}Javascript{unspan} dans les éléments.
En utilisant un attribut dédié aux événements de {span|badge}Javascript{unspan}.
```html
<p onclick="prompt('Entrez une valeur');">Cliquez pour voir le prompt.</p>
```
Ou dans le {span|badge}href{unspan} d'une balise {span|badge}a{unspan} avec en utilisant le préfix {span|badge}javascript:{unspan} avant le code souhaitez.
```html
<a href="javascript:prompt('Entrez une valeur')">Cliquez pour voir le prompt.</a>
```
[unsection]

[section#id="listeDesEvenements"#nav=La liste des événements]
##La liste des {span|badge}événements{unspan} possibles dans un attribut {span|badge}HTML{unspan}
Il est possible d'utiliser plusieurs {span|badge}événements{unspan} dans les attributs HTML{unspan}.
```yaml
onclick: "Appelé lorsque l'on clique sur l'élément."
ondblclick: "Appelé lorsque l'on double clique sur l'élément."
onmouseover: "Appelé lorsque la souris survole l'élément."
onmouseout: "Appelé lorsque la souris sort de l'élément."
onload: "Appelé lorsque l'élément charge."
onunload: "Appelé lorsque l'élément décharge."
```
[unsection]

[section#id="correctionDesExercices"#nav=Correction des exercices]
##Correction des exercices
Un exercice en deux parties nous avons été donné.

Le premier avait pour but de:
[div#class="warn"]
Mettre une balise {span|badge}img{unspan} et lorsque l'on double clique sur celle-ci alors une {span|badge}alerte{unspan} devait s'afficher avec le message "{span|badge}Double clique{unspan}".
[undiv]
Pour cela il suffisait d'ajouter l'attribut {span|badge}ondblclick{unspan} dans la balise {span|badge}img{unspan} et d'utiliser la fonction {span|badge}alert(){unspan} de {span|badge}Javascript{unspan}.
```html
<img src="https://picsum.photos/300/300" ondblclick="alert('Double Clique');">
```
###Rendu de l'exercice
[img#class="img-auto"#src="https://picsum.photos/300/300"#ondblclick="alert('Double Click !')"]

Le second avait pour but de:
[div#class="warn"]
Ajouter un attribut pour détecter si la souris sortait de la balise {span|badge}img{unspan} et y afficher une {span|badge}alerte{unspan} avec le message "{span|badge}la souris est sortie de l'image{unspan}".
[undiv]
Pour cela il fallait ajouter l'attribut {span|badge}onmouseout{unspan} à notre balise {span|badge}img{unspan} et utiliser la fonction {span|badge}alert(){unspan} de {span|badge}Javascript{unspan}.
```html
<img src="https://picsum.photos/300/300" ondblclick="alert('Double Clique');" onmouseout="alert('La souris est sortie de l\'image');">
```
###Rendu de l'exercice
[img#class="img-auto"#src="https://picsum.photos/300/300"#ondblclick="alert('Double Click !')"#onmouseout="alert('la souris est sortie de l\'image')"]
[unsection]
[div#class="buttons"]
>Ajouter du code JavaScript dans sa page HTML|javascript/chapter-1
>Créer des variables et les afficher|javascript/chapter-3
[undiv]