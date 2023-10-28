const myArr = [0, 1, 2, 3, 4, true, "Sagar"];
// console.log(myArr[2]);
const myHeroes = ["IronMan", "Captain", "Thor", "Hulk"];
const myArr2 = new Array(1, 2, 3, 4);

// Array Methods
// myArr.push(6);
// // console.log(myArr)
// myArr.pop();
// console.log(myArr);

// myArr.unshift(1); // Add 1 at the beginning of the array and shift every element to idx + 1
// myArr.shift(); // Removes first element from array and shift every element to idx - 1
// myArr.shift();
// console.log(myArr);

// console.log(myArr.includes(3)); // returns true if exists in array
// console.log(myArr.indexOf(5)); // returns -1 if not exists else returns first index
// console.log(myArr.lastIndexOf(3)); // returns last index of that element if present else returns -1

// const newArr = myArr.join();  // Converts whole array into the strings

// console.log(typeof myArr);  //Object
// console.log(typeof newArr); //String


//********************************** Slice And Splice ******************************************
console.log("A ", myArr);
const myn1 = myArr.slice(1, 3);
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3);

console.log(myn2);
console.log("C " , myArr);




