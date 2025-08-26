// calculator.js

// Wait until the document has fully loaded.
document.addEventListener("DOMContentLoaded", function() {

  // 1. Get references to the form and result div.
  const calcForm = document.getElementById("calcForm");
  const calcResult = document.getElementById("calcResult");

  // 2. Define arithmetic functions.

  // Function for addition.
  function add(a, b) {
    return a + b;
  }

  // Function for subtraction.
  function subtract(a, b) {
    return a - b;
  }

  // Function for multiplication.
  function multiply(a, b) {
    return a * b;
  }

  // Function for division.
  function divide(a, b) {
    // Check for division by zero.
    if (b === 0) {
      return "Error: Division by zero!";
    }
    return a / b;
  }

  // 3. Attach an event listener to handle form submission.
  calcForm.addEventListener("submit", function(event) {
    // Prevent the default form submission (which would reload the page).
    event.preventDefault();

    // 4. Retrieve the input values.
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let operation = document.getElementById("operation").value;

    // 5. Declare a variable to hold the result.
    let result;

    // 6. Use a series of conditional statements to call the appropriate function.
    if (operation === "add") {
      result = add(num1, num2);
    } else if (operation === "subtract") {
      result = subtract(num1, num2);
    } else if (operation === "multiply") {
      result = multiply(num1, num2);
    } else if (operation === "divide") {
      result = divide(num1, num2);
    } else {
      result = "Invalid operation";
    }

    // 7. Display the result in the result div.
    calcResult.innerHTML = `Result: <strong>${result}</strong>`;
  });
});
