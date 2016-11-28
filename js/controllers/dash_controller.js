function showNav() {
  $("#mainTopHeader").show();
  $("#mainBottomHeader").show();
}

app.controller('DashCtrl', ['$scope','$http','$q', '$state', 'mapService',
 function ($scope, $http, $q, $state, mapService) {

   if ($state.current.name === "dashboard")
    showNav();

  $scope.title = "Dashboard"

  $scope.guest = true;


  }])
