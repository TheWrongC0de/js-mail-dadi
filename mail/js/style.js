 //Chiedi all’utente la sua email
 //controlla che sia nella lista di chi può accedere
 //e stampa un messaggio appropriato;


//var usate
var email , iscritti , presente , text;


//Chiedo la mail
email = prompt("Dichiari la sua email")

console.log(email);

//creo la lista
iscritti = ["scemo@gmail.com" , "scemoo@gmail.com" , "scemooo@gmail.com"];

console.log(iscritti)

textid = document.getElementById('text');

//controllo che sia nella lista
for(var i = 0; i < iscritti.length; i++){
  if (email == iscritti[i]) {
    presente = true;
 }
}
if (presente == true) {
  textid.innerHTML = "Entra pure";
} else {
  textid.innerHTML = "Accesso non abilitato";
}
