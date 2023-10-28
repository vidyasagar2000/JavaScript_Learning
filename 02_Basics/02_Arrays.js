const marvel_heroes = ["Thor", "IronMan", "SpiderMan"];
const dc_heroes = ["Superman", "flash", "Batman"];

// marvel_heroes.push(dc_heroes); // dc_heroes will get inserted as an array of object

// Spread Operator
marvel_heroes.push(...dc_heroes); // ** All dc_heroes will get inserted as an individual object inside marvel_heroes
// console.log(marvel_heroes);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const flatArray = anotherArray.flat(Infinity); // Depth Required : 3

console.log(flatArray);

console.log(Array.isArray("Vidya")); // Asking whether it is array or not
console.log(Array.from("Vidya")); // Converting given value into Array => ['V', 'i', 'd', 'y', 'a']
console.log(Array.from({ name: "Vidya" })); // It will not able to convert and will give empty Array []

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));  // Converts Sets of element into an Array
