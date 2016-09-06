
//Angular App Module and Controller
app.controller('StripMapCtrl', ['$scope', 'mapService', function ($scope, mapService) {
    mapService.initStripMap();

    $scope.casinos = dealLocationsStrip;

    $scope.markers = stripmarkers;

    $scope.openInfoWindow = function(e, selectedMarker){
      e.preventDefault()

      google.maps.event.trigger(selectedMarker, 'click')
    }

    $scope.hotelPanelInit = function(e, markerTitle){
      e.preventDefault()
      $("#stripMapDiv").hide();
      $("#vegasMapDiv").hide();
      $("#hotelPanelWrapper").slideToggle();
      $("btnMapToggler").text("Back to the Maps")

    }


    console.log($scope.markers, " testy scoopey googley mapey");



}]);
