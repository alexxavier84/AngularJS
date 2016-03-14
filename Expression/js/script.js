var app = angular.module("expressionExample", []);

app.controller("ExpressionController", ['$scope', function($scope){
    var exprs = $scope.exprs = [];
    $scope.expr = '3*10|currency';
    
    $scope.addExp = function(exp){
      exprs.push(exp);  
    };
    
    $scope.removeExp = function(index){
      exprs.splice(index, 1);  
    };
}]);