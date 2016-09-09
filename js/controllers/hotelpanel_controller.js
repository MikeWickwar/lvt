var initCount = 0;
var userinitCount = 0;

app.controller('hotelMapsPanelCtrl', ['$scope', 'mapService', 'hotelService', 'userMapService', function ($scope, mapService, hotelService, userMapService) {
  $scope.mapName = "The Strip Map";
  $scope.userMapName = "Homies Map";
  $scope.hotel = hotelService.get();
  $scope.hotelPost = function(hotel){
    hotelService.post(hotel);
  }

  console.log($scope.hotel);

  $("#hotelPanelWrapper").hide();
  mapService.initStripMap()


  //listeners
  $("#btnMapToggler").on("click", function(){
      console.log("btn map toggler has been clicked");
      $("#hotelPanelWrapper").hide();

      //toggle button name and map
      setMap();
      $scope.$apply();
  })

  $("#btnUserMapToggler").click(function(){
      setUserMap();
      $scope.$apply();
  })

//functions
  function setMap() {
    switch ($scope.mapName) {
      case "The Strip Map":
      console.log("strip map case", $scope.mapName);
        $("#vegasMapDiv").slideToggle();
        $("#stripMapDiv").slideToggle();

        if (initCount === 0) {
          console.log("init strip map only");
          mapService.initStripMap()
            initCount++
        }

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

  function setUserMap() {
    switch ($scope.userMapName) {
      case "Homies Map":
        console.log("homies map case", $scope.userMapName);
        $("#vegasMapDiv").hide();
        $("#stripMapDiv").hide();
        $("#hotelPanelWrapper").hide();
        $("#btnMapToggler").hide();
        $("#userMapDiv").show();

        if (userinitCount === 0) {
          console.log("init strip map only");
          userMapService.initUserLocationMap();
            userinitCount++
        }
        return $scope.userMapName = "Back"
        break;
      case "Back":
        console.log("Downtown case", $scope.mapName);
        $("#userMapDiv").slideToggle();
        $("#vegasMapDiv").slideToggle();
        $("#btnMapToggler").show();
        return $scope.userMapName = "Homies Map"
        break;
      }

    }


}]);
