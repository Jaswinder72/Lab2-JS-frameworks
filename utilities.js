// First Function: Concatenating text with labels/other text
function welcomeMessage(firstName, lastName) {
    console.log(`Welcome ${firstName} ${lastName} to Georgian College`);
}

// Second Function: Convert measurement units
function convertUnit(value, unitType) {
    switch (unitType) {
        case 'celsiusToFahrenheit':
            return value * 9 / 5 + 32;
        case 'fahrenheitToCelsius':
            return (value - 32) * 5 / 9;
        case 'minutesToHours':
            return value / 60;
        case 'hoursToMinutes':
            return value * 60;
        default:
            return null; // Handle invalid unitType
    }
}

// Third Function: Math operation against numeric value(s)
function mathOperation(value) {
    let result = 1;
    for (let i = 2; i <= value; i++) {
        result *= i;
    }
    return result;
}

// Fourth Function: Advanced function of choice
function advancedFunction() {
    console.log("This is an advanced function.");
}

// Exporting the functions
module.exports = {
    welcomeMessage,
    convertUnit,
    mathOperation,
    advancedFunction
};
