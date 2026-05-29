// Exercise 16: Use chaining to double the even numbers and then sum them.
// Example: [3, 10, 15, 7, 22, 18] → 100
// Use method chaining and write the solution in one line

const numbers = [3, 10, 15, 7, 22, 18];

console.log(
  numbers
    .filter((num) => num % 2 === 0)
    .map((num) => num * 2)
    .reduce((total, num) => total + num, 0),
); // Expected output: 100
