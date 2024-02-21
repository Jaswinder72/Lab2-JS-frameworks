// Importing the functions from the utilities file
const { 
    welcomeMessage,
    convertUnit,
    mathOperation,
    advancedFunction
} = require('./utilities');

// Calling/invoke the imported functions
// Sample usage of each function
welcomeMessage('Jaswinder', 'Kaur');
console.log("Temperature in Fahrenheit:", convertUnit(25, 'celsiusToFahrenheit'));
console.log("Factorial of 5:", mathOperation(5));
advancedFunction();
