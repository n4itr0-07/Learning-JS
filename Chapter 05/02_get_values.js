/* 
                                GET VALUES

JS automatically converts objects keys to strings.
Even if we made the number as a key, the number will be converted to string.

*/

const obj = {
    1: "Hello",
    2: "World",
    3: "!",
    null: "Null",
    true: "True",
    undefined: "Undefined"
};

console.log(obj);
// These all values are converted to string as keys are converted to string.
