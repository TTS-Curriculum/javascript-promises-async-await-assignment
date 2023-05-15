// START OF REVIEW

// One of the key applications of Asynchronous programming is using it to fetch data from
// APIs (Application Programming Interfaces).
// Nowadays, there are two primary ways that we can deal with manipulating data that comes
// in asynchronously: Promises and Async/Await

// Promises:
// Promises represent the eventual completion or failure of an asynchronous operation.
// They provide a simple and chainable syntax that allows you to handle these success and error
// cases separately with the .then() and .catch() methods when receiving a promise from an API

// Example of Promise Chaining:
// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// Async/Await
// Async/await is a syntax in JavaScript that simplifies asynchronous programming. It allows you
// to write asynchronous code that resembles synchronous code. The async keyword declares a function
// as asynchronous, and the await keyword pauses the execution of the function until a promise is resolved.
// Error handling is done with a try/catch block. Async/await provides a cleaner and more readable way to
// handle promises and sequential asynchronous operations.
// Example:

// Example of Async/Await:
// async function asyncAwaitExample() {
//   let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//   let json = await response.json();
//   console.log(json);
// }

// END OF REVIEW

// START OF ASSIGNMENT
// Choose one of the two approaches discussed above (promise chaining or async/await) and create a
// function called getCatFacts() that does the following:
// 1. Takes a number as a parameter.
// 2. Modifies the following API Endpoint so that the 'limit' query parameter is equal to the inputted number
//    - Endpoint: 'https://catfact.ninja/facts?limit=USER_INPUT'
//    - E.g. Given the number 5 as input, the API endpoint string should be 'https://catfact.ninja/facts?limit=5'
// 3. Uses fetch() at the modified endpoint
// 4. Using the chosen approach (promise chaining or async/await), convert the response to json and return the data in its entirety



//END OF ASSIGNMENT
