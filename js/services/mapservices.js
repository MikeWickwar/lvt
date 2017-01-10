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
          zoom: 16,
          mapTypeControl: false,
          panControl: false,
          zoomControl: false
          });
         var places = new google.maps.places.PlacesService(map);

         var infoWindow = new google.maps.InfoWindow({
           content: document.getElementById('info-content')
         });

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
          // Search for hotels in the selected city, within the viewport of the map.
          search = function() {
           var search = {
             bounds: map.getBounds(),
             types: ['lodging']
             };
          }
          function clearMarkers() {
            for (var i = 0; i < markers.length; i++) {
              if (markers[i]) {
                markers[i].setMap(null);
              }
            }
            markers = [];
          }

          function dropMarker(i) {
            return function() {
              markers[i].setMap(map);
            };
          }
          function addResult(result, i) {
        var results = document.getElementById('results');
        var markerLetter = String.fromCharCode('A'.charCodeAt(0) + (i % 26));
        var markerIcon = MARKER_PATH + markerLetter + '.png';

        var tr = document.createElement('tr');
        tr.style.backgroundColor = (i % 2 === 0 ? '#F0F0F0' : '#FFFFFF');
        tr.onclick = function() {
          google.maps.event.trigger(markers[i], 'click');
        };

        var iconTd = document.createElement('td');
        var nameTd = document.createElement('td');
        var icon = document.createElement('img');
        icon.src = markerIcon;
        icon.setAttribute('class', 'placeIcon');
        icon.setAttribute('className', 'placeIcon');
        var name = document.createTextNode(result.name);
        iconTd.appendChild(icon);
        nameTd.appendChild(name);
        tr.appendChild(iconTd);
        tr.appendChild(nameTd);
        results.appendChild(tr);
      }

      function clearResults() {
        var results = document.getElementById('results');
        while (results.childNodes[0]) {
          results.removeChild(results.childNodes[0]);
        }
      }
      // Get the place details for a hotel. Show the information in an info window,
    // anchored on the marker for the hotel that the user selected.
    function showInfoWindow() {
      var marker = this;
      places.getDetails({placeId: marker.placeResult.place_id},
          function(place, status) {
            if (status !== google.maps.places.PlacesServiceStatus.OK) {
              return;
            }
            infoWindow.open(map, marker);
            buildIWContent(place);
          });
    }
    // Load the place information into the HTML elements used by the info window.
     function buildIWContent(place) {
       document.getElementById('iw-icon').innerHTML = '<img class="hotelIcon" ' +
           'src="' + place.icon + '"/>';
       document.getElementById('iw-url').innerHTML = '<b><a href="' + place.url +
           '">' + place.name + '</a></b>';
       document.getElementById('iw-address').textContent = place.vicinity;

       if (place.formatted_phone_number) {
         document.getElementById('iw-phone-row').style.display = '';
         document.getElementById('iw-phone').textContent =
             place.formatted_phone_number;
       } else {
         document.getElementById('iw-phone-row').style.display = 'none';
       }

       // Assign a five-star rating to the hotel, using a black star ('&#10029;')
       // to indicate the rating the hotel has earned, and a white star ('&#10025;')
       // for the rating points not achieved.
       if (place.rating) {
         var ratingHtml = '';
         for (var i = 0; i < 5; i++) {
           if (place.rating < (i + 0.5)) {
             ratingHtml += '&#10025;';
           } else {
             ratingHtml += '&#10029;';
           }
         document.getElementById('iw-rating-row').style.display = '';
         document.getElementById('iw-rating').innerHTML = ratingHtml;
         }
       } else {
         document.getElementById('iw-rating-row').style.display = 'none';
       }
       // The regexp isolates the first part of the URL (domain plus subdomain)
       // to give a short URL for displaying in the info window.
       if (place.website) {
         var fullUrl = place.website;
         var website = hostnameRegexp.exec(place.website);
         if (website === null) {
           website = 'http://' + place.website + '/';
           fullUrl = website;
         }
         document.getElementById('iw-website-row').style.display = '';
         document.getElementById('iw-website').textContent = website;
       } else {
         document.getElementById('iw-website-row').style.display = 'none';
       }
     }

          places.nearbySearch(search, function(results, status) {
             if (status === google.maps.places.PlacesServiceStatus.OK) {
               clearResults();
               clearMarkers();
               // Create a marker for each hotel found, and
               // assign a letter of the alphabetic to each marker icon.
               for (var i = 0; i < results.length; i++) {
                 var markerLetter = String.fromCharCode('A'.charCodeAt(0) + (i % 26));
                 var markerIcon = MARKER_PATH + markerLetter + '.png';
                 // Use marker animation to drop the icons incrementally on the map.
                 markers[i] = new google.maps.Marker({
                   position: results[i].geometry.location,
                   animation: google.maps.Animation.DROP,
                   icon: markerIcon
                 });
                 // If the user clicks a hotel marker, show the details of that hotel
                 // in an info window.
                 markers[i].placeResult = results[i];
                 google.maps.event.addListener(markers[i], 'click', showInfoWindow);
                 setTimeout(dropMarker(i), i * 100);
                 addResult(results[i], i);
               }
             }
           });
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
