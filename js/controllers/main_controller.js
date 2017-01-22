//this needs stripping and customizing for what this app needs, pulled from mean tea
//any services need to be injected in the controller

//local
function hideNav() {
  $("#mainTopHeader").hide();
  $("#mainBottomFooter").hide();
}



app.controller('MainController', ['$scope','$http','$q', '$state',
 function ($scope, $http, $q, $state) {

    console.log('STATE', $state);
    if ($state.current.name === "index")
     hideNav();

    $scope.user = { user : "",
                   password : ""
                  }
    $scope.onUserLogin = function(e){
       console.log( "userlogin function hit");
         console.log(e);
         $state.transitionTo("dashboard");
       }

       $(".navbar-nav li a").click(function(event) {
        $(".navbar-collapse").collapse('hide');
      });


  }])
