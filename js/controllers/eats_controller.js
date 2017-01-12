app.controller('EatsCtrl', ['$scope','$http','$q', '$state', 'searchService',
 function ($scope, $http, $q, $state, searchService) {
  $scope.title = "Places to Eat..."
  $scope.test = searchService.googlePlacesSearch()

  }])
