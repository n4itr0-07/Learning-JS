/*
                                Object of Objects

An object can contain another object as a value. This is called an object of objects or nested object.
*/

const classInfo = {
    zahid : {
        name: 'Zahid',
        age: 25,
        city: 'Budgam',
        country: 'India'
    },
    Anees : {
        name: 'Anees',
        age: 26,
        city: 'Srinagar',
        country: 'India'
    },
    Bilal : {
        name: 'Bilal',
        age: 27,
        city: 'Srinagar',
        country: 'India'
    }

};

console.log(classInfo);
/*
{
  zahid: { name: 'Zahid', age: 25, city: 'Budgam', country: 'India' },
  Anees: { name: 'Anees', age: 26, city: 'Srinagar', country: 'India' },
  Bilal: { name: 'Bilal', age: 27, city: 'Srinagar', country: 'India' }
}
*/

console.log(classInfo.zahid);
/*
{
  name: 'Zahid',
  age: 25,
  city: 'Budgam',
  country: 'India'
}
*/