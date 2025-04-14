/*

TODO: Manipulating Style with JavaScript

style Property

obj.style

TODO: using classList

obj.classList.add(className)
classList.remove(className)
classList.toggle(className)
classlist.contains(className)
classList.replace(oldClass, newClass)
*/

let heading = document.querySelector('h1');

heading.style.color = 'red'; // Change the text color to red


//TODO: using classList
heading.classList.add('highlight'); // Add a class to the element
heading.classList.remove('highlight'); // Remove a class from the element
heading.classList.toggle('highlight'); // Toggle a class on the element
heading.classList.contains('highlight'); // Check if the element has a class
heading.classList.replace('highlight', 'new-highlight'); // Replace a class with another class