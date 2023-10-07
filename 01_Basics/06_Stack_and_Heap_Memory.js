// Stack (Primitive Datatypes)

let Name = "Vidya";
let anotherName = Name; // Pass By value only
anotherName = "Sagar"; // Changes will not reflect in original value
console.log(Name);
console.log(anotherName);

// Heap (Non-Primitive Datatypes)

let userOne = {
  email: "user@gmail.com",
  upi: "user@ybl",
};

let userTwo = userOne; // pass by Reference

userTwo.email = "newEmail@gmail.com"; // Changes will reflect in original value

console.log(userOne);
console.log(userTwo);
