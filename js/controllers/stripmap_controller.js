
//Angular App Module and Controller
app.controller('StripMapCtrl', ['$scope', 'mapService', function ($scope, mapService) {
    mapService.initVegasMap();

    $scope.casinos = dealLocationsStrip;

    $scope.markers = stripmarkers;

    $scope.openInfoWindow = function(e, selectedMarker){
      e.preventDefault()

      google.maps.event.trigger(selectedMarker, 'click')
    }

    console.log($scope.markers, " testy scoopey googley mapey");
    $("#stripMapDiv").toggle();


}]);
