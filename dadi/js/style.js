//Gioco dei dadi, chi fa di più vince;

//lancio del giocatore
var dadoGiocatore = Math.floor ((Math.random()* 6)+ 1);

// lancio del pc
var dadoPc = Math.floor ((Math.random()* 6)+ 1);

//html
var mess = "Il tuo numero è " + dadoGiocatore + " mentre il pc ha totalizzato " + dadoPc;
var testoid = document.getElementById('testo')

//disputa
if (dadoGiocatore > dadoPc) {
  testoid.innerHTML = "Hai vinto scemo"
}
else if (dadoGiocatore < dadoPc) {
  testoid.innerHTML = "Manco a dadi vinci ******e"
}
else {
  testoid.innerHTML = "Hai pareggiato contro un rottame , ben fatto"
}
