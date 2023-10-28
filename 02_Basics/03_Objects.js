// Singleton
// Object.create

// Object Literals

const mySym = Symbol("Key1"); // Declaring Symbol

const User = {
  name: "Vidya",
  "full name": "Vidya Sagar",
  age: 22,
  [mySym]: "myKey1", // Using Symbol as a Key
  location: "Dehri",
  email: "vidya@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// console.log(User.email); // Method od accessing values of Object
User.email = "vidya@chatgpt.com"; // We can change values
// console.log(User["email"]);

// console.log(User.full name);  // Cannot Access like this If Space is there
// console.log(User["full name"]);
// console.log(User[mySym]);
User.greeting = function () {
  console.log("Hello User");
};
User.greeting();

User.greetingTwo = function () {
  console.log(`Hello User ${this["full name"]}`);
};
User.greetingTwo();

Object.freeze(User); // We can freeze the user to not able to changed by anyone
User.email = "vidya@chatgpt.com"; // Since We already have Freezed the User Object, It cannot be changed but also not give error
// console.log(User.email); // vidya@google.com
