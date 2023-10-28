// Immediately Invoked Function Expressions (IIFE)
// To protect it from Global Pollutions
// Also Immediately Executes the function

(function chai() {
  // Name IIFE
  console.log(`DB Connected`);
})();
// SemiColon is must to tell that where to stop, else will give error

((name) => {
  console.log(`Hi ${name}`);
})("Vidya");
