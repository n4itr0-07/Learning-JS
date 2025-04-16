/*

TODO: Event Listeners:
    Event listeners are functions that wait for a specific event to occur and then execute a callback function.
    They are more flexible than inline event handlers and allow for multiple events to be attached to the same element.


addEventListener() - adds an event listener to an element
removeEventListener() - removes an event listener from an element

element.addEventListener(event, function, useCapture)
event - the type of event to listen for (e.g., "click", "mouseover", etc.)

*/

btn.addEventListener("click", function () {
    alert("Button clicked!");
});
