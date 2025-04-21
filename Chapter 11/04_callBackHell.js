/*

TODO: Call Back Hell:
- [ ] Call back hell is a situation in which a program becomes difficult to read and maintain due to excessive nesting of callbacks.
- [ ] It occurs when multiple asynchronous operations are chained together, leading to deeply nested code that is hard to follow.

- [ ] Call back hell can make it difficult to handle errors and manage the flow of control in a program.

*/
// h1 = document.querySelector("h1");

// setTimeout(() => {
//     h1.style.color = "red";
// }, 1000);

// setTimeout(() => {
//     h1.style.color = "blue";
// }, 2000);

// setTimeout(() => {
//     h1.style.color = "green";
// }, 3000);

//TODO: Second Method:

h1 = document.querySelector("h1");

function changeColor(color, delay, nextColorChange) {
  setTimeout(() => {
    h1.style.color = color;
    nextColorChange();
  }, delay); // Set the delay for the color change
}

changeColor("red", 1000, () => {
  changeColor("blue", 2000, () => {
    changeColor("green", 3000, () => {
      console.log("All color changes completed"); // Log message
    });
  });
}); // callbacks nesting -> callback hell

// To avoid this we use promises and async/await.
