//this needs stripping and customizing for what this app needs, pulled from mean tea
//any services need to be injected in the controller
app.controller('MainController', ['$scope','$http','$q', '$state',
 function ($scope, $http, $q, $state) {
   $scope.user = { user : "",
                   password : ""
                 }
   $scope.onUserLogin = function(){
      console.log( "userlogin function hit");
        console.log($scope.user.user);
        $state.transitionTo("dashboard", [$scope.user.user, $scope.user.password]);
      }

  }])
