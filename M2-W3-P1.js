/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

//? function area (L1,L2) {
//?     let prod= L1 * L2
//?     return prod;
//? }
//?  let result= area (5,7)

//?  console.log(result);

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

//?  function crazySum (n1,n2){
//?     let sum = (n1+n2) 
//?     if (n1 != n2) {
//?         return sum;
//?     }
//?     else (n1 === n2) 
//?         return sum * 3;
//?  }
//? let result = crazySum(10,15)
//? console.log(result);

/* ESERCIZIO 3
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/
//? function crazyDiff (n) {
//?    let x= Math.abs (n - 19);
//?    if (x < 19) {
//?     return x;
//?    }
//?    else (x > 19) 
//?     return x *3;
   
//? }

//? let result =crazyDiff (50)
//? console.log(result);

/* ESERCIZIO 4
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

//? function boundary (n) {
//?     let res= ((n >= 20 && n <= 100) || (n === 400))
//?     return res;
//? }
//? let result = boundary(20)

//? console.log(result);
/* ESERCIZIO 5
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

 function codify (str) {
     let x= "code"
     for (let i = 0; i < str.length; i++) {
        
        
     }

 }

/* ESERCIZIO 6
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

//? function check3and7 (n) {
//?     let mod= (n % 3 === 0) || (n % 7 === 0)
//?     return mod;
//? }

//? let result= check3and7 (21)
//? console.log(result);

/* ESERCIZIO 7
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

//? function reverseString (x) {
//?     var y = "";
//?     for (var i = x.length - 1; i >= 0 ; i--) {
//?         y += x[i]
//?     } 
//? return y;
//? }

//? let result = reverseString('EPICODE')
//? console.log(result);

/* ESERCIZIO 8
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/


//? const upperFirstPhrase = function (str) {
    
//?     let words = str.split(' ') //dividi stringa in array
//?     let finalString = []
//?     for (let i = 0; i < words.length; i++) { //scorri array
//?       let firstChar = words[i].charAt(0) //prendi la prima lettera
//?       console.log(firstChar)
//?       let uppercaseChar = firstChar.toUpperCase()  //rendi il carattere maiuscolo
//?       let cutString = words[i].slice(1) //crea copia della porzione selezionata
//?       let finalWord = uppercaseChar + cutString //unisci il primo carattere in maiuscola al resto
//?       finalString.push(finalWord)
//?     }
//?     console.log(finalString.join('')) //crea stringa da array
//?   }
//?   upperFirstPhrase('hello world')

/* ESERCIZIO 9
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

//? function cutString (str) {
//?     let cut= str.substring (1, str.length - 1)
//?     return cut;

//? }
//? let result =cutString ("Mondo")
//?  console.log(result);

 /* ESERCIZIO 10
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

//? function giveMeRandom (n) {

//? let array = [];

//? for (let i = 0; i < n ; i++) {
//?        let randomNumber = Math.floor(Math.random() * 10);
//?        array.push(randomNumber);
//?     }
//?     return array;
//? }

//? let result = giveMeRandom (2,4)
//? console.log(result);