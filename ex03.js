// Exercise 3: Write a function `findMissingNumber` that takes an array of integers from 1 to `n`
// with one number missing and returns the missing number.
// Example: findMissingNumber([1, 2, 4, 5]) should return 3.

function findMissingNumber(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] !== 1) {
      missingValue = arr[i] - 1;
    }
  }
  return missingValue;
}

console.log(findMissingNumber([1, 2, 4, 5])); // Expected output: 3
