/*
                                SCOPE

    Scope is the current context of code, which determines the accessibility of variables to JavaScript. The two types of scope are:
    1. Global Scope
    2. Local Scope
    3. Block Scope
    4. Function Scope
    5. Lexical Scope
    6. Module Scope

*/

//TODO: Function Scope: Variables declared inside a function are in the function scope. They are only accessible within the function.

function printName(name) {
    let greeting = "Hello";
    console.log(`${greeting}, ${name}`);
}
// console.log(greeting); // ReferenceError: greeting is not defined
printName("Elliot");



//TODO: Global Scope: Variables declared outside a function are in the global scope. They are accessible throughout the program.

let greeting = "Hello";
function printName(name) {
    console.log(`${greeting}, ${name}`);
}
printName("Elliot"); 

//TODO: Block Scope: Variables declared inside a block are in the block scope. They are only accessible within the block.

if (true) {
    let message = "Hello";
    console.log(message);
}
//FIXME: console.log(message); // ReferenceError: message is not defined


//TODO: Lexical Scope: Lexical scope is the scope of a variable defined by its location within the source code. It is also known as static scope.

