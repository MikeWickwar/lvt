var openInfoWindow = function(e, selectedMarker){
  e.preventDefault()

  google.maps.event.trigger(selectedMarker, 'click')
}
//Angular App Module and Controller
app.controller('VegasMapCtrl', ['$scope', 'mapService', function ($scope, mapService) {
  console.log('vegas map controller loaded');

  //only will asign markers after init map is done
  mapService.initVegasMap()
  console.log("MAP SERVICE", mapService)
  dfdVegas.done(function() {
    console.log('timing is a real mother ');
    $scope.casinos = dealLocations;
    $scope.markers = dmarkers;
    //should be d markers tryng some shit
console.log($scope.markers, "MARKERS");
  })
  console.log(dmarkers, $scope.markers, "MARKERS ASSIGNED")

  $scope.openInfoWindow = function(e, selectedMarker){
    e.preventDefault()

    google.maps.event.trigger(selectedMarker, 'click')
  }

  $scope.hotelPanelInit = function(e, markerTitle){
    e.preventDefault()
    $("#stripMapDiv").hide();
    $("#vegasMapDiv").hide();
    $("#userMapDiv").hide();
    $("#hotelPanelWrapper").toggle();
    $scope.$parent.hotelPost(markerTitle)
    $scope.$parent.mapName = "The Heat(maps)!"


  }

  console.log($scope.$parent, "parentScope");


}]);
