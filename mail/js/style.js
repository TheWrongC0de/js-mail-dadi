 //Chiedi all’utente la sua email
 //controlla che sia nella lista di chi può accedere
 //e stampa un messaggio appropriato;


//var usate
var email , iscritti , presente;


//Chiedo la mail
var email = prompt ("Dichiari la sua email")

console.log(email);

//creo la lista
var iscritti = ["scemo@gmail.com" , "scemoo@gmail.com" , "scemooo@gmail.com"];

console.log(iscritti)

//controllo che sia nella lista
for(var i = 0; i < iscritti.length; i++){
  if (email == iscritti) {
    presente = true;
  }
}

if (presente == true) {
    text.innerHTML = "Entra pure";
} else {
  text.innerHTML = "Accesso non abilitato";
}
