// Slicing strings is a common operation in JavaScript. The slice() method extracts a section of a string and returns it as a new string, without modifying the original string. The slice() method takes two arguments: the starting index and the ending index. If the ending index is not specified, the slice() method extracts the rest of the string. If the starting index is negative, it counts from the end of the string. The slice() method is similar to the substring() method, but it allows negative indexes. Here are some examples of using the slice() method:

// let msg = "Hello, World!";
// console.log(msg.slice(7)); // "World!"
// console.log(msg.slice(7, 12)); // "World"

let msg = "Hello, World!";
console.log(msg.slice(7)); // "World!"
console.log(msg.slice(7, 12)); // "World"
console.log(msg.slice(-6)); // "World!"
console.log(msg.slice(0, 5)); // "Hello"
console.log(msg.slice(-13, -8)); // "Hello"
console.log(msg.slice(7, -1)); // "World"
console.log(msg.slice(1, 5)); // "ello"