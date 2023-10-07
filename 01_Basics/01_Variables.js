const accountId = 144553;
let accountEmail = "vidya@google.com";
var accountPassword = "12345";
accountCity = "Dehri";
let accountState;

// accountId = 2; // Not Allowed
accountEmail = "vs@.com";
accountPassword = "32143";
accountCity = "Delhi";
console.log(accountId);

/* 
Prefer not to use var because of issue in block scope and functional scope
*/

console.table([
  accountEmail,
  accountId,
  accountPassword,
  accountCity,
  accountState,
]);
