const app = document.getElementById('app');

function write(text, addSeparator = false, separator = ', ')
{
    app.innerHTML += text;
    if(addSeparator)
    {
        app.innerHTML += separator;
    }
}

/** Les boucles */

write('<h2>La boucle <span>while</span></h2>');

/* La boucle while */
let i = 0;
let limit = 10;

/* Je commence ma boucle avec une condition. Tant qu'elle sera vrai alors la boucle recommancera à partir de ce point. */
while (i < limit)
{
    /* J'incrémente de 1 ma variable i. */
    i++;

    /* J'ajoute la valeur i sur ma page html. en premier paramètre */
    /* Je détecte si i est inférieur à 10 alors j'ajoute mon séparateur. */
    write(i, i < limit);
}



write('<h2>La boucle <span>do/while</span></h2>');

let x = 0;
limit = 25;

/** Je rentre dans le bloc de la boucle quoi qu'il arrive. */
do {
    x++;
    /* J'ajoute la valeur x sur ma page html. en premier paramètre */
    /* Je détecte si x est inférieur à 25 alors j'ajoute mon séparateur. */
    write(x, x < limit);
}while (x < limit); /** Je regarde ensuite si ma condition de la boucle est vrai. Tant qu'elle est vrai alors la boucle recommancera en partant de 'do'. */


write('<h2>Le <span>For</span></h2>');

limit = 100;

/**
  Je commence ma boucle en déclarant un variable i à 0
  Puis je fait ma comparaison. Est-ce que i est inférieur ou égale à 16 ?.
  Si oui alors j'entre dans mon bloc et je fais mon code. Sans pour l'instant prendre en compte le 'i++'.
 */
for(let i = 0; i <= limit; i++)
{
    /* J'ajoute la valeur i sur ma page html. en premier paramètre */
    /* Je détecte si i est inférieur à 100 alors j'ajoute mon séparateur qui sera un espace. */
    write(i, i < limit, ' ');

    /**
       A la fin de mon bloc de mon for je retourne sur ma ligne de mon for et j'execute le 3ème paramètre soit l'incrémentation de i.
       Puis je refait ma comparaison. Si elle est vrai je rentre sinon j'arrête ma boucle.

       Attention, je ne remet pas mon i à 0.
     */
}

/** Exercice: Afficher les multiple de 5 de 0 à 100. */
write('<h2>Afficher les multiples de <span>5</span> de <span>0</span> à <span>100</span>.</h2>');

let start = 0;
let end = 100;

for(let i = start; i <= end; i += 5)
{
    write(i, i < end);
}

/** Exercice: Afficher les nombres pairs de 10 à 70. */
write('<h2>Afficher les nombres pairs de <span>10</span> à <span>70</span>.</h2>');

start = 10;
end = 70;

for(let i = start; i <= end; i++)
{
    /** Cette condition me permet de savoir si mon nombre i est un nombre pair. */
    if(i%2 === 0)
    {
        write(i, i < end);
    }
}

/**
 * Exercie: Afficher toutes les années depuis notre naissance.
 * Placer le resultat dans une balise p avec une class birthday.
 */

write('<h2>Afficher Toutes les années depuis notre <span>date de naissance</span> dans un <span>paragraphe</span> avec la class <span>brithday</span></h2>');

const birthdayYear = 1994;
const currentYear = new Date().getFullYear();

for(let i = birthdayYear; i <= currentYear; i++)
{
    write('<p class="birthday" onclick="console.log(\''+i+'\')">'+i+'</p>')
}

/**
  Afficher de 50 à 25 sauf le nombre 30;
 */
app.innerHTML += '<h2>Afficher de <span>50</span> à <span>25</span> sauf le nombre <span>30</span></h2>';

for (let i = 50; i >= 25; i--)
{
    if(i != 30)
    {
        write(i, i > 25);
    }
}

/**
 * Affichez les nombres de 1 à 100. Les nombres de 40 à 48 et 78 à 89 doivent être en vert et les autres en rouge.
 */

