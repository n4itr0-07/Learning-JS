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