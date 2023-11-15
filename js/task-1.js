// let price = 0;
// const subscription = "pro";
// if (subscription === "free") {
//   price = 100;
// }
// const result = price;
// console.log(result);

// function checkAge(age) {
//     if (age >= 18) {
//   return "You are an adult";
//     }
// }
// const result1 = checkAge(20);
// console.log(result1);
// const result2 = checkAge(17);
// console.log(result2);
// const result3 = checkAge(10);
// console.log(result3);
// const result4 = checkAge(30);
// console.log(result4);

// function checkStorage(available, ordered) {
//   if (available < ordered) {
//     return "Not enough goods in stock!";
//   } else {
//     return "Order is processed, our manager will contact you";
//   }
// }
// const result1 = checkStorage(100, 50);
// console.log(result1);
// const result2 = checkStorage(100, 130);
// console.log(result2);
// const result3 = checkStorage(200, 20);
// console.log(result3);
// const result4 = checkStorage(200, 150);
// console.log(result4);
// const result5 = checkStorage(150, 180);
// console.log(result5);

// function checkStorage(available, ordered) {
// if (ordered === 0) {
//   return "There are no products in the order!";
// } else if (available < ordered) {
//   return "Your order is too large, there are not enough items in stock!";
// } else {
//   return "The order is accepted, our manager will contact you";
// }
// }
// const result1 = checkStorage(100, 50);
// console.log(result1);
// const result2 = checkStorage(100, 130);
// console.log(result2);
// const result3 = checkStorage(70, 0);
// console.log(result3);
// const result4 = checkStorage(200, 20);
// console.log(result4);
// const result5 = checkStorage(200, 250);
// console.log(result5);
// const result6 = checkStorage(150, 0);
// console.log(result6);
// const result7 = checkStorage(80, 80);
// console.log(result7);

function checkPassword(password) {
    const correctPassword = password === "jqueryismyjam" ? "Access granted" : "Access denied, wrong password!";
    return correctPassword;
}

const result = checkPassword("jqueryismyjam");
console.log(result);

const result1 = checkPassword("angul4r1sl1f3");
console.log(result1);

const result2 = checkPassword("r3actsux");
console.log(result2);
