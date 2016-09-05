
//Angular App Module and Controller
app.controller('VegasMapCtrl', function ($scope) {

  $scope.casinos = dealLocations;

  $scope.markers = dmarkers;

  $scope.openInfoWindow = function(e, selectedMarker){
    e.preventDefault()

    google.maps.event.trigger(selectedMarker, 'click')
  }

  console.log($scope.markers, " testy scoopey googley mapey");
  $("#stripMapDiv").toggle();


});
