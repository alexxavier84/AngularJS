var myapp = angular.module('spicyApp1', []);

myapp.controller('SpicyController', ['$scope', function($scope){
    $scope.spice = 'very';
    
    $scope.chilliSpicy = function(){
      $scope.spice = 'Chilli';  
    };
    
    $scope.jalapenoSpicy = function(){
      $scope.spice = 'Jalapeno';  
    };
}]);