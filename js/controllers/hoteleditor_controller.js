app.controller('HotelEditorCtrl', ['$scope','$http', 'hotelService',
 function ($scope, $http, hotelService) {

   $scope.Title = "Add or Edit Hotels in the Database";

   $http.get('https://vegasbackendapi.herokuapp.com/hotels').then(function(data){
     console.log(data);
     $scope.zenData = data.data;
     });


  }])
