/*

TODO: Navigation

parentElement
children
previousElementSibling / nextElementSibling

*/

// 1. parentElement
const parent = document.querySelector('.parent');
const child = parent.children[0]; // Get the first child element
console.log(parent); // <div class="parent">...</div>
console.log(child); // <div class="child">...</div>
console.log(parent.parentElement); // <body>...</body>

console.log(parent.children); // HTMLCollection(2) [div.child, div.child]


// 2. children
const childElements = parent.children; // Get all child elements
console.log(childElements); // HTMLCollection(2) [div.child, div.child]


// 3. previousElementSibling / nextElementSibling
const sibling = child.previousElementSibling; // Get the previous sibling element
console.log(sibling); // <div class="child">...</div>

const nextSibling = child.nextElementSibling; // Get the next sibling element
console.log(nextSibling); // <div class="child">...</div>