// comparison operators

let a = 5;
let b = 10;

console.log(a == b); // false
console.log(a != b); // true
console.log(a > b); // false
console.log(a < b); // true
console.log(a >= b); // false
console.log(a <= b); // true
console.log(a === b); // false

//  === is strict equality operator and it checks both value and type of the variable or constant. 

console.log(a === "5"); // false

//TODO: Try to understand the difference between == and === operators.
// Non-Numbers Comparison

'a' > 'b'; // false
'a' < 'b'; // true

// In JavaScript, strings are compared based on their Unicode values. The Unicode value of 'a' is 97 and 'b' is 98. So, 'a' < 'b' is true.

'A' > 'a'; // false
'A' < 'a'; // true
'A' > 'B'; // false

// In JavaScript, the Unicode value of 'A' is 65 and 'a' is 97. So, 'A' < 'a' is true. Similarly, the Unicode value of 'A' is 65 and 'B' is 66. So, 'A' > 'B' is false.