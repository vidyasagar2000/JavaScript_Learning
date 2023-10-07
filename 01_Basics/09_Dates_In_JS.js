// let myDate = new Date();

// console.log(myDate); // 2023-10-07T12:25:55.435Z
// console.log(myDate.toString()); // Sat Oct 07 2023 17:55:55 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString()); // Sat Oct 07 2023
// console.log(myDate.toLocaleString()); // 7/10/2023, 5:55:55 pm
// console.log(myDate.toLocaleDateString()); //  7/10/2023

// console.log(typeof myDate);  // Object

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3);
// console.log(myCreatedDate.toString()); // Mon Jan 23 2023 05:03:00 GMT+0530 (India Standard Time)

let newDate = new Date("01-14-2023");
console.log(newDate.toLocaleDateString()); // 14/01/2023

let myTimeStamp = Date.now();

console.log(myTimeStamp); // 1696681964233
console.log(newDate.getTime()); // 1673634600000   Used for comparisions

const p = newDate.toLocaleString("default", {
  weekday: "long",
  year: "numeric",
});

console.log(p);
