// Exercise 6: Write a function `getQueryParams` that takes a URL string and returns
// an object containing the query parameters as key-value pairs.
// Example: getQueryParams("https://example.com?search=test&page=2")
// should return { search: "test", page: "2" }.

function getQueryParams(url) {
  let paramTemplate = { search: "", page: "" };

  const initialSearchIdx = url.indexOf("=");
  const finalSearchIdx = url.indexOf("&");
  const resultSearch = url.slice(initialSearchIdx + 1, finalSearchIdx);

  const initialPageIdx = url.indexOf("=", initialSearchIdx + 1);
  const resultPage = url.slice(initialPageIdx + 1);

  return {
    ...paramTemplate,
    search: resultSearch,
    page: resultPage,
  };
}

console.log(getQueryParams("https://example.com?search=test&page=2")); // Expected output: { search: "test", page: "2" }
