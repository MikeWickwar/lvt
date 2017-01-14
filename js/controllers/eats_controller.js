app.controller('EatsCtrl', ['$scope','$http','$q', '$state', 'searchService', 'geoCodingService',
 function ($scope, $http, $q, $state, searchService, geoCodingService) {
  $scope.title = "Places to Eat..."
  searchService.get()


  searchService.dfdResult.done(function(){
    console.log(searchService.places);
    $scope.places = searchService.places[0].results.items;
    $scope.$apply()
  })

  }])
