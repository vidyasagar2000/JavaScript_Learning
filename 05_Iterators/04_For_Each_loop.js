const programming = ["C++", "java", "python", "ruby"];

// programming.forEach(function (item) {
//   console.log(item);
// });

// programming.forEach((x) => {
//   console.log(x);
// });

function printMe(x) {
  console.log(x);
}

// programming.forEach(printMe); // Giving only refernce not executing here

programming.forEach((item, index, arr) => {
  // console.log(item, index, arr);
});

const coding = [
  {
    languageName: "C++",
    extension: "cpp",
  },
  {
    languageName: "JavaScript",
    extension: "js",
  },
  {
    languageName: "Python",
    extension: "py",
  },
];

coding.forEach((item) => {
    console.log(item.languageName + " has extension as " + item.extension);
})
