/*
TODO: New operator: is used to create an instance of an object. It is used with a constructor function to create a new object. The new operator creates a new object, sets the prototype of the new object to the prototype of the constructor function, and then calls the constructor function with the new object as its context.

*/

// Example of new operator

function Student(name, age, marks) {
  this.name = name;
  this.age = age;
  this.marks = marks;
  this.getMarks = function () {
    return this.marks;
  };
}
// create 4 objects using new operator
const stu1 = new Student("John", 20, 90);
const stu2 = new Student("Jane", 22, 95);
const stu3 = new Student("Jim", 21, 85);
const stu4 = new Student("Jack", 23, 80);
console.log(stu1.getMarks());