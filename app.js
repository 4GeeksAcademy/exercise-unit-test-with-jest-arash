// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07,  // us dollar
    "GBP": 0.87   // british pound
};

// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function (valueInEuro) {
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    // return the dollar value
    return valueInDollar;
};

// Convert from dollar to yen (USD -> EUR -> JPY)
const fromDollarToYen = function (valueInDollar) {
    let valueInEuro = valueInDollar / oneEuroIs.USD;
    let valueInYen = valueInEuro * oneEuroIs.JPY;
    return valueInYen;
};

// Convert from yen to pound (JPY -> EUR -> GBP)
const fromYenToPound = function (valueInYen) {
    let valueInEuro = valueInYen / oneEuroIs.JPY;
    let valueInPound = valueInEuro * oneEuroIs.GBP;
    return valueInPound;
};

// This is my function that sums two numbers
const sum = (a, b) => {
    return a + b;
};

//  console log for myself
console.log(sum(7, 3));

// export with all functions
module.exports = {
    sum,
    fromEuroToDollar,
    fromDollarToYen,
    fromYenToPound
};