/*

TODO: Breakpoints:
- [ ] Add a breakpoint to the first line of the function.
- [ ] Add a breakpoint to the second line of the function.
- [ ] Add a breakpoint to the third line of the function.

*/

// Code example 2: Breakpoints

function first() {
  second(); // Call second function
  console.log("First function executed"); // Log message
}

function second() {
  third(); // Call third function
  console.log("Second function executed"); // Log message
}

function third() {
  console.log("Third function executed"); // Log message
}

first(); // Call first function to start the chain of calls
// console.log("First function executed"); // Log message
