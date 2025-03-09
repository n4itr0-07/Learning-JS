/*
                        FOR Of LOOP

The for...of loop is used to iterate over the elements of an array. It is a new way to loop over any iterable object.

Syntax:
    for (variable of iterable) {
        code block to be executed
    }
*/

let fruits = ["Apple", "Banana", "Mango", "Orange", "Pineapple"];

for (fruits of fruits) {
    console.log(fruits);
}

let str = "Hello World";
for (let char of str) {
    console.log(char);
}

//TODO: Nested for...of loop

let unDefeatedCommanders = [
    ["Khalid ibn al-Walid", "Muhammad bin Qasim", "Tariq ibn Ziyad"],
    ["Alexander the Great", "Julius Caesar", "Napoleon Bonaparte"]
];

for (let commanders of unDefeatedCommanders) {
    for (let commander of commanders) {
        console.log(commander);
    }
}