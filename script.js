// Declare a variable for the finalCost
var finalCost;
// Declare variable for userInput
var userInput;
// Declare variable for costPerLetter
// Set the variable equal to the cost per letter
var costPerLetter = 5;

function calculate() {
	resetCost();
  getUserInput();
  removeSpaces();
  calcCost();
  displayCost();
}

//Create a function that resets the cost to zero
function resetCost() {
finalCost = 0;
}
//Create a function that gets the user's input
function getUserInput () {
 userInput = document.getElementById("inputName1").value;
}
//This function removes the spaces from the input
function removeSpaces() {
	userInput = userInput.split(" ").join("");
	console.log(userInput);
}

//Create a function that calculates the cost
function calcCost () {
finalCost = userInput.length * costPerLetter;
}

//Create a function that displays the cost
function displayCost() {
 document.getElementById("costOutput").innerHTML = finalCost;
}
