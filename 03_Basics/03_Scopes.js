// var c = 300;
let a = 100;
if (true) {
  let a = 10;
  const b = 20;
  // console.log("INNER: ", a); // prints 10
  // var c = 30;
}
// console.log(c); // prints 30
// console.log(a);  // prints 100
// console.log(b);

function one() {
  const userName = "Vidya Sagar";

  function two() {
    const website = "Youtube";
    console.log(userName);
  }
  //   console.log(website); // Give error as website is not defined
  two();
}
one();

// *********************************** Interesting *****************************************
console.log(addOne(5)); // Can call functio before declaration
function addOne(num) {
  return num + 1;
}

// addTwo(5); // Will Give error
// Concept of Hoisting
const addTwo = function (num) {
  return num + 2;
};
