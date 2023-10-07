// const score = 400;
// console.log(score);

// const balance = new Number(100.5);
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toFixed(2)); // Gives the precision value till given number after decimal

// const otherNumber = 1223.8966;
// console.log(otherNumber.toPrecision(5)); // It focuses on given number of character and roundOff and it is string

// const hundreds = 1000000;
// console.log(hundreds.toLocaleString("en-IN"));

// *************************************** Maths ****************************************************

// console.log(Math.abs(-8)); // converts value in its absolute
// console.log(Math.round(4.6));  // Rounds Off according to our rule
// console.log(Math.ceil(4.6));   // Rounds off to samllest Integer greater or equal to given value
// console.log(Math.floor(4.6));   // Rounds off to greatest Integer Lesser or equal to given value

// console.log(Math.random()); // Always gives random float number between 0 and 1
console.log(Math.floor(Math.random() * 4) + 1); // Will give number between 1 and 4

let mini = 10;
let maxi = 20;
console.log(Math.floor(Math.random() * (maxi - mini + 1)) + mini);
