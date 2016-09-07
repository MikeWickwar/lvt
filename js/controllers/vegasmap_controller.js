var openInfoWindow = function(e, selectedMarker){
  e.preventDefault()

  google.maps.event.trigger(selectedMarker, 'click')
}
//Angular App Module and Controller
app.controller('VegasMapCtrl', ['$scope', 'mapService', function ($scope, mapService) {
  console.log('vegas map controller loaded');
  mapService.initVegasMap();

  $scope.casinos = dealLocations;

  $scope.markers = dmarkers;

  $scope.openInfoWindow = function(e, selectedMarker){
    e.preventDefault()

    google.maps.event.trigger(selectedMarker, 'click')
  }

  $scope.hotelPanelInit = function(e){
    e.preventDefault()
    $("#stripMapDiv").hide();
    $("#vegasMapDiv").hide();
    $("#hotelPanelWrapper").slideToggle();
    $("btnMapToggler").text("Back to the Maps")

  }

  console.log($scope.markers, " testy scoopey googley mapey");


}]);
