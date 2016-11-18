var stripmarkers = [];
var dmarkers = [];

console.log("markers reset", dmarkers, stripmarkers);
app.factory('mapService', function($http, hotelService) {
    var jsondata = {
        initStripMap: function() {
          console.log('map service init strip map fired: strip makers length has been resset');
          stripmarkers.length = 0;

          var lasVegas = new google.maps.LatLng(36.1146532, -115.1742412);

          var map = new google.maps.Map(document.getElementById('vegasStripMap'), {
          center: lasVegas,
          zoom: 14
          });

          var infoWindow = new google.maps.InfoWindow();

          var heatmap = new google.maps.visualization.HeatmapLayer({
          data: heatmapDataStrip,
          radius: 20
          });
          heatmap.setMap(map);

          var createMarker = function (info){
            info.lat = parseFloat(info.lat)
            info.lng = parseFloat(info.lng)


            var marker = new google.maps.Marker({
                map: map,
                position: new google.maps.LatLng(info.lat, info.lng),
                title: info.name
            });
            var string1 = '<div class="infoWindowContent"> ' + info.desc + '</div>'
            var string2 = '<div class="stars">'+ info.stars + '</div>'

            marker.content = string1 + string2;

            google.maps.event.addListener(marker, 'click', function(){
                infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
                infoWindow.open(map, marker);
            });

              stripmarkers.push(marker);

          }

          hotelService.get().then(function(hotels){
            hotels = hotels.data.hotels.hotels
            for (i = 0; i < hotels.length; i++){
              if (hotels[i].isDowntown == false) {
                createMarker(hotels[i]);
              }
            }
          })

          var openInfoWindow = function(e, selectedMarker){
            e.preventDefault();
            google.maps.event.trigger(selectedMarker, 'click');
          }

        },
        initVegasMap: function(){
          var lasVegas = new google.maps.LatLng(36.170488, -115.142809);
          dmarkers.length = 0;

          var map = new google.maps.Map(document.getElementById('vegasMap'), {
          center: lasVegas,
          zoom: 16
          });


          var infoWindow = new google.maps.InfoWindow();

          var heatmap = new google.maps.visualization.HeatmapLayer({
          data: heatmapData,
          radius: 20
          });
          heatmap.setMap(map);


          var createMarker = function (info){
            info.lat = parseFloat(info.lat)
            info.lng = parseFloat(info.lng)

            var marker = new google.maps.Marker({
                map: map,
                position: new google.maps.LatLng(info.lat, info.lng),
                title: info.name
            });

            var string1 = '<div class="infoWindowContent"> ' + info.desc + '</div>'
            var string2 = '<div class="stars">'+ info.stars + '</div>'

            marker.content = string1 + string2;

            google.maps.event.addListener(marker, 'click', function(){
                infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
                infoWindow.open(map, marker);
            });
            dmarkers.push(marker);

          }

          hotelService.get().then(function(hotels){
            hotels = hotels.data.hotels.hotels
            for (i = 0; i < hotels.length; i++){
              if (hotels[i].isDowntown == true) {
                createMarker(hotels[i]);
              }
            }
          })

          var openInfoWindow = function(e, selectedMarker){
            e.preventDefault();
            google.maps.event.trigger(selectedMarker, 'click');
          }
        }
    };
    return jsondata;
});

/////geolocation
app.factory('userMapService', function () {
  var jsondata = {
    initUserLocationMap : function(){
  console.log('user map controller fired');
  // var lasVegas = new google.maps.LatLng(36.170488, -115.142809);

  var map = new google.maps.Map(document.getElementById('UserMap'), {
            center: {lat: 36.170488, lng: -115.142809},
            zoom: 16
          });
          var infoWindow = new google.maps.InfoWindow({map: map});

          // Try HTML5 geolocation.
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
              var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
              };

              infoWindow.setPosition(pos);
              infoWindow.setContent('What\'s up Mikey!? This is your Location!');

              map.setCenter(pos);
            }, function() {
              handleLocationError(true, infoWindow, map.getCenter());
            });
          } else {
            // Browser doesn't support Geolocation
            handleLocationError(false, infoWindow, map.getCenter());
          }
        },
        handleLocationError : function(browserHasGeolocation, infoWindow, pos) {
          infoWindow.setPosition(pos);
          infoWindow.setContent(browserHasGeolocation ?
                                'Error: The Geolocation service failed.' :
                                'Error: Your browser doesn\'t support geolocation.');
                              }
      }
      return jsondata;
});
