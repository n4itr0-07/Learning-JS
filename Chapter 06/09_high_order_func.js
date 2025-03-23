/*
High Order Function
A function that takes another function as an argument or returns a function is called a higher-order function.

syntax:
function higherOrderFunction(callback) {
    // code block
    callback();
}

*/
function multipleGreetings(func, n) {
    for (let i = 0; i < n; i++) {
        func();
    }
}

let greet = function() {
    console.log("Hello, World!");
}

multipleGreetings(greet, 5);