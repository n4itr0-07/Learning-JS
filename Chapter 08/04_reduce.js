/*
Reduces the array to a single value

arr.reduce(reducer function with 2 variables for (accumulator, element));

*/

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9].reduce((accumulator, currentElement) => {
    return accumulator + currentElement; // Adds the current element to the accumulator
}, 0); // Initial value of the accumulator is 0

console.log(num); // Outputs the sum of the array
