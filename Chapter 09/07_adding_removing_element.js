/*

TODO: Adding Elements:
- Create a new element using `document.createElement()`.
    appendChild() to add the new element to the DOM.
    append(element) to add the new element to the DOM.
    prepend(element) to add the new element to the DOM.
    insertAdjacent(position, element) to add the new element to the DOM.


TODO: Removing Elements:
- Use `remove()` to remove an element from the DOM.
    removeChild() to remove an element from the DOM.
    replaceChild() to replace an element in the DOM.
    innerHTML = "" to remove all child elements from a parent element.

*/

// Adding a new element to the DOM
const newElement = document.createElement("div");
newElement.textContent = "This is a new div element";
newElement.style.color = "blue";

// Append the new element to the body or a specific container
document.body.appendChild(newElement);

// Removing an element from the DOM
const elementToRemove = document.querySelector(".element-to-remove");
if (elementToRemove) {
  elementToRemove.remove();
}
