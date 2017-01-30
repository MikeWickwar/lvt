app.controller('FavsCtrl', ['$scope','$http','$q', '$state', 'favoritesService', 'searchService',
 function ($scope, $http, $q, $state, favoritesService, searchService) {
  $scope.title = "Favorites"
  if ('localStorage' in window && window.localStorage !== null) {
    var places = favoritesService.get()
    alert("nonPhone alert balls")
    alert(typeof localStorage)
    alert(typeof localStorage.gvgfavorites)
  }else{
    alert("Phone alert balls")
    var places = favoritesService.getMobile()
  }
  $scope.places = JSON.parse(places);
  console.log($scope.places);

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

  $scope.delFromFavs = function(place){
    favoritesService.delete(place)
    var places = favoritesService.get()
    $scope.places = JSON.parse(places);
  }

  }])
