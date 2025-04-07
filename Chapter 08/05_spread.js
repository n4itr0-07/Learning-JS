/*
                    SPREAD OPERATOR

    The spread operator is a new addition to the set of operators in JavaScript ES6.
    It takes in an iterable (e.g an array) and expands it into individual elements.
    It is denoted by three dots ( ... ).

    The spread operator can be used in the following ways:
    1. To copy an array
    2. To concatenate arrays
    3. To pass elements of an array as arguments to a function
    4. To add elements to an array
    5. To merge objects

*/

let arr = [1, 2, 3, 4, 5];

// Copying an array
let copyArr = [...arr];
// console.log(copyArr); // Outputs [1, 2, 3, 4, 5]

// Concatenating arrays
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let concatArr = [...arr1, ...arr2];
// console.log(concatArr); // Outputs [1, 2, 3, 4, 5, 6]

// Passing elements of an array as arguments to a function

function sum(a, b, c) {
  return a + b + c;
}

let numbers = [1, 2, 3];
let result = sum(...numbers);
// console.log(result); // Outputs 6

// With Object Literals

let data = {
  email: "virus@gmail.com",
  password: "123456",
};

let dataCopy = { ...data, id: 123, name: "Virus" };
console.log(data);

console.log(dataCopy);

// Adding Array elements to Object Literals

let num = [1, 2, 3, 4, 5];
let obj = { ...num };
console.log(obj); // Outputs {0: 1, 1: 2, 2: 3, 3: 4, 4: 5} This will use the index as the key for the object properties and the value as the value for the object properties.
