/*

TODO: Promises In JS: The promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
- A promise can be in one of three states: pending, fulfilled, or rejected.

- A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
- A promise can be in one of three states: pending, fulfilled, or rejected.

- When a promise is pending, it means that the asynchronous operation is still in progress. When the operation completes successfully, the promise is fulfilled, and when it fails, the promise is rejected.

- Promises provide a way to handle asynchronous operations in a more manageable and readable way compared to traditional callback functions.

- Promises can be chained together using the .then() method, allowing you to handle the result of one asynchronous operation and pass it to the next one in the chain.

- The .catch() method can be used to handle errors that occur in any part of the promise chain.

*/

// function saveToDb(data, success, failure) {
//   let internetSpeed = Math.floor(Math.random() * 10) + 1;
//   if (internetSpeed > 4) {
//     success();
//   } else {
//     failure("Internet speed is slow. Please try again later.");
//   }
// }

// saveToDb("Hello World", () => {
//   console.log("success : Data saved successfully.");
//   saveToDb(
//     "Hello India",
//     () => {
//       console.log("success : Data saved successfully.");
//       saveToDb(
//         "Hello Universe",
//         () => {
//           console.log("success : Data saved successfully.");
//         },
//         (error) => {
//           console.log("failure : " + error);
//         }
//       );
//     },

//     (error) => {
//       console.log("failure : " + error);
//     }
//   );
// });

// This is so so so bad. We need to use promises to avoid this callback hell.
// The above code is an example of callback hell, where multiple nested callbacks make the code difficult to read and maintain.

//TODO: Refactoring the above code using promises:

function saveToDb(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      resolve("Data saved successfully.");
    } else {
      reject("Internet speed is slow. Please try again later.");
    }
  });
}

saveToDb("Hello World")
  .then((message) => {
    console.log("success : " + message);
    return saveToDb("Hello India");
  })
  .then((message) => {
    console.log("success : " + message);
    return saveToDb("Hello Universe");
  })
  .then((message) => {
    console.log("success : " + message);
  })
  .catch((error) => {
    console.log("failure : " + error);
  });
