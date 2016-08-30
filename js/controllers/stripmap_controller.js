/* Data points defined as an array of LatLng objects */
var heatmapData = [
  //The stratosphere
  {location: new google.maps.LatLng(36.146129,-115.160683), weight: 100020},
  // circus circus
  {location: new google.maps.LatLng(36.1374415, -115.1647961), weight: 50000},
  //The Wynn
  {location: new google.maps.LatLng(36.1264898, -115.165739), weight: 21221},
  //trump
  {location: new google.maps.LatLng(36.1295451, -115.1728213), weight: 1},
  //tthe mirage
  {location: new google.maps.LatLng(36.1211957, -115.1740735), weight: 12222},
  //piazzo
  {location: new google.maps.LatLng(36.1239675, -115.167916), weight: 12222},
  //Vinitian
  {location: new google.maps.LatLng(36.121174, -115.1696526), weight: 12222},
  //downtown grand
  {location: new google.maps.LatLng(36.1720691,-115.1411417), weight: 12222},
  //gold spike
  {location: new google.maps.LatLng(36.1711121,-115.140793), weight: 12222},
  //el cortez
  {location: new google.maps.LatLng(36.1688819,-115.1391032), weight: 122222}
];

var dealLocations = [
    {
        casino : 'The Stratosphere',
        desc : 'This thing is gigantic!',
        lat : 36.146129,
        long : -115.160683
    },
    {
        casino : 'Circus Circus',
        desc : 'Is that Hunter S. Thompson?!',
        lat : 36.1374415,
        long : -115.1647961
    },
    {
        casino : 'The Wynn',
        desc : 'Where you can Wynn!!',
        lat : 36.1264898,
        long : -115.165739
    },
    {
        casino : 'Trump Tower',
        desc : 'Don\'t do it',
        lat : 36.1295451,
        long : -115.1728213
    },
    {
        casino : 'The Mirage',
        desc : 'Gotta see the volcano! classic!',
        lat : 36.1211957,
        long : -115.1740735
    },
    {
        casino : 'Piazzo',
        desc : '2 for 1 \'you call it\'s\' all night long!',
        lat : 36.1239675,
        long : -115.167916
    },
    {
        casino : 'Vinitian',
        desc : '$10 match play on all dope ass bets!!',
        lat : 36.121174,
        long : -115.1696526
    },
    {
        casino : 'Ceasers Palace',
        desc : 'Hail Ceaser! ',
        lat : 36.116169,
        long : -115.1745003
    },
    {
        casino : 'Gold Spike',
        desc : 'Spike your Gold!',
        lat : 36.1711121,
        long : -115.140793
    },
    {
        casino : 'El Cortez',
        desc : 'Go to the back nock 3 times and kick the door. password is "boobs". you\'re welcome',
        lat : 36.1688819,
        long : -115.1391032
    }
];
//Angular App Module and Controller
app.controller('StripMapCtrl', function ($scope) {
  $("html").css('background-image', 'url(https://www.excalibur.com/content/dam/MGM/excalibur/casino/poker/excalibur-casino-poker-chips.tif)')
  var lasVegas = new google.maps.LatLng(36.113679, -115.142809);

  $scope.map = new google.maps.Map(document.getElementById('vegasMap'), {
  center: lasVegas,
  zoom: 13
  });

  $scope.markers = [];

  var infoWindow = new google.maps.InfoWindow();

  var heatmap = new google.maps.visualization.HeatmapLayer({
  data: heatmapData,
  radius: 20
  });
  heatmap.setMap($scope.map);


  var createMarker = function (info){

    var marker = new google.maps.Marker({
        map: $scope.map,
        position: new google.maps.LatLng(info.lat, info.long),
        title: info.casino
    });
    marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';

    google.maps.event.addListener(marker, 'click', function(){
        infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
        infoWindow.open($scope.map, marker);
    });

    $scope.markers.push(marker);

  }

  for (i = 0; i < dealLocations.length; i++){
    createMarker(dealLocations[i]);
  }

  $scope.openInfoWindow = function(e, selectedMarker){
    e.preventDefault();
    google.maps.event.trigger(selectedMarker, 'click');
  }


});
