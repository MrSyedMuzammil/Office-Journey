// console.log('Hello World!');

// Let us print numbers from 1 to 20

// let number = 0;
// while (number <= 20) {
//   console.log(number);
//   number++;
// }

// Let us make an exercise and their reps list through while loop

let exercise = 'Push-ups';
let reps = 1;

// while (reps <= 20) {
//   console.log(`${exercise}: ${reps} reps`);
//   reps += 5;
// }

// Now let us do the nested loop in while syntax

while ( reps <= 5) {
  console.log(`Exercise ${exercise}`)
  reps++;
  
  let pushups = 1;
  while (pushups <= reps) {
    console.log(`Set ${pushups }: ${pushups * 3 } reps`);
    pushups++;
  }
}