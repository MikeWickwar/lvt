app.controller('PlayCtrl', ['$scope','$http','$q', '$state', 'searchService', 'geoCodingService',
 function ($scope, $http, $q, $state, searchService, geoCodingService) {
  $scope.title = "Places to Play..."
  searchService.getCasinos()
  $scope.details = []

  searchService.dfdCResult.done(function(){
    console.log(searchService.casinos);
    $scope.places = searchService.casinos[0].results.items;
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
