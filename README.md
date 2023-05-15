# Cloning and Pushing to Your Own Repository

1. Fork this repository by clicking the "Fork" button in the top right corner of this page. This will create a copy of this repository in your GitHub account.
2. Clone your forked repository to your local machine using the following command in your terminal:
    - `git clone https://github.com/your-username/javascript-promises-async-await-assignment.git`
    - Replace `your-username` with your GitHub username.
3. Make changes to the files in your local repository as directed in the exercises.
4. After making changes, add, commit and push your changes to your remote repository using the following commands in your terminal:

```
git add .
git commit -m "Add changes as directed in the exercises"
git push origin main
```

Replace `main` with the name of the branch you want

# Asynchronous Programming Approaches Review

One of the key applications of Asynchronous programming is using it to fetch data from
APIs (Application Programming Interfaces).
Nowadays, there are two primary ways that we can deal with manipulating data that comes
in asynchronously: `Promises` and `Async/Await`

## Promises:
Promises represent the eventual completion or failure of an asynchronous operation.
They provide a simple and chainable syntax that allows you to handle these success and error
cases separately with the .then() and .catch() methods when receiving a promise from an API

### Example of Promise Chaining:
```
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((json) => console.log(json));
```
## Async/Await
Async/await is a syntax in JavaScript that simplifies asynchronous programming. It allows you
to write asynchronous code that resembles synchronous code. The async keyword declares a function
as asynchronous, and the await keyword pauses the execution of the function until a promise is resolved.
Error handling is done with a try/catch block. Async/await provides a cleaner and more readable way to
handle promises and sequential asynchronous operations.
Example:

### Example of Async/Await:
```
async function asyncAwaitExample() {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  let json = await response.json();
  console.log(json);
}
```

# Cat Fact Assignment
Choose one of the two approaches discussed above (promise chaining or async/await) and create a
function called `getCatFacts()` that does the following:
1. Takes a number as a parameter.
2. Modifies the following API Endpoint so that the 'limit' query parameter is equal to the inputted number
   - Endpoint: 'https://catfact.ninja/facts?limit=USER_INPUT'
   - E.g. Given the number 5 as input, the API endpoint string should be 'https://catfact.ninja/facts?limit=5'
3. Uses fetch() at the modified endpoint
4. Using the chosen approach (promise chaining or async/await), convert the response to json and return the data in its entirety