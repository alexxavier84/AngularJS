angular.module("finance1", [])
.factory('currencyConverter', ['$http', function($http){
    var YAHOO_FINANCE_URL_PATTERN =
        '//query.yahooapis.com/v1/public/yql?q=select * from '+
        'yahoo.finance.xchange where pair in ("PAIRS")&format=json&'+
        'env=store://datatables.org/alltableswithkeys&callback=JSON_CALLBACK';
    var currencies = ['USD', 'EUR', 'INR'];
    var usdToForeignRates = {};
    var convert = function(amout, inCurr, outCurr){
        return amout * usdToForeignRates[outCurr]/usdToForeignRates[inCurr];
    };
    
    var refresh = function(){
        var url = YAHOO_FINANCE_URL_PATTERN.replace('PAIRS', 'USD' + currencies.join('","USD'));
        return $http.jsonp(url).then(function(respose){
            var newUsdToForeignRates = {};
            angular.forEach(respose.data.query.results.rate, function(rate){
                var currency = rate.id.substring(3,6);
                newUsdToForeignRates[currency] = window.parseFloat(rate.Rate);
            });
            usdToForeignRates = newUsdToForeignRates;
        });
    };
    
    refresh();
    
    return {
        currencies: currencies,
        covert: convert
    };
}]);