let currenceyOne = 100;
let currenceyTwo = 0;
let exchangeRate = 1.2;

function convertCurrencey(amount, rate){
    return amount * rate;
}

currenceyTwo = convertCurrencey(currenceyOne, exchangeRate);
console.log(currenceyTwo);
