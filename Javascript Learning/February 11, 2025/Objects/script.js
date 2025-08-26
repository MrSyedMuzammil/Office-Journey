// Creating an object to represent a car
let car = {
  make: "Toyota",       
  model: "Corolla",     
  year: 2020,           
  color: "blue",
  shape of the car : "awkwardly shaped"        
};


console.log("Car make:", car.make); 


// we can also use bracket notation for accessing the properties of object 
// Benefits : We use this when the properties have spaces seperated names also it works dynamically

console.log("The model year is : ", car["year"]);



// We can add new properties to the object either by using the dot notation or the bracket notation


// First Let us do this through the dot notation

car.condition = "New Car";
console.log("Car Condition: ", car.condition);

// Now throug the bracket notation

car["speed"] = "200kmps";
console.log("Car Speed: ", car["speed"]);