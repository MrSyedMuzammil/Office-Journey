let bill = 100;

// if ( bill >= 50 && bill <= 300) {
//   console.log(`The bill was ${bill}, the tip was ${bill*0.15}, and the total value ${bill+ (bill*0.15)}.`)
// }else {
//   console.log(`The bill was ${bill}, the tip was ${bill*0.20}, and the total value ${bill+ (bill*0.20)}.`)
// }

// Let us do it the second way

if (bill >= 50 && bill <= 300) {
  let tip = bill * 0.15;
  let total = bill + tip;
  console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${total}.`)
}
else {
  let tip = bill * 0.20;
  let total = bill + tip;
  console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${total}.`)
}

// Let us do this using the ternary operator

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}.`)

