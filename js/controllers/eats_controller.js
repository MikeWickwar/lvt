app.controller('EatsCtrl', ['$scope','$http','$q', '$state', 'searchService', 'geoCodingService',
 function ($scope, $http, $q, $state, searchService, geoCodingService) {
  $scope.title = "Places to Eat..."
  searchService.getRestaurants()
  $scope.details = []

  searchService.dfdRResult.done(function(){
    console.log(searchService.restaurants);
    $scope.places = searchService.restaurants[0].results.items;
    for(i=0; i < $scope.places.length; i++){
      $scope.places[i].detailsAva = false;
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

  }])
