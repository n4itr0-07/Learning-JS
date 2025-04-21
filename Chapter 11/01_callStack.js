/*

TODO: Call stack: LIFO (Last In First Out) data structure
- The call stack is a data structure that stores information about the active subroutines of a computer program.

- The call stack is used to keep track of function calls and their execution context.

*/

// Code example 1: Call stack

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

