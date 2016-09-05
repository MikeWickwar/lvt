app.factory('stripService', function($http) {
    var promise;
    var jsondata = {
        initStripMap: function() {
          $("html").css('background-image', 'url(https://www.excalibur.com/content/dam/MGM/excalibur/casino/poker/excalibur-casino-poker-chips.tif)')
          var lasVegas = new google.maps.LatLng(36.113679, -115.142809);

          var map = new google.maps.Map(document.getElementById('vegasStripMap'), {
          center: lasVegas,
          zoom: 13
          });

          var markers = [];

          var infoWindow = new google.maps.InfoWindow();

          var heatmap = new google.maps.visualization.HeatmapLayer({
          data: heatmapDataStrip,
          radius: 20
          });
          heatmap.setMap(map);


          var createMarker = function (info){

            var marker = new google.maps.Marker({
                map: map,
                position: new google.maps.LatLng(info.lat, info.long),
                title: info.casino
            });
            marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';

            google.maps.event.addListener(marker, 'click', function(){
                infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
                infoWindow.open(map, marker);
            });


            markers.push(marker);


          }

          for (i = 0; i < dealLocationsStrip.length; i++){
            createMarker(dealLocationsStrip[i]);
          }

          var openInfoWindow = function(e, selectedMarker){
            e.preventDefault();
            google.maps.event.trigger(selectedMarker, 'click');
          }

        }
    };
    return jsondata;
});
