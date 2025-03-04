/*
QS: For the given start state of an array, change it to final form using methods.

    start: ['january', 'july', 'march', 'august']
    final: ['july', 'june', 'march', 'august']
*/

let start = ['january', 'july', 'march', 'august'];

// remove the first element
start.shift();
console.log(start); // ['july', 'march', 'august']

// add 'june' at the second position
start.splice(1, 0, 'june');
console.log(start); // ['july', 'june', 'march', 'august']

