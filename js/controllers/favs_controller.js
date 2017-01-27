app.controller('FavsCtrl', ['$scope','$http','$q', '$state', 'favoritesService',
 function ($scope, $http, $q, $state, favoritesService) {
  $scope.title = "Favorites"

  var places = favoritesService.get()
  $scope.places = JSON.parse(places);
  console.log($scope.places);

  console.log($scope.places);

  }])
