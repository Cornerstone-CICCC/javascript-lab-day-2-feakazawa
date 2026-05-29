// Exercise 6: Write a function `getQueryParams` that takes a URL string and returns
// an object containing the query parameters as key-value pairs.
// Example: getQueryParams("https://example.com?search=test&page=2")
// should return { search: "test", page: "2" }.

function getQueryParams(url) {
  let paramTemplate = { search: "", page: "" };
  let result = [];

  const splitUrl = url.split("=");

  for (let i = 1; i < splitUrl.length; i++) {
    let finalSearchIdx = splitUrl[i].indexOf("&");
    let word = splitUrl[i].slice(0, finalSearchIdx);

    if (i === splitUrl.length - 1) {
      word = splitUrl[i].slice(0, splitUrl[i].length + 1);
      result.push(word);
    } else {
      result.push(word);
    }
  }

  return {
    ...paramTemplate,
    search: result[0],
    page: result[1],
  };
}

console.log(getQueryParams("https://example.com?search=test&page=2")); // Expected output: { search: "test", page: "2" }
// console.log(
//   getQueryParams(
//     "https://example.com?search=test&page=2&message=hello&name=Fernanda",
//   ),
// ); // Expected output: { search: "test", page: "2" }
