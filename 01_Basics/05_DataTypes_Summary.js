// Primitive (Reference by value)
// 7 types: Number, String, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3; // dynamically typed language

const isLoggedIn = true;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");
// console.log(id);
// console.log(anotherId);
// console.log(id === anotherId); // false

// Refrence (Non Primitive)
// Array, Object, Functions

const heroes = ["saktiman", "naagraj", "doga"]; //Array

let myObj = {                   // Object
  name: "Vidya",
  age: 22,
};

const myFunction = function () {            
  console.log("Hello World");
};

console.log(typeof myFunction); // function  //called as FunctionObject or ObjectFunction
console.log(typeof heroes); // Object
console.log(typeof myObj); // Object


