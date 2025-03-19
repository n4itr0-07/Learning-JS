/*
                                    Functions In JS

Functions are the building blocks of readable, maintainable, and reusable code. A function is a set of statements that performs a task or calculates a value. To use a function, you must define it somewhere in the scope from which you wish to call it.

Functions are used to perform a specific task. You can reuse functions in your code. You can pass parameters to a function. A function can return a value.

Defining a Function
A function definition (also called a function declaration, or function statement) consists of the function keyword, followed by:

The name of the function.

A list of parameters to the function, enclosed in parentheses and separated by commas.

The JavaScript statements that define the function, enclosed in curly brackets, { }.

function name(parameter1, parameter2, parameter3) {

    // code to be executed

}   
*/

function hello() {
    console.log("Hello Wolrd");
}
hello();

function print1to5() {
    for(let i = 1; i <= 5; i++) {
        console.log(i)
    }
}
print1to5();

function isAdult() {
    let age = 99;
    if(age >= 18) {
        console.log("Budda")
    } else {
        console.log("Bacha")
    }
}
isAdult();