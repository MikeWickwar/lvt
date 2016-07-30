function initMap() {
  console.log("google map init function hit");
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

  var lasVegas = new google.maps.LatLng(36.170488, -115.142809);

  map = new google.maps.Map(document.getElementById('vegasMap'), {
  center: lasVegas,
  zoom: 16
  });

  var heatmap = new google.maps.visualization.HeatmapLayer({
  data: heatmapData,
  radius: 20
  });
  heatmap.setMap(map);
}

$(function () {
  initMap();
})
