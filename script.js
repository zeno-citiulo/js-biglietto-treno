const prezzoPerKm = 0.21;
const minorenniSconto = 20;
const overSconto = 40;
const overLimite = 65

let message, price;

const age = parseInt(prompt('Quanti anni hai?'));
const km = parseInt(prompt('Quanti Km devi percorrere?'));

price = km * prezzoPerKm;

if (age < 18) {
  price -= price * minorenniSconto / 100;
  message = `Sei minorenne quindi hai lo scondo del ${minorenniSconto}%!
  Il prezzo del tuo biglietto è di ${price.toFixed(2)}
  `
} else if (age >= overSconto) {
  price -= price * overSconto / 100;
  message = `Hai più di ${overLimite} anni quindi hai lo sconto del ${overSconto}%!
  Il prezzo del tuo biglietto è di € ${price.toFixed(2)}
  `
} else {
  message = `Il prezzo del tuo biglietto è di € ${price}`
}

console.log(message);
