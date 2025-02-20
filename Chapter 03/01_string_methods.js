let msg = " Hello World! ";

//TODO: When we use strings methods it doesn't change the original string.But it returns a new string.

// trim() method removes whitespace from both ends of a string.
console.log(msg.trim()); // "Hello World!"

// toUpperCase() method converts a string to uppercase letters.
console.log(msg.toUpperCase()); // " HELLO WORLD! "

// toLowerCase() method converts a string to lowercase letters.
console.log(msg.toLowerCase()); // " hello world! "

//TODO: String Methods with Arguments

let str = "I Love JavaScript!";

console.log(str.indexOf("C#")); // -1
console.log(str.indexOf("Love")); // 2
console.log(str.indexOf("JavaScript!")); // 7
console.log(str.indexOf("o")); // 3

// trim the msg before accessing characters
let trimmedMsg = msg.trim();

// charAt() method returns the character at a specified index (position) in a string.
console.log(trimmedMsg.charAt(0)); // "H"

// charCodeAt() method returns the Unicode of the character at a specified index in a string.
console.log(trimmedMsg.charCodeAt(0)); // 72

// Replace method
let txt = "The quiter you become, the more you are able to hear.";
let newTxt = txt.replace("quiter", "quieter");
console.log(newTxt); // "The quieter you become, the more you are able to hear."

// repeat() method returns a new string with a specified number of copies of the string it was called on.
let word = "Hello";
console.log(word.repeat(3)); // "HelloHelloHello"