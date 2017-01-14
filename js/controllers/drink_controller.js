app.controller('DrinkCtrl', ['$scope','$http','$q', '$state', 'searchService', 'geoCodingService',
 function ($scope, $http, $q, $state, searchService, geoCodingService) {
  $scope.title = "Places to Drink..."
  searchService.getBars()
  $scope.details = []

  searchService.dfdBResult.done(function(){
    console.log(searchService.bars);
    $scope.places = searchService.bars[0].results.items;
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
