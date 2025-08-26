// // Wait for the DOM to load completely
// document.addEventListener("DOMContentLoaded", function() {
//   // Get references to form elements
//   const userForm = document.getElementById("userForm");
//   const displayDiv = document.getElementById("displayInfo");

//   // Listen for form submission
//   userForm.addEventListener("submit", function(event) {
//     // Prevent the default form submission behavior (page reload)
//     event.preventDefault();

//     // Capture user inputs using let and const
//     let name = document.getElementById("name").value;       // String type
//     let age = Number(document.getElementById("age").value);   // Convert input to Number type
//     const isStudent = document.getElementById("isStudent").value === "true"; // Boolean type

//     // Create an object to hold user info
//     const userInfo = {
//       name: name,
//       age: age,
//       isStudent: isStudent
//     };

//     // Display user information in the displayDiv
//     displayDiv.innerHTML = `<h2>User Details</h2>
//                             <p>Name: ${userInfo.name}</p>
//                             <p>Age: ${userInfo.age}</p>
//                             <p>Student: ${userInfo.isStudent ? "Yes" : "No"}</p>`;
//   });
// });


// script.js

// Wait for the HTML document to fully load before running our code.
document.addEventListener("DOMContentLoaded", function() {

  // 1. Get references to HTML elements by their IDs.
  const userForm = document.getElementById("userForm"); // The form element.
  const displayDiv = document.getElementById("displayInfo"); // The div where user info will be shown.

  // 2. Attach an event listener to handle form submission.
  userForm.addEventListener("submit", function(event) {
    // Prevent the form from submitting in the default way, which would reload the page.
    event.preventDefault();

    // 3. Capture the values entered by the user:
    //    - For the name, we get the text from the input field.
    let name = document.getElementById("name").value; // This will be a string.
    
    //    - For the age, we get the value from the number input and convert it to a Number.
    let age = Number(document.getElementById("age").value);
    
    //    - For the student status, we get the value from the select element.
    //      The value is "true" or "false" as a string, so we convert it to a boolean.
    const isStudent = document.getElementById("isStudent").value === "true";

    // 4. Create an object to store the user information.
    //    This groups related data together.
    const userInfo = {
      name: name,     // The user's name.
      age: age,       // The user's age as a number.
      isStudent: isStudent // Boolean indicating if the user is a student.
    };

    // 5. Display the user information on the page.
    //    We use template literals to insert the object's properties into our HTML string.
    displayDiv.innerHTML = `
      <h2>User Details</h2>
      <p><strong>Name:</strong> ${userInfo.name}</p>
      <p><strong>Age:</strong> ${userInfo.age}</p>
      <p><strong>Student:</strong> ${userInfo.isStudent ? "Yes" : "No"}</p>
    `;
  });
});
