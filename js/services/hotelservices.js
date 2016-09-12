app.factory('hotelService', function ($http) {
  var hotels = $http.get('https://vegasbackendapi.herokuapp.com/hotels').then(function(data){
       console.log(data, "hotel service has procured the backend data");
       });

  var jsondata = {
    get: function () {
      return hotels
    },
    post: function (postinghotel) {
      console.log(postinghotel, "here is the data about to be posted");
      //this will obvs have to change when deployed to the deployed url
      var request = $.ajax({
        url: "http://localhost:3000/hotels",
        method: "POST",
        data: postinghotel,
        dataType: "html"
          });

      // hotels.forEach(function (hotel) {
      //   if (hotel.name === postinghotel.item) {
      //     console.log('Iam already in here');
      //
      //   }
      // })
      return request.done(function(response){
        console.log("post request done...", response);
      })
    }
  }
  return jsondata
})
