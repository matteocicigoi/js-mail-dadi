# Esercizi: Mail - Gioco dei dadi

## Mail

- array contenete le email accettate
    - esempio1@mail.it
    - esemprio2@mail.it
- recupera gli elementi dal DOM e li salva nelle variabili
- quando si preme il bottone "controlla"
    - variabile "output" con il valore: "l'email non è presente"
    - variabile "classCss" con il valore: "bg-red"
    - ciclo for da 0 alla lunghezza del array
        - se l'email inserita dal utente è uguale quella del array
            - variabile output con il valore: "l'email è presente"
            - variabile "classCss" con il valore:"bg-green"
            - termina il ciclo
    - stampa "output"

## Gioco dei dadi

- variabile "utente" contenente un numero da 1 a 6 (generato)
- variabile "computer" contenente un numero da 1 a 6 (generato)
- variabile "output"
- se "utente" > "computer"
    - variabile output con il valore: "ha vinto l'utente"
- se "utente" < "computer
    - variabile output con il valore: "ha vinto il computer"
- altrimenti
    - variabile output con il valore: "pareggio"
- stampa "output"