app.controller('EatsCtrl', ['$scope','$http','$q', '$state', 'searchService', 'geoCodingService', 'favoritesService',
 function ($scope, $http, $q, $state, searchService, geoCodingService, favoritesService) {
  $scope.title = "Places to Eat..."
  searchService.getRestaurants()
  $scope.details = []
  $scope.favsTogglers = []

  searchService.dfdRResult.done(function(){
    //fires when restuarants loaded
    console.log(searchService.restaurants);
    $scope.places = searchService.restaurants[0].results.items;
    for(i=0; i < $scope.places.length; i++){
      $scope.places[i].detailsAva = false;
      //below is val that toggles x and heart
      $scope.favsTogglers[i] = false;
    }
  })

  $scope.getDetails = function(link, i){
    if($scope.places[i].detailsAva == true){
      $scope.places[i].detailsAva = false
    }else{
      searchService.getPlaceDetails(link).success(function(details){
        $scope.places[i].details = details
        $scope.places[i].detailsAva = true
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
