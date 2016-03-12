angular.module('invoice1', [])
.controller('InvoiceController', function(){
    this.qty = 1;
    this.cost = 2;
    this.inCurr = 'EUR';
    this.currencies = ['USD', 'EUR', 'INR'];
    this.usdToForeignRates = {
        USD: 1,
        EUR: 0.74,
        INR: 68
    };
    
    this.total = function(outCurr){
        return this.convertCurrency(this.qty*this.cost, this.inCurr, outCurr)
    };
    
    this.convertCurrency = function(amout, inCurr, outCurr){
        return amout * this.usdToForeignRates[outCurr]/this.usdToForeignRates[inCurr];
    };
    
    this.pay = function(){
      window.alert("Thanks!");  
    };
});