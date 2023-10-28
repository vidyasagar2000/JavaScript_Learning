// Can write MultiLine code without curley Braces using Comma
if (false) console.log("Hii"), console.log("Hello");

// == Check the condition for ex: 2 == "2" will give true
// === Checks the type as well for ex:  2 === "2" will give false
// if, else if, else
// &&   ||

// Nullish Coalescing Operator (??) only made for null and undefined
// Takes the value which appear first But checks for null value
let val1;
val1 = 5 ?? 10; // 5 will get assigned
val1 = null ?? 10; // 10 will get assigned
val1 = undefined ?? 5; // 5 will get assigned
val1 = null ?? 3 ?? 4; // 3 will get assigned
console.log(val1);

// Ternary Operator

// condition ? true : false;
const price = 50;
price < 40 ? console.log("I will take it") : console.log("I will not take it");;


