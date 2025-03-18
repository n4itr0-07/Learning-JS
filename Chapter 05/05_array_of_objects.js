/*
                                 - Array of Objects

An array can contain objects as its elements. This is called an array of objects.

*/

const classInfo = [
    {
        name: 'Zahid',
        age: 25,
        city: 'Budgam',
        country: 'India'
    },
    {
        name: 'Anees',
        age: 26,
        city: 'Srinagar',
        country: 'India'
    },
    {
        name: 'Bilal',
        age: 27,
        city: 'Srinagar',
        country: 'India'
    }

];

console.log(classInfo);

console.log(classInfo[0]);
/*
{
  name: 'Zahid',
  age: 25,
  city: 'Budgam',
  country: 'India'
}
*/

console.log(classInfo[1].name); // Anees