// Exercise 17: Use chaining to extract names of books that 
// are available, sort them by title length, 
// then return the first 2 names in uppercase (array of strings).

const books = [
  { title: "The Hobbit", available: true },
  { title: "Dune", available: true },
  { title: "Foundation", available: false },
  { title: "It", available: true }
]

console.log(
  books
) // Expected output: ["DUNE", "IT"]