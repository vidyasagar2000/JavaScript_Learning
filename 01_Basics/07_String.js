const Name = "Vidya";
const repoCount = 50;

// console.log(Name + repoCount + " Value");  Outdated Syntax

// BackTicks = ``
// String Interpolation
// Can Use PlaceHolders and can inject variables
// Can use Functions also like toLowerCase()
console.log(
  `Hello my name is ${Name.toLowerCase()} and my repo count is ${repoCount}`
);

const userName = new String("VidyaSagar");
// console.log(userName); // [String: 'VidyaSagar']
// console.log(userName[0]); // V
// console.log(userName.length);
// console.log(userName.toLowerCase());
// console.log(userName.substring(1, 3));  // (firstIndex(included), lastIndex(excluded))
// console.log(userName.substr(1, 3));  // (firstIndex(included), length)
// console.log(userName.charAt(5));  // S
// console.log(userName.indexOf('S'));  // 5
// const newString = userName.slice(-8, -5); // (StartPosition(canTakeNegative) ,  finalIndex(canTakeNegative))
// console.log(newString);
// console.log(userName.slice(0, 4));

// const newStringOne = " Vidya  ";
// console.log(newStringOne);
// console.log(newStringOne.trim()); // It removes extra front and back spaces

// const url = "https://vidya.com/vidya%20sagar";

// console.log(url.replace("%20", "-")); //Replaces %20 by - at all positions

// console.log(url.includes("vidya")); // true if present anywhere in string else false

let s = "vidya-sagar-is-very-good-boy";
let arr = s.split('-');    // Converts the string into array based on given parameter inside
console.log(arr);
