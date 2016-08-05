/* Data points defined as an array of LatLng objects */
var heatmapData = [
  //The D
  {location: new google.maps.LatLng(36.16949,-115.143077), weight: 100020},
  //freemont exp.
  {location: new google.maps.LatLng(36.170488, -115.142809), weight: 50000},
  //four queens
  {location: new google.maps.LatLng(36.1697672,-115.1437154), weight: 21221},
  //golden nugget
  {location: new google.maps.LatLng(36.1703267,-115.1457436), weight: 122222},
  //the plaza
  {location: new google.maps.LatLng(36.1713467,-115.1470735), weight: 12222},
  //golden gate
  {location: new google.maps.LatLng(36.1711016,-115.1462776), weight: 12222},
  //california
  {location: new google.maps.LatLng(36.1729785,-115.1448324), weight: 12222},
  //downtown grand
  {location: new google.maps.LatLng(36.1720691,-115.1411417), weight: 12222},
  //gold spike
  {location: new google.maps.LatLng(36.1711121,-115.140793), weight: 12222},
  //el cortez
  {location: new google.maps.LatLng(36.1688819,-115.1391032), weight: 122222}
];

var dealLocations = [
    {
        casino : 'The D',
        desc : 'This is the best casino in the world!',
        lat : 36.16949,
        long : -115.143077
    },
    {
        casino : 'freemont hotel and casino',
        desc : 'This casino is aiiiiite!',
        lat : 36.170539,
        long : -115.142809
    },
    {
        casino : 'four queens',
        desc : 'This is the second best casino in the world!',
        lat : 36.1697672,
        long : -115.1437154
    },
    {
        casino : 'Golden Nugget',
        desc : 'If you\'re looking for you\'re golden nugget, you might find it here',
        lat : 36.1703267,
        long : -115.1457436
    },
    {
        casino : 'The Plaza',
        desc : 'Go to the plaza and ask for the Mikey D Special $$$',
        lat : 36.1713467,
        long : -115.1470735
    },
    {
        casino : 'Golden Gate',
        desc : '2 for 1 \'you call it\'s\' all night long!',
        lat : 36.1711016,
        long : -115.1462776
    },
    {
        casino : 'California',
        desc : '$10 match play on all dope ass bets!!',
        lat : 36.1729785,
        long : -115.1448324
    },
    {
        casino : 'Downtown Grand',
        desc : 'This is the downtown ain\'t it grand! $5 poker hands',
        lat : 36.1720691,
        long : -115.1411417
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
app.controller('VegasMapCtrl', function ($scope) {
  $("html").css('background-image', 'url(https://www.excalibur.com/content/dam/MGM/excalibur/casino/poker/excalibur-casino-poker-chips.tif)')
  var lasVegas = new google.maps.LatLng(36.170488, -115.142809);

  $scope.map = new google.maps.Map(document.getElementById('vegasMap'), {
  center: lasVegas,
  zoom: 16
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
