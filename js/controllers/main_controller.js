//this needs stripping and customizing for what this app needs, pulled from mean tea
//any services need to be injected in the controller
app.controller('MainController', ['$scope','$http','$q', '$state', 'mapService',
 function ($scope, $http, $q, $state, mapService) {

   console.log('test');
   $scope.user = { user : "",
                   password : ""
                 }
   $scope.onUserLogin = function(e){
      console.log( "userlogin function hit");
        console.log(e);
        $state.transitionTo("dashboard");
      }

    var initCount = 0;

    $("#btnMapToggler").on("click", function(){
        console.log("btn map toggler has been clicked");
        $("#stripMapDiv").slideToggle();
        $("#vegasMapDiv").slideToggle();

        if (initCount === 0) {
            mapService.initStripMap()
            initCount++
        }

    })


    $scope.init = function(){
      console.log("shhhitt not it");
    }



  }])
