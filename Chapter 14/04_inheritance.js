/*

TODO: Inhenritance: is a mechanism that allows us to create new classes on the basis of already existing classes. It allows us to create a new class that inherits the properties and methods of an existing class. The new class is called the child class or subclass, and the existing class is called the parent class or superclass. Inheritance allows us to create a hierarchy of classes, where each class can inherit from its parent class and add its own properties and methods. This allows us to create a more organized and modular code structure, making it easier to maintain and extend.

*/

// /*  ------------------------------ Example 1 ------------------------------ */

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  talk() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

class Student extends Person {
  constructor(name, age, marks) {
    super(name, age); //TODO: Call the parent class constructor
    // this.name = name;
    // this.age = age;  Now we are using the parent class constructor
    this.marks = marks;
  }
  //   talk() {
  //     console.log(
  //       `Hello, my name is ${this.name} and I am ${this.age} years old.`
  //     );
  //   }
};

let student1 = new Student("Putin", 30, 90);
let student2 = new Student("King Jhon", 25, 95);

class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age); //TODO: Call the parent class constructor
    // this.name = name;
    // this.age = age;
    this.subject = subject;
  }
  //   talk() {
  //     console.log(
  //       `Hello, my name is ${this.name} and I am ${this.age} years old. I teach ${this.subject}.`
  //     );
  //   }
}

let teacher1 = new Teacher("Putin", 30, "Math");
console.log(teacher1);
