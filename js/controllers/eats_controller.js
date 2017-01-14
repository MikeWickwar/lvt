app.controller('EatsCtrl', ['$scope','$http','$q', '$state', 'searchService', 'geoCodingService',
 function ($scope, $http, $q, $state, searchService, geoCodingService) {
  $scope.title = "Places to Eat..."
  searchService.getRestaurants()
  $scope.details = []

  searchService.dfdRResult.done(function(){
    console.log(searchService.restaurants);
    $scope.places = searchService.restaurants[0].results.items;
    for (var i = 0; i < $scope.places.length; i++) {
      var detailsLink = $scope.places[i].href;
      searchService.getPlaceDetails(detailsLink).success(function(details){
        $scope.details.push(details)
      })
      console.log($scope.details);
    }
    // $scope.$apply()
  })

  }])
