//AIzaSyBnIthxzYC1OeHtVmyMxqLjVpVxmpimG8s
/////geolocation
app.factory('geoCodingService', function () {
  var api = "https://maps.googleapis.com/maps/api/geocode/json?address="
  //address should be passed in obventually
  var address = "MGM+Grand+Casino,+Las+Vegas,+NV"
  var api2 = "&key="
  var key = geocodingKey;
  var jsondata = {
    getLatLng : function(){
      var request = $.ajax({
        url: api + address + api2 + key,
        method: "GET"
          });

        return request.done(function(response){
          console.log("geocoding hit and done", response);
        })

      }
    }

      return jsondata;
});
