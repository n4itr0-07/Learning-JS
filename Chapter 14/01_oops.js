// create 4 objecst seperate sperate

const stu1 = {
  name: "John",
  age: 20,
  marks: 90,
  getMarks: function () {
    return this.marks;
  },
};

const stu2 = {
  name: "Jane",
  age: 22,
  marks: 95,
  getMarks: function () {
    return this.marks;
  },
};

const stu3 = {
  name: "Jim",
  age: 21,
  marks: 85,
  getMarks: function () {
    return this.marks;
  },
};

// Now same code in OOPS

class Student {
  constructor(name, age, marks) {
    this.name = name;
    this.age = age;
    this.marks = marks;
  }

  getMarks() {
    return this.marks;
  }
}
console.log(stu1.getMarks());