//QS: For the given string:
    // let msg = "help";
// Trim it & convert it to uppercase.

let msg = "help!";
let trimmedMsg = msg.trim();
console.log(trimmedMsg); // "help!"
let upperCaseMsg = trimmedMsg.toUpperCase();
console.log(upperCaseMsg); // "HELP!"

/*
QS2:- For the string -> let name = "Mr Robot", predict the output of the following:
      name.slice(4, 9) -> ?
      name.indexOf("bo") -> ?
      name.replace("Mr", "Hello") -> ?

*/

let name = "Mr Robot";
console.log(name.slice(4, 9)); // "obot"
console.log(name.indexOf("bo")); // 5
console.log(name.replace("Mr", "Hello")); // "Hello Robot"