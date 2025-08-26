// const dolphinsScore = [96, 108, 89];
// const koalas = [88, 91, 110];

// const dolphinsAverageScore = (96 + 108 + 89)/3;
// // console.log(dolphinsAverageScore); // Just for checking code
// const koalasAverageScore = (88 + 91 + 110)/3;
// console.log(koalasAverageScore);

// const dolphinsWins = dolphinsAverageScore > koalasAverageScore;
// console.log(dolphinsWins); // Just for checking code
// const matchDraw = dolphinsAverageScore === koalasAverageScore;
// console.log(matchDraw); // Just fro checking code 

// if (dolphinsWins) {
//   console.log('Dolphins Wins the match by higher average score')
// }
// else if (matchDraw) {
//   console.log('It is a draw !!');
// }
// else {
//   console.log('Koals Wins the match by higher average score');
// }
// The Above Code's Explanation : If you want to check if all the console.log are working just add a not ! before the dlphinsWins in the condition block and the result will be the last console.log i.e Koalas wins for the mid one just add ! to the mid condition it will say It is a draw as in middle console.log.


// Bonus Challenge 1 of Challenge 3 

const dolphinsScore = (97 + 112 + 81);
const koalasScore = (109 + 95 + 86);

const dolphinsAverageScore = dolphinsScore/ 3;
const koalasAverageScore = koalasScore/ 3;
console.log(dolphinsAverageScore, koalasAverageScore);

const dolphinsMinScore = dolphinsScore >= 100;
const koalasMinScore = koalasScore >= 100;

const dolphinsWins = dolphinsAverageScore > koalasAverageScore;
const koalasWins = koalasAverageScore > dolphinsAverageScore;
const matchDraw = dolphinsAverageScore === koalasAverageScore;

if (dolphinsWins && dolphinsMinScore) {
  console.log('Dolphins Wins the Trophy')
} 
else if (koalasWins && koalasMinScore) {
  console.log('Koalas Wins the Trophy')
}
else if (matchDraw && dolphinsMinScore && koalasMinScore) {
  console.log('Both have won the trophies')
}
else {
  console.log('No one wins the trophy')
}
