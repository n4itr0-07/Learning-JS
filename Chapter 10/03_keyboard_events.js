/*

TODO: Keyboard Events
- [ ] Add keyboard event listeners to the document
- [ ] Use the keydown and keyup events to detect when a key is pressed or released
- [ ] Use the keypress event to detect when a character key is pressed
- [ ] Use the event object to get information about the key that was pressed or released


*/

let inp = document.querySelector("input");

inp.addEventListener("keydown", function (event) {
    console.log("Key down: " + event.key); // Log the key that was pressed
}
);

inp.addEventListener("keyup", function (event) {
    console.log("Key up: " + event.key); // Log the key that was released
}
);

inp.addEventListener("keypress", function (event) {
    console.log("Key press: " + event.key); // Log the key that was pressed
}
);
