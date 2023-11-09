'use strict';

//array contentente le email accettate
const email = ['esempio1@mail.it', 'esemprio2@mail.it'];

//elementi DOM
const inputEmail = document.getElementById('email');
const button = document.querySelector('button');
const text = document.querySelector('p');

//quando si preme il bottone
button.addEventListener('click', function(){
    let output = "L'email non è presente";

    //ciclo che verifica se l'email si trova dentro l'array
    for(let i = 0; i < email.length; i++){
        if(inputEmail.value === email[i]){
            output = "L'email è presente";
            break;
        }
    }

    //stampa il valore
    text.innerHTML = output;
    console.log(output);
});