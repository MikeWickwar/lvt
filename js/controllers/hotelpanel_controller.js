var initCount = 0;

app.controller('hotelMapsPanelCtrl', ['$scope', 'mapService', function ($scope, mapService) {


  $scope.mapName = "The Strip Map"


  $("#hotelPanelWrapper").hide();
  $("#stripMapDiv").toggle();


  //listeners


  $("#btnMapToggler").on("click", function(){
      console.log("btn map toggler has been clicked");
      $("#vegasMapDiv").slideToggle();
      $("#stripMapDiv").slideToggle();

      if (initCount === 0) {
          mapService.initStripMap()
          initCount++
      }
      //toggle button name
      $scope.mapName === "The Strip Map" ? $scope.mapName = "Downtown" : $scope.mapName = "The Strip Map";

  })



}]);
