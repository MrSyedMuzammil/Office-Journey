console.log('Hello world');

const shahNawaz = [
  'Shah Nawaz',
  21,
  'Teacher',
  professors = [
    'Raza Bakhsh',
    'Muhammad Ismail',
    'Ghani Irfan',
    'Fareed'
  ]
];

const newArray = [];
const birthYears = [2001, 2004, 2012, 2003];
const ages = [];

// console.log(shahNawaz);


// for (let i = 0; i < shahNawaz.length; i++) {
//   console.log(shahNawaz[i]);
// }

// for (let i = 0; i < shahNawaz.length; i++) {
//   console.log(typeof shahNawaz[i]);
// }

// for (let i = 0; i < shahNawaz.length; i++) {
//   console.log(`shahNawaz[i], typeof shahNawaz[i],This is number ${i}`)
// }

// Now let us make another array and insert some of the data into it

// for (let i = 0; i < shahNawaz.length; i++) {
//   // console.log(shahNawaz[i]);

//   // newArray[i] = typeof shahNawaz[i]; // suppose in newArray the i = 0 then the same time it is 0 in shahNawaz too and so on
//   newArray.push(typeof shahNawaz[i]); // This is the better version of the above one
// }

// console.log(newArray);

// Now let us add formulae callculation to the loop array

// for (let i = 0; i < birthYears.length; i++) {

//  ages.push(2025- birthYears[i]);

// }

// console.log(ages);


// Now using the continue statement for specificity

// for (let i = 0; i < birthYears.length; i++) {
//   if ( ages[i] < 18 ) continue; //
//   ages.push(2025- birthYears[i]);

// }

// console.log(ages);


// GPT DEBUGGING USING CONSOLE.LOG
// for (let i = 0; i < birthYears.length; i++) {
//   const age = 2025 - birthYears[i];
//   console.log(`Birth Year: ${birthYears[i]}, Calculated Age: ${age}`);
//   ages.push(age);
//   if (age < 18) {
//     console.log(`Age ${age} is less than 18, continuing...`);
//     continue;
//   }
//   // Imagine additional code here that should only run for ages 18+
//   console.log(`Processing age ${age} further...`);
// }


// GPT solution through  Refactored Code
for (let i = 0; i < birthYears.length; i++) {
  const age = 2025 - birthYears[i];
  // Only push the age if it's 18 or above
  if (age < 18) {
    console.log(`Skipping age ${age} (under 18).`);
    continue;
  }
  ages.push(age);
  console.log(`Pushed age ${age} (18 or above).`);
}

console.log('Final ages:', ages);
