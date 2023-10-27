const age = parseInt( prompt("Inserisci l eta del viaggiatore") );
const distance = parseInt( prompt("Inserisci la distanza del viaggio in km") );
const element = document.getElementById("message")

if( Number.isFinite(age) && Number.isFinite(distance) ) {

    let costo = distance * 0.21;
    console.log("costo iniziale", costo);

    let message = "";

    if(age < 18) {
        costo = costo * 0.8;
        message = `Hai diritto allo sconto junior. `;

    } else if(age > 65) { 
        costo = costo * 0.6;
        message = `Hai diritto allo sconto senior. `;
    } 

    message +=`Costo biglietto: ${costo.toFixed(2)} €`;
    element.innerHTML = message;

} else {
    element.innerHTML = "Errore: i dati inseriti non sono numerici"
}