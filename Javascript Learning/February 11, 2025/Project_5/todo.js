// todo.js

// Wait for the DOM to fully load.
document.addEventListener("DOMContentLoaded", function() {

  // 1. Get references to the form, input, and task list elements.
  const todoForm = document.getElementById("todoForm");
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  // 2. Initialize an empty array to hold tasks.
  let tasks = [];

  // 3. Add an event listener to handle form submission.
  todoForm.addEventListener("submit", function(event) {
    // Prevent the default form submission behavior (page reload).
    event.preventDefault();

    // 4. Retrieve the task from the input field.
    let newTask = taskInput.value.trim();

    // 5. If the input is not empty, add the task to the tasks array.
    if (newTask !== "") {
      tasks.push(newTask);
      // Clear the input field for the next task.
      taskInput.value = "";
      // Update the displayed task list.
      displayTasks();
    }
  });

  // 6. Function to display tasks.
  function displayTasks() {
    // Clear the current task list.
    taskList.innerHTML = "";
    
    // Iterate over the tasks array and create a list item for each task.
    tasks.forEach(function(task, index) {
      // Create a new list item element.
      let li = document.createElement("li");
      li.textContent = task;
      
      // Optionally, add a button to remove the task.
      let removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.style.marginLeft = "10px";
      removeButton.addEventListener("click", function() {
        // Remove the task at the current index.
        tasks.splice(index, 1);
        // Refresh the task list display.
        displayTasks();
      });
      
      // Append the remove button to the list item.
      li.appendChild(removeButton);
      
      // Append the list item to the task list.
      taskList.appendChild(li);
    });
  }
});