write('<h2>Afficher les nombre de <span>1</span> à <span>100</span> et les nombre de <span>40</span> à <span>48</span> et <span>78</span> à <span>89</span> doivent-être en <span class="green">Vert</span> sinon les autres nombres en <span class="red">Rouge</span>.</h2>')

const greens = [
    {min: 40, max: 48},
    {min: 78, max: 89}
]

for (let i = 1; i <= 100; i++)
{
    const green = greens.find(object => i >= object.min && i <= object.max);
    write(
        '<span class="' + (green ? 'green' : 'red') + '">'+i+'</span>',
            i < 100
    );
}

/**
 * Les Foreachs
 */

write('<h2>La boucle <span>For-i</span> pour les tableaux.</h2>');

const fruits = ['Kiwi', 'Banane', 'Pomme', 'Mangue', 'Papaye'];
console.log(fruits);

for (let i = 0; i < fruits.length; i++)
{
    write('<p>['+i+'] '+fruits[i]+'</p>');
}

write('<h2>La boucle <span>For-in</span> pour les tableaux.</h2>');

for (const fruit in fruits)
{
    write('<p>['+fruit+'] '+fruits[fruit]+'</p>');
}

write('<h2>La boucle <span>For-of</span> pour les tableaux.</h2>');

let index = 0;
for (const fruit of fruits)
{
    write('<p>['+index+'] '+fruit+'</p>');
    index++;
}

/** Exercice: */
write('<h2>Exercice: Boucle un tableau avec le <span>For-i</span></h2>');

const list = ['Pain', 'Vin', 'Boursin', 'Fraise'];

let ul = '<ul>';

for(let i = 0; i < list.length; i++)
{
    ul += '<li>'+list[i]+'</li>';
}

write(ul+'</ul>');

write('<h2>Exercice: Boucle un tableau avec le <span>Foreach</span></h2>');

ul = '<ul>';
list.forEach(function (item) {
    ul += '<li>'+item+'</li>';
})
write(ul+'</ul>');

write('<h2>Exercice 2: Boucle un tableau avec le <span>Foreach</span></h2>');

const cars = ['GTI', 'BMW', 'Renault', 'Audi', 'Mercedes', 'Fiat'];

let divCars = '<div class="cars">';

cars.forEach(function (car) {
    divCars += '<h2 class="car">'+car+'</h2>';
});

write(divCars+'</div>');

write('<h2>Exercice 3: Récupérer une fonction qui prends en paramètre un <span>tableau</span> et retourne un <span>ul</span>.</h2>');

/**
 * @param {Array<string>} items
 * @param {string} parent
 * @param {string} child
 * @returns {string}
 */
function generateList(items, parent = 'ul', child= 'li'){
    let ul = '<'+parent+'>';
    items.forEach(function (item){
        ul += '<'+child+'>'+item+'</'+child+'>';
    })
    return ul + '</'+parent+'>';
}

write(generateList(cars));
write(generateList(fruits, 'ol'));

write(generateList(fruits, 'div', 'p'));

write('<h2>Calculer la <span>longueur</span> d\'une chaine de caractère.</h2>');

const words = 'Se venter d\'une action est plus facile que de la réaliser';

// Calculer le nombre de caractères de cette chaine.
write('<p>La phrase: <span>'+words+'</span></p>')
write('<p>Longueur de la phrase ci-dessus: <span>'+words.length+'</span> caractère(s).</p>');

// Calculer le nombre de mots de cette chaine.
write('<p>Le nombre de mot ci-dessus: <span>'+words.split(' ').length+'</span> mot(s).</p>');

//Ecrire la phrase en maj:
write('<p>La phrase en MAJUSCULE: <span>'+words.toUpperCase()+'</span></p>')

//Afficher les 5 premiers caractères:
write('<p>Les 5 premiers caractères: <span>'+words.substr(0, 5)+'</span></p>')













