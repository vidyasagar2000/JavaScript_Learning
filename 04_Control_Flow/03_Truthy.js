const userEmail = "vs@gmail.ai";

if (userEmail) {
  console.log("Got the email");
} else {
  console.log("Didn't got the email");
}

//  falsy value

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//  Truthy Value

// "0", "false", " ", [], {}, function(){}

const mail = [];
if (mail.length === 0) {
  console.log("Mail is empty");
}

const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
  // Converting Object's key to array to check its length
  console.log("Obj is empty");
}

// false == 0 // true
// false == '' // true
// 0 == '' // true
