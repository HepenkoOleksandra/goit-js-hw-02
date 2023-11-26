'use strict'

function checkForSpam(message) {
    const spamMessage = message.toLowerCase();
    return spamMessage.includes('spam') || spamMessage.includes('sale');
}

console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

// const result1 = checkForSpam("Latest technology news");
// console.log(result1);
// const result2 = checkForSpam("JavaScript weekly newsletter");
// console.log(result2);
// const result3 = checkForSpam("Get best sale offers now!");
// console.log(result3);
// const result4 = checkForSpam("Amazing SalE, only tonight!");
// console.log(result4);
// const result5 = checkForSpam("Trust me, this is not a spam message");
// console.log(result5);
// const result6 = checkForSpam("Get rid of sPaM emails. Our book in on sale!");
// console.log(result6);
// const result7 = checkForSpam("[SPAM] How to earn fast money?");
// console.log(result7);