app.factory('AuthService', function () {
  return {
    isAuthenticated: function () {
      var user = $scope.user.user
      var password = $scope.user.password
      console.log('checking auth', user, password);
      return user === 'Mikey' && password === 'mofo';
    }
  }
})
