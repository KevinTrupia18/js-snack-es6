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





