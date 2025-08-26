let newMate = {
  name : "Shah Nawaz Saib",
  intro : function () {
    console.log(`Hi, I'm ${this.name}. I'm a professional Web Developer.`);
  }
}


newMate.intro();

// Let us do some other examples to understand better 

let patient = {
  patientName : "Shah Nawaz Saib",
  doctorName : "Dr. Faiz Muhammad",
  treatmentHistory : ["Headache", "Fever", "Depression"],
  consult : function () {
    console.log(`Dr. ${this.doctorName} is consulting with ${this.patientName}. His treatment history is as follows: ${this.treatmentHistory.join(", ")}`);
  }
}

patient.consult();


let teacher = {
teacherName : "Sir Faiz Muhammad",
speciality: "Web Technologies",

mentorship: function () {
  console.log ("The mentor here ", teacher.teacherName, " is ", "having speciality in ", teacher.speciality);

}
}
teacher.mentorship();