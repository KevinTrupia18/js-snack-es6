/* Snack 1
Creare un array di oggetti:*/
//Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
//Stampare a schermo la bici con peso minore.


// Array di oggetti bici
const bicycles = [
    {name: 'red', weight: 7},
    {name: 'yellow' , weight: 8},
    {name: 'blue' , weight: 6}

];


// Supponiamo che la prima bici sia la più leggera e la salviamo 

let lightBike = bicycles[0];


// confrontiamo le altre bici. partiamo dalla seconda bici e le confrontiamo tutte.

for (let i = 1; i<bicycles.length; i++) {

    // se troviamo una bici più leggera la salviamo 
    if (bicycles[i].weight < lightBike.weight) {
        lightBike = bicycles[i];
    }
}

// stampiamo il nome e il peso della bici più leggera 
console.log("La bici più leggera è:", lightBike);





//Snack2
//Creare un array di oggetti di squadre di calcio.
//Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
//Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
//Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
//Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */

/*NOTE
NON usate cicli/metodi di JS avanzati (filter, map, o simili), li vedremo a parte e così vi sforzate ad usare la logica.*/
