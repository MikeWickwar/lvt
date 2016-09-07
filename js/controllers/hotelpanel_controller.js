var initCount = 0;

app.controller('hotelMapsPanelCtrl', ['$scope', 'mapService', function ($scope, mapService) {
  $scope.mapName = "The Strip Map";
  $("#hotelPanelWrapper").hide();
  mapService.initStripMap()

  //listeners


  $("#btnMapToggler").on("click", function(){
      console.log("btn map toggler has been clicked");

      $("#hotelPanelWrapper").hide();

      setMap();
      $scope.$apply();

      if (initCount === 0) {
        console.log("init strip map only");
        mapService.initStripMap()
          initCount++
      }
      //toggle button name


  })

  function setMap() {
    switch ($scope.mapName) {
      case "The Strip Map":
      console.log("strip map case", $scope.mapName);
        $("#vegasMapDiv").slideToggle();
        $("#stripMapDiv").slideToggle();
        return $scope.mapName = "Downtown"
        break;
      case "Downtown":
        console.log("Downtown case", $scope.mapName);
        $("#vegasMapDiv").slideToggle();
        $("#stripMapDiv").slideToggle();
        return $scope.mapName = "The Strip Map"
        break;
      case "The Heat(maps)!":
        console.log("heatmaps case", $scope.mapName);
        $("#vegasMapDiv").slideToggle();
        $("#hotelPanelWrapper").hide();
        return $scope.mapName = "The Strip Map"
        break;
      default:

    }
  }



}]);
