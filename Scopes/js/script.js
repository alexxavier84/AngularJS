var app = angular.module("scopeExample", []);

app.controller("GreetController",["$scope", "$rootScope", function($scope, $rootScope){
    $scope.name = "World";
    $rootScope.department = "Angular";
}]);

app.controller("ListController", ["$scope", function($scope){
    $scope.names = ["adasd", "asdasd0f00", "gjuerm"];
}]);