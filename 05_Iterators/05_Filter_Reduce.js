const coding = ["js", "ruby", "java", "python", "cpp"];

const values = coding.forEach((x) => {
  // for Each Loop does not return anything
  return x;
});

console.log(values); // Undefined

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filteredNums = myNums.filter((x) => {
  return x > 4;
});

// console.log(filteredNums);

// const newNums = myNums.map((num) => num + 10)

// Chaining of methods
const newNums = myNums
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((x) => x > 40);
console.log(newNums);

// Reduce Methods
let initialValue = 0;

const reducedNums = myNums.reduce((acc, currVal) => {
  return acc + currVal;
}, initialValue);

console.log(reducedNums);
