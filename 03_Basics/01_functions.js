function sayMyName() {
  console.log("Vidya Sagar");
}

// sayMyName  //function Reference
sayMyName(); // function Execution

function addTwoNumbers(a, b) {
  // parameters
  console.log(a + b);
  return a + b;
}
addTwoNumbers(3, "a");
const result = addTwoNumbers(7, 3); // arguments

function loginUserMessage(userName = "VS") {  // Pass User defined value to avoid undefined value
  return `${userName} just logged in`;
}

console.log(loginUserMessage("Vidya Sagar"));  // Vidya Sagar just logged in
console.log(loginUserMessage());  // Undefined just logged in
