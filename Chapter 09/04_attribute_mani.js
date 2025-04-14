/*

TODO: Manipulating Attributes

obj.getAttribute(attr)
obj.setAttribute(attr, value)
obj.removeAttribute(attr)
obj.hasAttribute(attr)

*/

// Example: Manipulating Attributes

const img = document.querySelector('img');
console.log(img.getAttribute('src')); // images/1.jpg

console.log(img.getAttribute('alt')); // Image 1


// Set the alt attribute to a new value
img.setAttribute('alt', 'New Image 1');
console.log(img.getAttribute('alt')); // New Image 1


// Remove the alt attribute
img.removeAttribute('alt');
console.log(img.getAttribute('alt')); // null


// Check if the src attribute exists
console.log(img.hasAttribute('src')); // true