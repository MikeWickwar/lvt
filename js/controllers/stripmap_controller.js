
//Angular App Module and Controller
app.controller('StripMapCtrl', ['$scope', 'mapService', function ($scope, mapService) {
  console.log("strip map control loaded");
    //if this is not inited before markers is assined markers will be blank

    $scope.casinos = dealLocationsStrip;

    $scope.markers = stripmarkers;
    console.log('set strip markers', $scope.markers);


    $scope.openInfoWindowStrip = function(e, selectedMarker){
      e.preventDefault()
      console.log('inside window info  strip event caused by hover');
      google.maps.event.trigger(selectedMarker, 'click')
    }

    $scope.hotelPanelInit = function(e, markerTitle){
      e.preventDefault()
      $("#stripMapDiv").hide();
      $("#vegasMapDiv").hide();
      $("#hotelPanelWrapper").toggle();
      $scope.$parent.mapName = "The Heat(maps)!"
      // $scope.$apply();
    }


    console.log($scope, " testy scoopey googley mapey");

    $.when(this).done(function(){
      console.log('hiding map controller loded');
      if(initCount === 0){
        $("#stripMapDiv").hide();
      }
    })

}]);
