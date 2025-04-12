// Allows us to use any CSS selector

// The querySelector() method returns the first element that matches a specified CSS selector(s) in the document.
// The querySelectorAll() method returns all elements that match a specified CSS selector(s) in the document.

document.querySelector("#mainImg"); // <img id="mainImg" src="images/1.jpg" alt="Image 1" width="300" height="200">

document.querySelector("p"); // <p>...</p>

document.querySelector("#myId"); // <p id="myId">...</p>

document.querySelector(".myClass"); // <p class="myClass">...</p>

document.querySelectorAll("p"); // Selects all <p> elements in the document

console.dir(document.querySelector("div a"));
console.dir(document.querySelectorAll("div a"));
