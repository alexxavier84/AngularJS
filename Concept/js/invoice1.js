angular.module('invoice1', ['finance1'])
.controller('InvoiceController', ['currencyConverter', function(currencyConverter){
    this.qty = 1;
    this.cost = 2;
    this.inCurr = 'EUR';
    this.currencies = currencyConverter.currencies
        
    this.total = function(outCurr){
        return currencyConverter.covert(this.qty*this.cost, this.inCurr, outCurr)
    };
            
    this.pay = function(){
      window.alert("Thanks!");  
    };
}]);