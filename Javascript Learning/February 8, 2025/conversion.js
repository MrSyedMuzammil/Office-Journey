// Type Conversion and Type Coercion

// TYPE CONVERSION

const independenceDay = '1947';
console.log(independenceDay);


console.log(Number(independenceDay),independenceDay, 2025);

const myName = 'Syed Muzammil';
console.log(myName);
console.log(Number(myName));

console.log(typeof myName);
console.log(typeof independenceDay);
console.log(typeof (Number(myName)));

const anyNumber = 2005;
console.log(anyNumber);
console.log(String(anyNumber));
console.log(typeof (String(anyNumber)));

// TYPE COERCION

// number to string coercion
console.log('I am ' + 22 + ' years old.');

// The Plus + triggers the concatenation
console.log('22' + '20' + '8');

// The Minus - triggers the coercion i.e converts strings to numbers SAME GOES FOR PRODUCT AND DIVISION AS WELL
console.log('22' - '10' - '2');