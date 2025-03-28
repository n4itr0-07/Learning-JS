// De-structuring an array

/*
let [a, b, ...rest] = [1, 2, 3, 4, 5];
console.log(a); // Outputs 1
console.log(b); // Outputs 2

let name = ["Tom", "Jerry", "Spike", "Tyke"];
let [first, second, ...others] = name;
console.log(first); // Outputs Tom
console.log(second); // Outputs Jerry
console.log(first, second);

*/

// De-structuring an object

let student = {
  name: "karan",
  age: 20,
  class: "Btech",
  subjects: ["Python Programming", "Data Structures", "Algorithms"],
  username: "karan123",
  password: "123456",
  email: "karan@gmail.com",
  phone: 1234567890,
};

/*
let username = student.username;
let password = student.password;

                   OR 

let { username, password } = student;

*/

let { username, password, email, phone, ...rest } = student;
console.log(username);
