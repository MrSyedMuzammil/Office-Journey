// profile.js

// Wait for the document to fully load.
document.addEventListener("DOMContentLoaded", function() {
  
  // 1. Define a user profile object with various properties.
  const userProfile = {
    firstName: "John",
    lastName: "Doe",
    age: 28,
    phoneNumber: "0311111111",
    occupation: "Teacher",
    email: "john.doe@example.com",
    address: {
      street: "456 Elm Street",
      city: "Somewhere",
      country: "USA"
    },
    // Method to return the full name.
    getFullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };

  // 2. Get a reference to the profile container div.
  const profileContainer = document.getElementById("profileContainer");

  // 3. Create HTML content to display the user profile.
  const profileHTML = `
    <h2>${userProfile.getFullName()}</h2>
    <p><strong>Age:</strong> ${userProfile.age}</p>
    <p><strong>Email:</strong> ${userProfile.email}</p>
    <p><strong>Address:</strong> ${userProfile.address.street}, ${userProfile.address.city}, ${userProfile.address.country}</p>
  `;

  // 4. Insert the HTML into the profile container.
  profileContainer.innerHTML = profileHTML;
});
