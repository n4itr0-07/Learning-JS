/*
let newArr = arr.map(some function definitaiton or name);
*/

let num = [1, 2, 3, 4, 5];

let double = num.map((el) => {
    return el * 2;
});
console.log(double)


/*
let newArr = arr.filter(some function definitaiton or name);

*/

let nums = [2, 3, 1, 4, 5, 6, 7, 8, 9]

let even = nums.filter((num) => (num % 2 == 0));