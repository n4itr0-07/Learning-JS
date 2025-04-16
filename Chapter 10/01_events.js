/*

TODO: DOM Events:
    Events are signals that something has occurred. (user inputs / actions)


TODO: Types of Events:
    1. User Interface Events: triggered by user actions (click, keypress, etc.)
    2. Keyboard Events: triggered by keyboard actions (keydown, keyup, etc.)
    3. Mouse Events: triggered by mouse actions (click, mouseover, etc.)
    4. Form Events: triggered by form actions (submit, change, etc.)
    5. Document Events: triggered by document actions (load, resize, etc.)
    6. Touch Events: triggered by touch actions (touchstart, touchmove, etc.)


    onclick - triggered when an element is clicked
    onmouseover - triggered when the mouse pointer is over an element

*/

// Inline Event Handlers
function showAlert() {
  alert("Button clicked!");
}
function changeColor() {
  document.getElementById("myDiv").style.backgroundColor = "yellow";
}

let btn = document.querySelectorAll("button");

for (btn of btns) {
  btn.onclick = function () {
    alert("Button clicked!");
  };
}
btn.onclick = function () {
  alert("Button clicked!");
};

// alert
btn.onclick = function () {
  alert("Button clicked!");
};

btn.onmouseover = function () {
  document.getElementById("myDiv").style.backgroundColor = "yellow";
};
