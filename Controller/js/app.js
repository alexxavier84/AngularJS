var myapp = angular.module('spicyApp1', []);

myapp.controller('SpicyController', ['$scope', function($scope){
    $scope.spice = 'very';
    $scope.customSpice = 'Custom Spice'
    
    $scope.chilliSpicy = function(){
      $scope.spice = 'Chilli';  
    };
    
    $scope.customSpicy = function(customSpice){
      $scope.spice = customSpice;  
    };
}]);