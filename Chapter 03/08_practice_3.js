/* 
QS: For the given start state of an array, change it to final form using splice.
    start : ['januray', 'july', 'march', 'august']
    final : ['july', 'june' 'march', 'august']

*/

let start = ['january', 'july', 'march', 'august'];
console.log(start);

// // remove the first element
// start.splice(0, 1);
// console.log(start); // ['july', 'march', 'august']

// // add 'june' at the second position
// start.splice(1, 0, 'june');
// console.log(start); // ['july', 'june', 'march', 'august']

start.splice(0, 2, 'july', 'june');
console.log(start); // ['july', 'june', 'march', 'august']