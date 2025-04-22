angular.module('userApp', [])
.controller('UserController', function($scope, UserService) {
  $scope.user = {};
  $scope.message = '';

  $scope.submitForm = function() {
    if ($scope.regForm.$valid) {
      UserService.registerUser($scope.user);
      $scope.message = 'User registered successfully!';
      $scope.user = {};
      $scope.regForm.$setPristine();
      $scope.regForm.$setUntouched();
    }
  };
});
