/*

TODO: JavaScript is single-threaded:
- JavaScript is single-threaded, meaning it can only execute one piece of code at a time.
- This is important for understanding how JavaScript handles asynchronous operations and the event loop.

- The single-threaded nature of JavaScript means that long-running operations can block the execution of other code, leading to performance issues.
- To avoid blocking the main thread, JavaScript uses asynchronous programming techniques, such as callbacks, promises, and async/await.

- These techniques allow JavaScript to perform non-blocking operations, enabling it to handle multiple tasks concurrently without blocking the main thread.

- This is achieved through the use of the event loop, which manages the execution of asynchronous code and ensures that the main thread remains responsive.

- The event loop continuously checks the call stack and the message queue, executing tasks from the queue when the call stack is empty.

- This allows JavaScript to handle events, such as user interactions and network requests, without blocking the main thread.


*/

let a = 25;
console.log(a); // 25

let b = 30;
console.log(b); // 30

console.log(a + b); // 55


setTimeout(() => {
    console.log("Timeout executed"); // Log message
}, 2000); // 2 seconds delay

setTimeout(() => {
    console.log("Timeout executed"); // Log message
}, 2000); // 2 seconds delay. In this code two work are scheduled to same time but js is single threaded so this is done by browser.

console.log("After setTimeout"); // Log message

