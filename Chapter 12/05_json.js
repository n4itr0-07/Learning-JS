/*

TODO: JSON ~ JavaScript Object Notation
JSON is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate. It is language-independent but uses conventions that are familiar to programmers of the C family of languages, which includes C, C++, C#, Java, JavaScript, Perl, Python, and many others. These properties make JSON an ideal data interchange language.
JSON is often used to transmit data between a server and a web application as an alternative to XML. It is also commonly used for configuration files and data storage in NoSQL databases. JSON is based on a subset of the JavaScript programming language, and its syntax is derived from JavaScript object notation. JSON supports the following data types: 
- Strings: A sequence of characters enclosed in double quotes. For example, "Hello, World!" is a JSON string.
- Numbers: A numeric value, which can be an integer or a floating-point number. For example, 42 and 3.14 are JSON numbers.
- Booleans: A true or false value. For example, true and false are JSON booleans.
- Null: A null value, representing the absence of a value. For example, null is a JSON null value.
- Arrays: An ordered list of values, enclosed in square brackets. For example, [1, 2, 3] is a JSON array.
- Objects: An unordered collection of key-value pairs, enclosed in curly braces. For example, {"name": "John", "age": 30} is a JSON object.
- JSON supports nested structures, allowing for complex data representations. For example, {"person": {"name": "John", "age": 30}} is a JSON object containing another JSON object.
- JSON is often used in web APIs to transmit data between a client and a server. It is easy to parse and generate JSON data in most programming languages, making it a popular choice for data interchange.

- JSON is also commonly used for configuration files, data storage, and data serialization in various applications.
- JSON is a text format that is completely language-independent, making it a popular choice for data interchange between different programming languages and platforms.
- JSON is often used in conjunction with RESTful APIs, where data is transmitted over HTTP using JSON as the data format.
- JSON is widely used in web development, mobile applications, and cloud computing, making it a versatile and widely adopted data format.
- JSON is supported by most programming languages, including JavaScript, Python, Java, C#, and Ruby, making it easy to work with in various environments.
- JSON is often used in conjunction with AJAX (Asynchronous JavaScript and XML) to enable dynamic web applications that can update data without requiring a full page reload.
- JSON is also commonly used in NoSQL databases, such as MongoDB and Couchbase, where data is stored in a flexible, schema-less format.
- JSON is often used in data interchange formats, such as JSON-RPC and JSON-P, which allow for remote procedure calls and cross-domain requests, respectively.

*/

//TODO: Accessing Data from JSON

//JSON.parse() is a built-in JavaScript function that converts a JSON string into a JavaScript object. It takes a JSON string as input and returns the corresponding JavaScript object. This function is commonly used to parse JSON data received from a server or API response.

let jsonRes = '{"fact":"A cat has more bones than a human; humans have 206, but the cat has 230 (some cites list 245 bones, and state that bones may fuse together as the cat ages).","length":156}'

let validJson = JSON.parse(jsonRes);
console.log(validJson); 


//JSON.stringify() is a built-in JavaScript function that converts a JavaScript object into a JSON string. It takes a JavaScript object as input and returns the corresponding JSON string. This function is commonly used to serialize data before sending it to a server or saving it to a file.

let student = {
    name: "John Doe",
    age: 25,
    major: "Computer Science",
    courses: ["JavaScript", "Python", "Java"],
    isEnrolled: true
};

let jsonString = JSON.stringify(student);
console.log(jsonString);