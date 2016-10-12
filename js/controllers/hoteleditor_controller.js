
app.controller('HotelEditorCtrl', ['$scope','$http', 'hotelService', '$q', '$compile',
 function ($scope, $http, hotelService, $q, $compile) {

   $scope.Title = "Add or Edit Hotels in the Database";
   $scope.btnTitle = "Edit"
   $scope.newFormToggle = false;
   $scope.editFormToggle = false;
   $scope.editBarToggle = false;

   $scope.newHotel = {};
   $scope.editHotel = {};
   $scope.editThisHotel = {};
   var test = {};

  hotelService.get().then(function(hotels){
    var test = typeof(hotels)
    console.log(test, hotels.data.hotels.hotels, "Hotels from service");
    $scope.hotelData = hotels.data.hotels.hotels;
  })

   $scope.addHotel = function(newHotel){
    console.log(newHotel);
    hotelService.post(newHotel)
   }

   $scope.editHotelPost = function(hotel){
    console.log(hotel);
    hotelService.editPost(hotel)
   }

   $scope.toddleAddEdit = function() {
     console.log('toggle add edit hit');
     $scope.newFormToggle = !$scope.newFormToggle;
     $scope.editBarToggle = !$scope.editBarToggle;

   }

   $scope.editTheHotel = function () {
     var test = $scope.editHotel
     $scope.editHotel = JSON.parse($scope.editHotel)
    console.log(test.name, $scope.editHotel, 'edit this');

    $scope.editFormToggle = !$scope.editFormToggle;

   }

  }])
