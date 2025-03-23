/*

                                                Function Expressions

A function expression is a function that is assigned to a variable. It is not hoisted and can be anonymous.

syntax:
let variable = function(parameters) {
    // code block
};

*/

let name = function(a, b) {
    return a + b;
}
console.log(name(2, 3)); // 5

let hello = function() {
    return "Hello, World!";
}
console.log(hello()); // Hello, World!