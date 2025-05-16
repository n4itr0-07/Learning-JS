/*

TODO: Class are a template for creating objects

The constructor method is a special method of a class for creating and initializing an object instance of that class.

*/

/*  ------------------------------ Example 1 ------------------------------ */

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const person1 = new Person("Putin", 30);
const person2 = new Person("King Jhon", 25);
