console.log("Hello World!");

// class PartnerBs {

//   setName(name) {
//     this.name = name;
//   }

//   web () {
//     console.log(`${this.name} said, I am a developer`)
//   }

//   teach () {
//     console.log(`I can teach you how to code and my name is ${this.name}`);
//   }
// }

// const teacher = new PartnerBs();
// teacher.setName("Shah Nawaz");
// teacher.teach();

// const developer = new PartnerBs();
// developer.setName("Shah Nawaz");
// developer.web();


// class ResultData {

//   calculateAverage (num1, num2, num3) {
//     return (num1 + num2 + num3) / 3;
//   }

//   displayResult (average) {
//     console.log(`Your average is ${average}`);
//   }
// }

// const result = new ResultData();

// result.displayResult(result.calculateAverage(5, 10, 15)); 

// // Now Let us do the same things using constructor

// class ClassDetails {

//   constructor (name) {
//     this.name = name;
//   }

//   topFunc() {
//     console.log(`I am the topper in this class and my name is ${this.name}`);
//   }
// }

// const topper = new ClassDetails("Shah Nawaz");
// topper.topFunc();

// class CalculatedResults {

//   score (sub1, sub2, sub3) {
//     total = sub1 + sub2 + sub3; 
//     return total;
//   }
//   constructor (name, score, grade) {
//     this.name = name;
//     this.score = score;

//   }
// }

// Now let us try it with two or more parameters


// class DataOfShahNawaz {
//   constructor (name, age, address, score, grade) {
//     this.name = name;
//     this.age = age;
//     this.address = address;
//     this.score = score;
//     this.grade = grade;
//   }

//     intro() {
//       console.log(`Hello, my name is ${this.name}. I am ${this.age} years old and I live at ${this.address}, I have ${this.score}% marks and my grade is ${this.grade}`);
//     }
  
// }


// const shahNawaz = new DataOfShahNawaz("Shah Nawaz", 20, "BadaBhera, Peshawar", 93, "A1");

// shahNawaz.intro();


// Now let us use the rest parameters i.e an old concept (....anyNameHere)

class DataShahNawazSahib {

  constructor (...allData){
    [this.name,
    this.age,
    this.address,
    this.score,
    this.grade] = allData;
  }

  introRest() {
    console.log(`Hello, my name is ${this.name}. I am ${this.age} years old and I live at ${this.address}, I have ${this.score}% marks and my grade is ${this.grade}`);
  }
}

const shahNawazSahib = new DataShahNawazSahib("Mr ShahNawaz Sahib", 20, "Deans Plaza Office FF424", 94, "A+" ); 

shahNawazSahib.introRest();