function showNav() {
  $("#mainTopHeader").show();
  $("#mainBottomFooter").show();
}

app.controller('DashCtrl', ['$scope','$http','$q', '$state', 'mapService', 'geoCodingService',
 function ($scope, $http, $q, $state, mapService, geoCodingService) {

   if ($state.current.name === "dashboard")
    showNav();

  $scope.title = "Dashboard"

  $scope.guest = true;

  var test = geoCodingService.getLatLng();
  console.log(test, "here are the lt lng")


//testing gauge action here
setInterval(function() {
  var newVal = Math.floor((Math.random() * 179) + 1);

  $('.gauge--3 .semi-circle--mask').attr({
    style: '-webkit-transform: rotate(' + newVal + 'deg);' +
    '-moz-transform: rotate(' + newVal + 'deg);' +
    'transform: rotate(' + newVal + 'deg);'
   });
}, 1000);

  }])
