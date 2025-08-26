// gradeCalculator.js

// Wait until the document has fully loaded.
document.addEventListener("DOMContentLoaded", function() {
  
  // 1. Get the form element and result display element.
  const gradeForm = document.getElementById("gradeForm");
  const resultDiv = document.getElementById("result");
  
  // 2. Add an event listener for when the form is submitted.
  gradeForm.addEventListener("submit", function(event) {
    // Prevent the default form submission (which would reload the page).
    event.preventDefault();
    
    // 3. Retrieve the score entered by the user.
    // The value from the input field is a string, so we convert it to a number.
    let score = Number(document.getElementById("score").value);
    
    // 4. Declare a variable to hold the grade.
    let grade;
    
    // 5. Use conditional statements to determine the grade.
    if (score >= 90) {
      grade = "A";
    } else if (score >= 80) {
      grade = "B";
    } else if (score >= 70) {
      grade = "C";
    } else if (score >= 60) {
      grade = "D";
    } else {
      grade = "F";
    }
    
    // 6. Display the result in the 'result' div.
    resultDiv.innerHTML = `Your grade is: <strong>${grade}</strong>`;
  });
});
