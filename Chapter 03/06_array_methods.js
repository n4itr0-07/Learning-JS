// Array Methods

// Arrays are a special type of objects in JavaScript. They are used to store multiple values in a single variable. Arrays are a list-like object that can contain multiple values. They are used to store multiple values in a single variable. Arrays are created using square brackets []. The values in the array are called elements. The elements in the array are indexed starting from 0. The first element is at index 0, the second element is at index 1, and so on. The last element is at index n-1, where n is the number of elements in the array.

// push() Method
let fruits = ["Apple", "Banana", "Orange"];
console.log(fruits); // ["Apple", "Banana", "Orange"]
fruits.push("Mango");
console.log(fruits); // ["Apple", "Banana", "Orange", "Mango"]

// pop() Method
fruits.pop();
console.log(fruits); // ["Apple", "Banana", "Orange"]

// unshift() Method
fruits.unshift("Mango");
console.log(fruits); // ["Mango", "Apple", "Banana", "Orange"]

// shift() Method
fruits.shift();
console.log(fruits); // ["Apple", "Banana", "Orange"]

// IndexOf & Includes
let primary = ["Red", "Blue", "Green"];

console.log(primary.indexOf("Blue")); // 1

console.log(primary.includes("Green")); // true

//TODO: concat() Method & reverse() Method

let first = ["Red", "Blue", "Green"];
let second = ["Yellow", "Purple"];

first.concat(second);
console.log(first.concat(second)); // ["Red", "Blue", "Green", "Yellow", "Purple"]

// reverse() Method
let colors = ["Red", "Blue", "Green"];
colors.reverse();
console.log(colors); // ["Green", "Blue", "Red"]


//TODO: slice() Method : copies a portion of an array to a new array

let hacking_webseries = ["Mr. Robot", "Silicon Valley", "Black Mirror", "Breaking Bad", "Sherlock"];

console.log(hacking_webseries); // ["Mr. Robot", "Silicon Valley", "Black Mirror", "Breaking Bad", "Sherlock"]

let top_3 = hacking_webseries.slice(0, 3);
console.log(top_3); // ["Mr. Robot", "Silicon Valley", "Black Mirror"]

//TODO: splice() Method : removes a portion of an array and returns the removed elements as a new array.

// syntax  : splice(start, deleteCount, item1, item2, ...)

let web_tools = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express"];

console.log(web_tools ); // ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express"]

let removed = web_tools.splice(2, 2);
console.log(removed); // ["JavaScript", "React"]

console.log(web_tools); // ["HTML", "CSS", "Node.js", "Express"]

// add elements
web_tools.splice(2, 0, "Bootstrap", "jQuery");
console.log(web_tools); // ["HTML", "CSS", "Bootstrap", "jQuery", "Node.js", "Express"]

//TODO: sort() Method : sorts the elements of an array in place and returns the sorted array.

let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

console.log(days);

let sorted_days = days.sort();    //  This wll sort the array in place ( like in alphabetical order A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z) and return the sorted array.

console.log(sorted_days); // ["Friday", "Monday", "Saturday", "Sunday", "Thursday", "Tuesday", "Wednesday"]