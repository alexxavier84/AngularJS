angular.module("finance1", [])
.factory('currencyConverter', function(){
    var currencies = ['USD', 'EUR', 'INR'];
    var usdToForeignRates = {
        USD: 1,
        EUR: 0.75,
        INR: 68
    };
    var convert = function(amout, inCurr, outCurr){
        return amout * usdToForeignRates[outCurr]/usdToForeignRates[inCurr];
    };
    
    return {
        currencies: currencies,
        covert: convert
    };
});