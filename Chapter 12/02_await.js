/*

TODO: Await Keyword:

    pauses the execution of its surrounding async function until the Promise is resolved or rejected.
    The value of the resolved Promise is returned, or the rejected value is thrown.

*/

// Example 1: Using await with a Promise

async function fetchData() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data fetched!"), 2000); // Simulate a 2-second delay
  });

  let result = await promise; // Wait for the promise to resolve
  console.log(result); // Output: Data fetched!
}

fetchData(); // Call the async function
fetchData(); // Call the async function

// In short await pauses the execution of the async function until the Promise is resolved or rejected.