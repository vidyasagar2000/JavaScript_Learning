// for of
// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5];

for (const val of arr) {
  //   console.log(val);
}

const greeting = "Hello World!";
for (const greet of greeting) {
  //   console.log(greet);
}

// Maps

const map = new Map(); // Stores the unique values
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India");

// console.log(map);

for (const [key, value] of map) {
//   console.log(key + " : " + value);
}


// Objects are not iterable using for of loop
const myObj = {
  game1: "NFS",
  game2: "SpiderMan",
};



