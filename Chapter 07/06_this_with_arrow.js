/*

Arrow function does not have its own this. The value of this inside an arrow function remains the same throughout the lifecycle of the function and is always bound to the value of this in the closest non-arrow parent function.

this with arrow function
------------------------
- Arrow function does not have its own this.
- The value of this inside an arrow function remains the same throughout the lifecycle of the function.
- The value of this is always bound to the value of this in the closest non-arrow parent function.

*/

console.log("Example 1: this with arrow function");

let person = {
    name: "John",
    greet: () => {
        console.log(`Hello ${this.name}!`); // prints "Hello undefined!"
    }
};

person.greet();

// Output:
// Hello undefined!


console.log("Example 2: this with arrow function");

let person2 = {
    name: "John",
    greet: function() {
        console.log(`Hello ${this.name}!`); // prints "Hello John!"
    }
};

person2.greet();