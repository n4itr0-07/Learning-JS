// Arrys are data structures that can hold multiple values. They are declared using square brackets and can hold any type of data.

// Arrys are linear data structures that can hold multiple values. They are declared using square brackets and can hold any type of data. (Linear mean that the elements are stored in a sequence, one after the other.)

//TODO: In JS arrays can hold any type of data, including numbers, strings, booleans, objects, and even other arrays. Not like C++ or Java, where arrays can only hold elements of the same type.

// Arrays are zero-indexed, which means that the first element is at index 0, the second element is at index 1, and so on.

// Arrays are objects in JavaScript, so they have properties and methods that can be used to manipulate them.

let num = [1, 2, 3, 4, 5];
console.log(num); // [1, 2, 3, 4, 5]
console.log(num.length); // 5
console.log(num[0]); // 1

let info = ["John", "Doe", 30, true];
console.log(info); // ["John", "Doe", 30, true]
console.log(info.length); // 4
console.log(info[1]); // "Doe"
console.log(typeof info); // "object"

// empty array
let emptyArr = [];
console.log(emptyArr); // []

// Arrays are mutable, which means that you can change their elements after they are created.
emptyArr[0] = 100;
console.log(emptyArr); // [100]
