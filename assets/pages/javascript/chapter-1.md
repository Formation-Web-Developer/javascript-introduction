#Ajouter du code JavaScript dans sa page HTML

[section#id="baliseScript"#nav=Syntaxe de la balise script]
##La syntaxe de la balise {span|badge}script{unspan}
Il y a deux façons pour ajouter un {span|badge}script{unspan} sur le fichier HTML.
La première est d'ajouter directement le code entre la balise {span|badge}script{unspan}.
```html
<script> // Ici on y mettra notre code JavaScript. </script>
```
Et la deuxième est de passer par un fichier .js et de donner son chemin avec l'attribut {span|badge}src{unspan}.
```html
<script src="assets/js/nom-du-fichier.js"></script>
```
[unsection]

[section#id="positionnementDeScript"#nav=Positionnement de la balise script]
##Le positionnement de la balise {span|badge}script{unspan} sur le fichier HTML.
L'emplacement de la balise {span|badge}script{unspan} est assez important suivant les cas d'utilisation du script.
Si le script n'influe pas spécialement sur la page html. Alors elle pourra-être placée dans la balise {span|badge}head{unspan}.
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Titre de la page</title>
    <script src="assets/js/nom-du-fichier.js"></script>
  </head>
</html>
```
Sinon et par principe elle sera plutôt placée en dernier dans la balise {span|badge}body{unspan}.
```html
<!DOCTYPE html>
<html>
  <head></head>
  <body>
    <header></header>
    <main></main>
    <footer></footer>
    <script src="assets/js/nom-du-fichier.js"></script>
  </body>
</html>
```
{span|alert}Attention{unspan}: dans cet exemple j'ai indiqué le {span|badge}src{unspan} mais il n'est pas obligatoire suivant les cas de positionnement. Il est bien sûr possible d'ajouter directement le code dans les balises {span|badge}script{unspan}.
[unsection]
[div#class="buttons"]
>← Revenir au sommaire|javascript/chapters
>{sm}Chapitre 2 →{unspan}{md}Les actions sur les balises html{unspan}|javascript/chapter-2
[undiv]