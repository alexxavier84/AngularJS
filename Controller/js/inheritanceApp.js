var app = angular.module("inheritanceApp", []);
app.controller("MainController",['$scope', function($scope){
    $scope.name = 'Alex';
    $scope.timeofday = "Morning";
}]);
app.controller("ChildController",['$scope', function($scope){
    
}]);
app.controller("GrantChildController",['$scope',function($scope){
    $scope.name = 'Ancy';
    $scope.timeofday = "Afternoon";
}]);