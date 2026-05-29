// Exercise 10: Write a function `convertToCamelCase` that takes a string
// with words separated by spaces or underscores, and returns the string in camelCase format.
// Example: convertToCamelCase("hello_world") should return "helloWorld".

function convertToCamelCase(word) {
  let result = [];

  const split = word.indexOf("_") > 0 ? word.split("_") : word.split(" ");

  for (let i = 1; i < split.length; i++) {
    result.push(split[i][0].toUpperCase() + split[i].slice(1));
  }

  const joinResult = result.join("");

  return `${split[0]}${joinResult}`;
}

console.log(convertToCamelCase("hello_world")); // Expected output: "helloWorld"
// console.log(convertToCamelCase("hello word fer"));
