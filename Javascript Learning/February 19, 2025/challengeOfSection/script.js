console.log ('Hello World!');


const calcTip = function (bill) {
  return bill >= 40 && bill <= 300 ? bill * 0.15 : bill * 0.20;
}
const bills = [
  22, 295, 176, 440, 37, 105, 10, 1100, 86, 52
];

const tips = [];
const totals = [];

// for (let i = 0; i < bills.length; i++)  {
//   tips.push(calcTip(bills[i]));
//   console.log (tips);
// }

for (let i = 0; i < bills.length; i++) {
  tips[i] = calcTip(bills[i]);
  totals[i] = bills[i] + tips[i];

}
console.log(bills);
console.log(tips);
console.log(totals);

