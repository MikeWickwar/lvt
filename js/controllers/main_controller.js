//this needs stripping and customizing for what this app needs, pulled from mean tea
//any services need to be injected in the controller
app.controller('MainController', ['$scope','$http','$q', '$state', 'stripService',
 function ($scope, $http, $q, $state, stripService) {

   console.log('test');
   $scope.user = { user : "",
                   password : ""
                 }
   $scope.onUserLogin = function(e){
      console.log( "userlogin function hit");
        console.log(e);
        $state.transitionTo("dashboard");
      }

    $("#btnMapToggler").on("click", function(){
        console.log("btn map toggler has been clicked");
        $("#stripMapDiv").toggle();
        $("#vegasMapDiv").toggle();

        stripService.initStripMap();

    })


    $scope.init = function(){
      console.log("shhhitt not it");
    }

    $scope.toggler = true;


  }])
