/*

TODO: More Events:

change event:
    The change event occurs when the value of an element has been changed. (only works on <in), <select>, and <textarea> elements)


input event:
    The input event occurs when the value of an <input> element is changed. It is similar to the change event, but it fires immediately as the user types in the input field.
    It works on all input types, including text, checkbox, radio, and select elements.
    The input event is useful for real-time validation or updating other elements based on the input value.

*/

let inp = document.querySelector("input");
inp.addEventListener("change", function (event) {
    console.log("Change event: " + event.target.value); // Log the value of the input element to the console
});



let inp2 = document.querySelector("#inp2");
inp2.addEventListener("input", function (event) {
    console.log("Input event: " + event.target.value); // Log the value of the input element to the console
});