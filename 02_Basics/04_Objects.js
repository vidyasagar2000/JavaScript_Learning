// const tinderUser = new Object();   Singleton Object
const tinderUser = {}; // Non Singleton Object

tinderUser.id = "123abc";
tinderUser.name = "Sam";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullName: {
    userFullName: {
      firstName: "Vidya",
      lastName: "Sagar",
    },
  },
};

console.log(regularUser.fullName.userFullName.firstName);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

// const obj3 = {obj1, obj2}
// const obj3 = { ...obj1, ...obj2 }; // Spread Operator
const obj3 = Object.assign({}, obj1, obj2); // {} is target and obj1 and obj2 is source

console.log(obj3);

const User = [
  {
    id: 1,
    email: "vs@gmail.com",
  },
  {},
];
console.log(User[0].email);

console.log(Object.keys(tinderUser)); // Loop through a Object and Print all its Keys in form of array
console.log(Object.values(tinderUser)); //  Loop through a Object and Print all its Values in form of array
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("isLoggedIn")); // returns true or false based on property is there or not
