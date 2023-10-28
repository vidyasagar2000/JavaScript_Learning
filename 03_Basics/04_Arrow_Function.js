const user = {
  userName: "Vidya",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.userName}, Welcome to website`);
    console.log(this);
  },
};

// user.welcomeMessage()
// user.userName = "Sagar"
// user.welcomeMessage()

// console.log(this); //Here it will give {} but If we will run this code in console of chrome it will give window object

function chai() {
  let userName = "Vidya";
  console.log(this.userName); // Giving Undefined
  //   console.log(this);
}
// chai();
//   Printing "this" inside function will give output as:
/*
  <ref *1> Object [global] {
  global: [Circular *1],.... Lots of values
  
*/

const newChai = () => {
  let userName = "Vidya";
  console.log(this); // It will print {}
};

// newChai();

const addTwo = (num1, num2) => {
  return num1 + num2;
};

const num2 = () => ({ userName: "Vidya" });
console.log(num2());
// const addTwo = (num1, num2) => (num1 + num2);  ANother syntax called Implicit return
