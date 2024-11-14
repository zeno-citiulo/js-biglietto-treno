function calcolaPrezzoBiglietto(km, eta) {
  const prezzoPerKm = 0.21;
  let prezzoTotale = km * prezzoPerKm;

  if (eta < 18) {
      prezzoTotale *= 0.8; // Sconto del 20% per i minorenni
  } else if (eta > 65) {
      prezzoTotale *= 0.6; // Sconto del 40% per gli over 65
  }

  prezzoTotale = prezzoTotale.toFixed(2);

  return prezzoTotale;
}

const km = prompt("Quanti chilometri vuoi percorrere?");
const eta = prompt("Quanti anni ha il passeggero?");

const prezzoFinale = calcolaPrezzoBiglietto(km, eta);

console.log(`Il prezzo totale del viaggio è: €${prezzoFinale}`);