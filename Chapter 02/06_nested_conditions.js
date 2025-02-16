// Nested conditions
// Nested conditions are when you have a condition inside another condition. For example, you might want to check if a number is greater than 10 and if it is, check if it is also less than 100. Here is an example of nested conditions:

let number = 50;

if (number > 10) {
    if (number < 100) {
        console.log("Number is greater than 10 and less than 100");
    }
    else {
        console.log("Number is greater than 10 but not less than 100");
    }
}