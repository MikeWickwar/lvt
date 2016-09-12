
app.controller('HotelEditorCtrl', ['$scope','$http', 'hotelService',
 function ($scope, $http, hotelService) {

   $scope.Title = "Add or Edit Hotels in the Database";
   $scope.hotelData = hotelService.get();

   $scope.newHotel = {};

   $scope.addHotel = function(newHotel){
    console.log(newHotel);
    hotelService.post(newHotel)
   }

   console.log($scope.hotelData);



  }])
