var initCount = 0;

app.controller('hotelMapsPanelCtrl', ['$scope', 'mapService', function ($scope, mapService) {
  $scope.mapName = "The Strip Map"
  $("#hotelPanelWrapper").hide();
  mapService.initStripMap()

  //listeners


  $("#btnMapToggler").on("click", function(){
      console.log("btn map toggler has been clicked");
      $("#vegasMapDiv").slideToggle();
      $("#stripMapDiv").slideToggle();

      if (initCount === 0) {
        console.log("init strip map only");
          $.when(mapService.initStripMap()).done(function(){
            if (stripmarkers > 12){
              stripmap.splice(0, 12)
              console.log("strip map has been spliced");
            }
          })
          initCount++
      }
      //toggle button name
      $scope.mapName === "The Strip Map" ? $scope.mapName = "Downtown" : $scope.mapName = "The Strip Map";

  })



}]);
