
//Angular App Module and Controller
app.controller('UserMapCtrl', ['$scope', 'userMapService', function ($scope, userMapService) {
  console.log("user map control loaded");

  $scope.title = "User Map"

    userMapService.initUserLocationMap();



}]);
