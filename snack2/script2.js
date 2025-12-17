//Snack2
//Creare un array di oggetti di squadre di calcio.
//Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
//Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
//Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
//Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */



//  creo Array delle squadre 

const squadre = [
    {nome: 'Milan', punti: 0, falli: 0 } , 
    {nome: 'Juventus' , punti: 0, falli: 0 } , 
    {nome: 'Sassuolo' , punti: 0, falli: 0} ,

] ; 


// Aggiungiamo numeri random con un ciclo for passo a una squadra alla volta e aggiungo punti random e falli random

for (let i = 0; i < squadre.length; i++) {
    squadre[i].punti = Math.floor(Math.random() * 10);
    squadre[i].falli = Math.floor(Math.random() * 10);
}


// Array vuoto dove dentro ci metto solo quello che mi serve che sarebbero i nomi e i falli 
// e creo un altro ciclo per far girare tute le squadre

const risultato = [];

for (let i = 0; i < squadre.length; i++) {
    risultato[i] = {
        nome: squadre[i].nome,
        falli: squadre[i].falli
    };
}


// Stampo in console il risultato
console.log(risultato);




/*NOTE
NON usate cicli/metodi di JS avanzati (filter, map, o simili), li vedremo a parte e così vi sforzate ad usare la logica.*/
