'use strict';

//variabili
const utente = Math.floor(Math.random() * 6 + 1);
const computer = Math.floor(Math.random() * 6 + 1);

//elementi DOM
const utenteHtml = document.getElementById('utente');
const computerHtml = document.getElementById('computer');
const resultHtml = document.querySelector('.result h2');

let output;

if(utente > computer){
    output = "Hai vinto!";
}else if(computer > utente){
    output = "Ha vinto il computer";
}else{
    output = 'Pareggio';
}

const text = `${output}\nDadi:\n- ${utente}\n- ${computer}`;
//stampa il risultato
console.log(text);
utenteHtml.innerText = utente;
computerHtml.innerText = computer;
resultHtml.innerText = output;