/*
                            REST OPERATOR

    The rest operator is another new addition to the set of operators in JavaScript ES6.

    It is denoted by three dots ( ... ).

    The rest operator is used to represent an indefinite number of arguments as an array.
    It is used in the function definition to collect all the arguments passed to the function into an array.

    The rest operator can be used in the following ways:
    1. To collect all the arguments passed to a function
    2. To collect the remaining elements of an array
    3. To collect the remaining properties of an object
    4. To destructure an object
    5. To destructure an array

*/

// Collecting all the arguments passed to a function

function sum(...args) {
    return args.reduce((accumulator, currentElement) => accumulator + currentElement, 0);
}

let result = sum(1, 2, 3, 4, 5);
console.log(result); // Outputs 15
