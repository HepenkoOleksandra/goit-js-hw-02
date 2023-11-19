'use strict'

function makeTransaction(quantity, pricePerDroid, customerCredits) {
  let totalPrice = quantity * pricePerDroid;
  if (totalPrice > customerCredits) {
    return "Insufficient funds!";
  } else {
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`
  }
}

console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"

// const ordered1 = makeTransaction(5, 3000, 23000);
// console.log(ordered1);
// const ordered2 = makeTransaction(3, 1000, 15000);
// console.log(ordered2);
// const ordered3 = makeTransaction(10, 5000, 8000);
// console.log(ordered3);
// const ordered4 = makeTransaction(8, 2000, 10000);
// console.log(ordered4);
// const ordered5 = makeTransaction(10, 500, 5000);
// console.log(ordered5);