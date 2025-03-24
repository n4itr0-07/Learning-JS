/*
setInterval(function, milliseconds)
------------------------------------

- setInterval() method calls a function or evaluates an expression at specified intervals (in milliseconds).
- The setInterval() method returns an ID which can be used to refer to the timer that is set.
- clearInterval() method stops the execution of the function specified in setInterval().
- The clearInterval() method requires the ID returned by setInterval().
- The ID value returned by setInterval() is used as the parameter for the clearInterval() method.
- The clearInterval() method can be used to prevent the function specified in setInterval() from executing.
- The clearInterval() method stops the execution of the function specified in setInterval().

*/

// Syntax:

// console.log("Example 1: setInterval() method");

// setInterval(() => {
//     console.log("Hello World!");
// } , 1000); // prints "Hello World!" every 1 second

// Output:
// Hello World!
// Hello World!
// Hello World!
// Hello World!
// Hello World!


// But if you want to stop the execution of the function specified in setInterval(), you can use clearInterval() method.

console.log("Example 2: clearInterval() method");

let intervalID = setInterval(() => {
    console.log("Hello World!");
}, 1000); // prints "Hello World!" every 1 second

setTimeout(() => {
    clearInterval(intervalID);
}, 5000); // stops the execution of the function specified in setInterval() after 5 seconds

// Output:
// Hello World!
// Hello World!
// Hello World!
// Hello World!
// Hello World!