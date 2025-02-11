// Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz. Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.


// Creazione del ciclo 

for (let i = 1; i <= 100; i++) {

    // Creare la condizione per verificare che il programma stampi Fizz se un numero è divisibile per 3, se divisibile per 5 allora stampa Buzz, se divisibile sia per 3 che per 5 allora stampa Fizz Buzz

    if (i % 3 === 0) {
        console.log('Fizz');
        
    } else if (i % 5 === 0) {
        console.log('Buzz');
        
    } else if (i % 3 === 0 && i % 5 === 0) {
        console.log('Fizz Buzz');
        
    } else {
        console.log(i);
        
    }

}