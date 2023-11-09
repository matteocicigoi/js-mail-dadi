'use strict';

//array contentente le email accettate
const email = ['esempio1@mail.it', 'esemprio2@mail.it'];

//elementi DOM
const inputEmail = document.getElementById('email');
const button = document.querySelector('button');
const text = document.querySelector('p');
const container = document.querySelector('.container');

//quando si preme il bottone
button.addEventListener('click', function(){
    let output = "L'email non è presente";
    let classCss = ' bg-red';

    //ciclo che verifica se l'email si trova dentro l'array
    for(let i = 0; i < email.length; i++){
        if(inputEmail.value === email[i]){
            output = "L'email è presente";
            classCss = ' bg-green';
            break;
        }
    }

    //stampa il valore
    text.innerHTML = output;
    container.className = 'container' + classCss;
    console.log(output);
});