// console.log(`Hello world!`);

// function simpleJuicer () {
//   console.log('This is special Juicer');
// }


// simpleJuicer();

// function juicer (banana, apples, oranges) {
//   const juice = `Juicing ${banana} bananas, ${apples} apples, and ${oranges} oranges`;
//   return juice;
// }

// const juiceVar = juicer(5, 10, 2);
// console.log(juiceVar);

// function ageCalculator (age) {
//   const yearsLeft = 60 - age;
//   const yearsLeftInMonths = yearsLeft * 12;
//   const yearsLeftInDays = yearsLeftInMonths * 30;
//   return `You have ${yearsLeft} years left, or approximately ${yearsLeftInMonths} months, and ${yearsLeftInDays} days.`;
// }

// const ageVar = ageCalculator(30);
// console.log(ageVar);



// the function that does not have a name 
// for this we store it inside of a variable. Example code is given  below.

// const ageCalcNameless = function (age) {
//   const yearsLeft = 60 - age;
//   const yearsLeftInMonths = yearsLeft * 12;
//   const yearsLeftInDays = yearsLeft * 30;
//   return `You have ${yearsLeft} years left, or approximately ${yearsLeftInMonths} months, and ${yearsLeftInDays} days.`;
// }

// const ageVarNameless = ageCalcNameless(30);
// console.log(ageVarNameless);


// Using arrow functions to find the birth Year
 const ageFunction = age => 2037 - age;

 console.log(`Your Birth Year is ${ageFunction(40)}`);

