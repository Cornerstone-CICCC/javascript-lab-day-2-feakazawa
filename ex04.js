// Exercise 4: Write a function `mostFrequentChar` that takes a string and returns the character
// that appears the most times. If there is a tie, return the first character that reaches the maximum frequency.
// Example: mostFrequentChar("javascript") should return "a".

// Expected output: "a"

function mostFrequentChar(word) {
  const characters = {};

  for (const char of word) {
    if (!characters[char]) {
      characters[char] = 0;
    }
    characters[char] += 1;
  }

  let mostFrequent = ""; //stores the most frequent char
  let currMax = 0; //stores the number of times it appears

  for (const char of word) {
    if (characters[char] > currMax) {
      currMax = characters[char];
      mostFrequent = char;
    }
  }

  return mostFrequent;
}

console.log(mostFrequentChar("javascript"));
