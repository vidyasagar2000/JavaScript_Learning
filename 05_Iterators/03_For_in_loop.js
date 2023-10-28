// for in

const myObj = {
  game1: "NFS",
  game2: "SpiderMan",
};

for (const keys in myObj) {
  // console.log(`${keys} is ${myObj[keys]}`);
}

// In array keys start from 0 and are increasing numbers always that's why there is object where anything can be our key
const programming = ["C++", "java", "python", "ruby"];
for (const keys in programming) {
  // console.log(keys); // Prints 0 1 2 3
  console.log(programming[keys]);
}

// map is not Iterable using for in loop
const map = new Map(); // Stores the unique values
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India");

for(const keys in map){
    console.log(keys); // Doesn't give error but not give output as well
}
