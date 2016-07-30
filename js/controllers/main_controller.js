//this needs stripping and customizing for what this app needs, pulled from mean tea
//any services need to be injected in the controller
app.controller('MainController', ['$scope','$http','$q', '$state',
 function ($scope, $http, $q, $state) {

   console.log('test');
   $scope.user = { user : "",
                   password : ""
                 }
   $scope.onUserLogin = function(e){
      console.log( "userlogin function hit");
        console.log(e);
        $state.transitionTo("dashboard");
      }

  }])
