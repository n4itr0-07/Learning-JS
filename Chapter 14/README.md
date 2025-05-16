# Object-Oriented Programming (OOP) in JavaScript

Object-Oriented Programming (OOP) is a programming paradigm based on the concept of "objects", which can contain data and code: data in the form of properties (often called fields), and code, in the form of methods (functions).

---

## 1. OOP Theory

- **Objects**: Real-world entities with properties and behaviors.
- **Classes**: Blueprints for creating objects (introduced in ES6 for JavaScript).
- **Encapsulation**: Bundling data and methods that operate on that data within one unit (object).
- **Abstraction**: Hiding complex implementation details and showing only the necessary features.
- **Inheritance**: Mechanism to create new classes from existing ones, inheriting properties and methods.
- **Polymorphism**: Ability to use a common interface for different data types.

---

## 2. Types of OOP

### 2.1. Class-based OOP

- Uses classes as blueprints for objects.
- JavaScript supports this since ES6.

### 2.2. Prototype-based OOP

- Objects inherit directly from other objects.
- JavaScript's original OOP model.

---

## 3. OOP in JavaScript: All Types & Subtypes

### 3.1. Class-based OOP

#### a) Defining a Class

```js
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}
```

#### b) Creating an Object

```js
const dog = new Animal("Dog");
dog.speak(); // Dog makes a noise.
```

#### c) Inheritance

```js
class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}
const pet = new Dog("Buddy");
pet.speak(); // Buddy barks.
```

#### d) Encapsulation

```js
class Person {
  #ssn; // private field
  constructor(name, ssn) {
    this.name = name;
    this.#ssn = ssn;
  }
  getSSN() {
    return this.#ssn;
  }
}
const p = new Person("Alice", "123-45-6789");
console.log(p.getSSN()); // 123-45-6789
```

#### e) Polymorphism

```js
class Bird {
  speak() {
    console.log("Chirp!");
  }
}
class Parrot extends Bird {
  speak() {
    console.log("Squawk!");
  }
}
function makeItSpeak(animal) {
  animal.speak();
}
makeItSpeak(new Bird()); // Chirp!
makeItSpeak(new Parrot()); // Squawk!
```

---

### 3.2. Prototype-based OOP

#### a) Creating Objects with Prototypes

```js
const animal = {
  speak() {
    console.log(`${this.name} makes a noise.`);
  },
};
const dog = Object.create(animal);
dog.name = "Dog";
dog.speak(); // Dog makes a noise.
```

#### b) Constructor Functions

```js
function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function () {
  console.log(`${this.name} makes a noise.`);
};
const cat = new Animal("Cat");
cat.speak(); // Cat makes a noise.
```

---

## 4. OOP Subtypes & Concepts in Detail

### 4.1. Encapsulation

- **Public**: Accessible from outside the class.
- **Private**: Only accessible within the class (using `#` in JS).

```js
class Counter {
  #count = 0;
  increment() {
    this.#count++;
  }
  get value() {
    return this.#count;
  }
}
const c = new Counter();
c.increment();
console.log(c.value); // 1
```

### 4.2. Inheritance

- Allows a class to inherit properties and methods from another class.

```js
class Vehicle {
  drive() {
    console.log("Driving...");
  }
}
class Car extends Vehicle {
  honk() {
    console.log("Beep!");
  }
}
const myCar = new Car();
myCar.drive(); // Driving...
myCar.honk(); // Beep!
```

### 4.3. Polymorphism

- Same method name behaves differently in different classes.

```js
class Shape {
  area() {
    return 0;
  }
}
class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }
  area() {
    return this.side * this.side;
  }
}
class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  area() {
    return Math.PI * this.radius * this.radius;
  }
}
const shapes = [new Square(2), new Circle(3)];
shapes.forEach((s) => console.log(s.area()));
```

### 4.4. Abstraction

- Hiding details and showing only essentials.

```js
class Database {
  connect() {
    /* ... */
  }
  query(sql) {
    /* ... */
  }
}
```

---

## 5. Advanced OOP Concepts

### 5.1. Static Methods & Properties

```js
class MathUtil {
  static add(a, b) {
    return a + b;
  }
}
console.log(MathUtil.add(2, 3)); // 5
```

### 5.2. Getters & Setters

```js
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  get area() {
    return this.width * this.height;
  }
}
const rect = new Rectangle(5, 4);
console.log(rect.area); // 20
```

### 5.3. Mixins (Multiple Inheritance)

```js
let canEat = {
  eat() {
    console.log("Eating");
  },
};
let canWalk = {
  walk() {
    console.log("Walking");
  },
};
class Person {}
Object.assign(Person.prototype, canEat, canWalk);
const user = new Person();
user.eat(); // Eating
user.walk(); // Walking
```

---

## 6. Summary Table

| Concept       | Description                             | Example Code Reference        |
| ------------- | --------------------------------------- | ----------------------------- |
| Class         | Blueprint for objects                   | `class Animal {}`             |
| Object        | Instance of a class                     | `const dog = new Animal()`    |
| Encapsulation | Hiding internal details                 | `#privateField`               |
| Inheritance   | Acquiring properties from another class | `class Dog extends Animal {}` |
| Polymorphism  | Many forms (method overriding)          | `speak()` in subclasses       |
| Abstraction   | Hiding complexity                       | `class Database {}`           |
| Static        | Belongs to class, not instance          | `static add()`                |
| Getter/Setter | Accessor methods                        | `get area()`                  |
| Mixin         | Multiple behaviors                      | `Object.assign()`             |

---

> **Explore, experiment, and practice! OOP is a powerful way to structure your code for scalability and maintainability.**
