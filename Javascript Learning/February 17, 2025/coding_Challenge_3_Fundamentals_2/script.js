console.log('Hello World!');

const markMiller = {
  name: 'Mark Miller',
  mass: 78,
  height: 1.69,  

  calcBMI: function() {
   this.bmi = this.mass / (this.height * this.height )
    return this.bmi
  }

}

markMiller.calcBMI();
// console.log(markMiller.mass); // for checking if could access this property
console.log(markMiller.bmi);

const johnSmith = {
  name: 'John Smith',
  mass: 92,
  height: 1.95,

  calcBMI: function() {
    this.bmi = this.mass / (this.height * this.height )
     return this.bmi
   }
  }


  // This is the 1st way to write this 

  // johnSmith.calcBMI();
  // console.log(johnSmith.bmi);

  // Thi is the second way I practiced myself

  console.log(johnSmith.calcBMI(this.bmi));

  // This is the third way I learnt from the solution

  console.log(johnSmith.bmi, markMiller.bmi);


  // Now let us do the console as required from the challenge 


  if (markMiller.bmi > johnSmith.bmi) {

    console.log(`${markMiller.name}'s BMI (${markMiller.calcBMI(this.bmi)}) is higher than ${johnSmith.name}'s (${johnSmith.calcBMI(this.bmi)})`)
  }
  else {
    console.log(`${johnSmith.name}'s BMI (${johnSmith.calcBMI(this.bmi)}) is lower than ${markMiller.name}'s (${markMiller.calcBMI(this.bmi)})`)
  }


 
  