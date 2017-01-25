app.controller('FavsCtrl', ['$scope','$http','$q', '$state', 'favoritesService',
 function ($scope, $http, $q, $state, favoritesService) {
  $scope.title = "Favorites"

  $scope.places =favoritesService.get()
  console.log($scope.places);

  }])
