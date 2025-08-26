let studentsHere = ["Syed Muzammil", "Shah Nawaz", "Abdus Salam"];

console.log(studentsHere);  


studentsHere.push("Idrees");
console.log("After Push ", studentsHere);

// studentsHere.pop(2);

const removedStudent = studentsHere.pop();
console.log("The removed student is ", removedStudent);

studentsHere.unshift(removedStudent);
console.log("Now after the addition of the students again ", studentsHere);

studentsHere.unshift("Abdullah");
console.log("Now after the addition of the students again ", studentsHere);

studentsHere.pop();
console.log("Now after removal of last student ", studentsHere);

studentsHere.push("Anybody");
console.log("Other students added ", studentsHere);

console.log("The total students at office are ", studentsHere.length);

// Using a for loop to iterate over the array.
for (let i = 0; i < studentsHere.length; i++) {
  console.log("Students at index " + i + ":", studentsHere[i]);
}
