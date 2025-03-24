/*
this keyword:
- this keyword refers to the object it belongs to.
- It has different values depending on where it is used:
    - In a method, this refers to the owner object.
    - Alone, this refers to the global object.
    - In a function, this refers to the global object.
    - In a function, in strict mode, this is undefined.
    - In an event, this refers to the element that received the event.
    - Methods like call(), and apply() can refer this to any object.
*/

// Example 1: this in a method
let person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

console.log(person.fullName()); // John Doe

// Example 2: this Alone

// In a browser window, this refers to the browser window.
console.log(this === window); // true

// In strict mode, this is undefined.
function myFunction() {
    "use strict";
    return this;
}

console.log(myFunction()); // undefined

// Example 3: this in a function

// In a JavaScript function, the owner of the function is the default binding for this.
function myFunction() {
    return this;
}
