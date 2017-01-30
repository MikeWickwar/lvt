app.controller('DrinkCtrl', ['$scope','$http','$q', '$state', 'searchService', 'geoCodingService',
 function ($scope, $http, $q, $state, searchService, geoCodingService) {
  $scope.title = "Places to Drink..."
  searchService.getBars()
  $scope.details = []
  $scope.favsTogglers = []


  searchService.dfdBResult.done(function(){
    console.log(searchService.bars);
    $scope.places = searchService.bars[0].results.items;
    for(i=0; i < $scope.places.length; i++){
      $scope.places[i].detailsAva = false;
      $scope.favsTogglers[i] = false;

    }
  })

  $scope.getDetails = function(link, i){
    if($scope.places[i].detailsAva == true){
      $scope.places[i].detailsAva = false
    }else{
      searchService.getPlaceDetails(link).success(function(details){
        $scope.places[i].details = details
        $scope.places[i].detailsAva = true;
        console.log(details, "details");
      })
      console.log($scope.details);
    }
  }

  $scope.addToFavs = function(data, i){
     console.log(data, "place to favoite");
     var place = data
     $scope.favsTogglers[i] = true
     favoritesService.post(place)
  }

  $scope.delFromFavs = function(place, i){
    favoritesService.delete(place)
    $scope.favsTogglers[i] = false

  }


  }])
