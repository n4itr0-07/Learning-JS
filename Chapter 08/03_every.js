/*

Returns true if every element of array gives true for some function. Else returns false.

arr.every(some function definitation or name);

*/

let result = [1, 2, 3, 4, 5, 6, 7, 7, 77, 8, 88, 77, 88, 9, 90].every((el) => {
    console.log("Current element:", el);
    return el % 2 === 0; // Check if the element is even
});

console.log("All elements are even:", result);
