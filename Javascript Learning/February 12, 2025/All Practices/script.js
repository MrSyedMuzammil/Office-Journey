

// let idText = document.getElementById("idOne");
// console.log(idText);

// let classText = document.querySelector(".classOne");
// console.log(classText);

// let directHeading = document.querySelector(".headingClass > h1");
// console.log(directHeading);

//  Now let us select multiple at once through querySelector

// let mutltipleSelector = document.querySelector("#idOne, .classOne, .headingClass > h1");
// console.log(mutltipleSelector);


// function changeStyle () {

//   newTextInId ();
//   newColor ();
// }

// function newTextInId () {
  
//   let newInId = document.querySelector("#idOne");
//   newInId.innerHTML = "<h1>You have changed the text successfully through a javascript Function</h1>";
//   newInId.style.color = "red";
  
// }

//  Using the EventListener 

  let newInId = document.getElementById("idOne");
  newInId.addEventListener("click", function () {
    newInId.style.color = "blue";
    newInId.innerHTML = "<h1>You have changed the text successfully through Event Listener</h1>";
  })

// let isOriginal = true;

// function changeText() {
//   let newInId = document.querySelector("#content");
//   if (isOriginal) {
//     newInId.innerHTML = "<h1>You have changed the text successfully through a javascript Function</h1>";
//   } else {
//     newInId.innerHTML = "This is an Id Selector Div";
//   }
//   isOriginal = !isOriginal; // Toggle the value
// }