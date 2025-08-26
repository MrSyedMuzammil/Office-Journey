
'use strict';
// Destruturing the Array

const classMates = ['Shah Nawaz', 'Syed Muzammil', 'Shakir Saib', 'Mustafa Saib', 'Rayyan Saib'];

// printing for checking array first
console.log(classMates);
// console.log(classMates[1]);

// First let us do the way we did before
// let mainPlayer = classMates[0];
// console.log(mainPlayer);

// Now let's use destructuring to assign the first element to a variable

let [mainPlayer, shgard, ...others] = classMates; // we have used rest operator here i.e ...Anything  we can also skip the elements using the comma here for example mainPlayer, , ...others it will skip shagard here respectively
// We can also use default values for example, mainPlayer='Syed Muzammil', shgard='Mustafa Saib', ...others etc this only works when they are not assigned initially i.e the destructured array is let[mainPlayer] here we have not defined shagard, ...others etc.
console.log(shgard);
console.log(mainPlayer);


// Now the Objects Destructuring

let kingMan = {
  name: 'Shah Nawaz',
  age: 21,
  nationality: 'Pakistani'
}

// printing for checking object first
console.log(kingMan);

// Now let's do the way we did before

const manlyMan = kingMan.name;
console.log(manlyMan);

// Now let's use destructuring to assign the first element to a variable

const {name, nationality} = kingMan;

console.log(name);
console.log(nationality);


// Renaming variable names 

const userInfo = { name: 'Bob', age: 30 };

// Destructuring with renaming:
const { name: userName, age: userAge } = userInfo;
console.log(userName, userAge); 

 // Destructuring in Function Parameters

 function displayUser({ name, age, city = 'Unknown' }) {
  console.log(`Name: ${name}, Age: ${age}, City: ${city}`);
}

const userDetail = { name: 'ShahNawazSaib', age: 21 };
displayUser(userDetail);

// Combining Array and Object Destructuring

const users = [
  { id: 1, name: 'Eve', role: 'admin' },
  { id: 2, name: 'Frank', role: 'user' }
];

const [{ id: firstId, name: firstName }, secondUser] = users;
console.log(firstId, firstName); 
console.log(secondUser);        

