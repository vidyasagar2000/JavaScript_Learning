// ... => Rest Operator
function calculateCartPrice(...num1) {
  return num1;
}
console.log(calculateCartPrice(100, 200, 300, 400)); // [100, 200, 300, 400]

// function calculate(val1, val2, ...num1){
//     return num1;
// }
// console.log(calculate(200, 300, 400, 500, 600)); // [400, 500, 600] Since Inside calculate function val1 = 200 and val2 = 300
// function is returning onlu num1

const user = {
  userName: "Vidya Sagar",
  price: 999,
};

function handleObject(anyObject) {
  console.log(
    `Username is ${anyObject.userName} and price is ${anyObject.price}`
  );
}

handleObject(user);

handleObject({
  userName: "Sagar",
  price: 99,
});

const myArr = [200, 400, 100, 600];

function returnSecondValue(getArray) {
  return getArray[1];
}

console.log(returnSecondValue(myArr));
console.log(returnSecondValue([200,300]));