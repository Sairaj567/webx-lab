angular.module('userApp')
.service('UserService', function() {
  var users = [];

  this.registerUser = function(user) {
    users.push(angular.copy(user));
    console.log('Registered Users:', users);
  };
});

